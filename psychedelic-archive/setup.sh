#!/bin/bash
# Psychedelic Archive - Complete Setup Script
# This script will set up everything you need to run the archive

set -e  # Exit on any error

echo "🎨 Psychedelic Archive Setup"
echo "============================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Check PostgreSQL
echo -e "${BLUE}Step 1: Checking PostgreSQL...${NC}"
if ! command -v psql &> /dev/null; then
    echo -e "${YELLOW}⚠️  PostgreSQL is not installed${NC}"
    echo "Please install PostgreSQL first:"
    echo "  - macOS: brew install postgresql"
    echo "  - Ubuntu: sudo apt-get install postgresql"
    echo "  - Windows: Download from postgresql.org"
    exit 1
fi
echo -e "${GREEN}✓ PostgreSQL found${NC}"

# Step 2: Start PostgreSQL (if not running)
echo -e "${BLUE}Step 2: Starting PostgreSQL...${NC}"
if ! pg_isready &> /dev/null; then
    echo "Starting PostgreSQL service..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        brew services start postgresql || true
    elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
        sudo service postgresql start || sudo systemctl start postgresql
    fi
    sleep 2
fi

if pg_isready &> /dev/null; then
    echo -e "${GREEN}✓ PostgreSQL is running${NC}"
else
    echo -e "${YELLOW}⚠️  Please start PostgreSQL manually${NC}"
    exit 1
fi

# Step 3: Create database
echo -e "${BLUE}Step 3: Creating database...${NC}"
if psql -lqt | cut -d \| -f 1 | grep -qw psychedelic_archive; then
    echo -e "${YELLOW}⚠️  Database 'psychedelic_archive' already exists${NC}"
    read -p "Drop and recreate? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        dropdb psychedelic_archive
        createdb psychedelic_archive
        echo -e "${GREEN}✓ Database recreated${NC}"
    else
        echo "Keeping existing database"
    fi
else
    createdb psychedelic_archive
    echo -e "${GREEN}✓ Database 'psychedelic_archive' created${NC}"
fi

# Step 4: Install dependencies
echo -e "${BLUE}Step 4: Installing dependencies...${NC}"
if [ ! -d "node_modules" ]; then
    npm install
    echo -e "${GREEN}✓ Dependencies installed${NC}"
else
    echo -e "${GREEN}✓ Dependencies already installed${NC}"
fi

# Step 5: Check environment variables
echo -e "${BLUE}Step 5: Checking environment...${NC}"
if [ ! -f ".env" ]; then
    echo -e "${YELLOW}⚠️  No .env file found. Creating from template...${NC}"
    cat > .env << 'EOF'
# Payload CMS
PAYLOAD_SECRET=development-secret-change-in-production
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/psychedelic_archive

# Next.js
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
EOF
    echo -e "${GREEN}✓ .env file created${NC}"
    echo -e "${YELLOW}⚠️  Please update DATABASE_URL if your PostgreSQL credentials differ${NC}"
else
    echo -e "${GREEN}✓ .env file exists${NC}"
fi

# Step 6: Start dev server in background
echo -e "${BLUE}Step 6: Starting development server...${NC}"
echo "This will run in the background. Access at http://localhost:3000"
npm run dev > dev-server.log 2>&1 &
DEV_PID=$!
echo $DEV_PID > .dev-server.pid
echo -e "${GREEN}✓ Server started (PID: $DEV_PID)${NC}"

# Wait for server to be ready
echo "Waiting for server to start..."
for i in {1..30}; do
    if curl -s http://localhost:3000 > /dev/null 2>&1; then
        echo -e "${GREEN}✓ Server is ready!${NC}"
        break
    fi
    sleep 2
    echo -n "."
done
echo ""

# Step 7: Instructions for admin user creation
echo ""
echo -e "${BLUE}Step 7: Create Admin User${NC}"
echo "========================================="
echo -e "1. Open your browser: ${GREEN}http://localhost:3000/admin${NC}"
echo "2. Fill in the admin user creation form:"
echo "   - Email: your@email.com"
echo "   - Password: (choose a strong password)"
echo "   - Name: Your Name"
echo "3. Click 'Create' to complete setup"
echo ""
read -p "Press Enter once you've created your admin user..."

# Step 8: Run import script
echo ""
echo -e "${BLUE}Step 8: Importing archive entries...${NC}"
echo "This will import:"
echo "  - Categories (Text, Audio/Video)"
echo "  - Eras (1700s, 1800-1950, 1950s, 1960s)"
echo "  - 80+ tags"
echo "  - 12 archive entries"
echo ""
read -p "Ready to import? (Y/n): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Nn]$ ]]; then
    npm run import:entries
    echo -e "${GREEN}✓ Import complete!${NC}"
else
    echo "Skipping import"
fi

# Step 9: Success message
echo ""
echo -e "${GREEN}================================================${NC}"
echo -e "${GREEN}  ✨ Setup Complete! ✨${NC}"
echo -e "${GREEN}================================================${NC}"
echo ""
echo "Your Psychedelic Archive is now running!"
echo ""
echo "Next steps:"
echo -e "  1. Visit: ${BLUE}http://localhost:3000${NC}"
echo -e "  2. Admin panel: ${BLUE}http://localhost:3000/admin${NC}"
echo -e "  3. Browse entries: ${BLUE}http://localhost:3000/entries${NC}"
echo -e "  4. Browse bios: ${BLUE}http://localhost:3000/bios${NC}"
echo -e "  5. Personal histories: ${BLUE}http://localhost:3000/personal-histories${NC}"
echo ""
echo "Add your biographical entries:"
echo "  - Luisa de Álvarez de Toledo (1915-1990)"
echo "  - Sidney Cohen (1910-1987)"
echo "  - Betty Grover Eisner (1915-2004)"
echo "  - Efrén Carlos del Pozo (1907-1979)"
echo "  - Myron Stolaroff (1920-2013)"
echo ""
echo "To stop the server:"
echo "  kill $DEV_PID"
echo "  or: kill \$(cat .dev-server.pid)"
echo ""
echo "Server logs: tail -f dev-server.log"
echo ""
echo -e "${YELLOW}Tip: Keep this terminal open to see any errors${NC}"
