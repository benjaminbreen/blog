# Deployment Guide

This guide covers deploying the Psychedelic Archive to various hosting platforms.

## Prerequisites

- Node.js 18+ installed locally
- PostgreSQL database (managed or self-hosted)
- Git repository set up
- Domain name (optional but recommended)

## Environment Variables

Required environment variables for production:

```env
# Payload CMS (REQUIRED)
PAYLOAD_SECRET=your-strong-random-secret-here
DATABASE_URL=postgresql://user:password@host:port/database

# Next.js (REQUIRED)
NEXT_PUBLIC_SERVER_URL=https://your-domain.com

# Optional
NODE_ENV=production
```

### Generating a Secure PAYLOAD_SECRET

```bash
# Using OpenSSL
openssl rand -base64 32

# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

## Deployment Options

### Option 1: Vercel (Recommended for Easy Setup)

**Pros:**
- Optimized for Next.js
- Automatic deployments from Git
- Free tier available
- Built-in CDN

**Setup:**

1. **Create PostgreSQL Database**
   - Use Vercel Postgres, Railway, Supabase, or any PostgreSQL provider
   - Note the connection string

2. **Connect Repository**
   ```bash
   # Install Vercel CLI (optional)
   npm i -g vercel

   # Deploy
   vercel
   ```

3. **Configure Environment Variables**
   - Go to Project Settings → Environment Variables
   - Add all required variables
   - Redeploy

4. **Initial Setup**
   - Visit `your-domain.vercel.app/admin`
   - Create your first admin user
   - Seed initial data (categories, eras)

**Configuration:**

```js
// vercel.json (optional)
{
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

### Option 2: Railway

**Pros:**
- Database and app in one place
- Easy PostgreSQL setup
- Generous free tier
- Simple environment management

**Setup:**

1. **Create New Project**
   - Connect GitHub repository
   - Railway will auto-detect Next.js

2. **Add PostgreSQL**
   - Click "New" → "Database" → "PostgreSQL"
   - Railway auto-creates DATABASE_URL

3. **Configure Environment Variables**
   - Add PAYLOAD_SECRET
   - Add NEXT_PUBLIC_SERVER_URL
   - Use Railway-provided DATABASE_URL

4. **Deploy**
   - Push to main branch
   - Railway auto-deploys

**Railway Configuration:**

```toml
# railway.toml
[build]
builder = "NIXPACKS"

[deploy]
startCommand = "npm start"
restartPolicyType = "ON_FAILURE"
restartPolicyMaxRetries = 10
```

### Option 3: DigitalOcean App Platform

**Pros:**
- Full control
- Managed PostgreSQL
- Predictable pricing
- Easy scaling

**Setup:**

1. **Create Database**
   - Create Managed PostgreSQL database
   - Note connection details

2. **Create App**
   - Connect GitHub repository
   - Select "Next.js" detected

3. **Configure**
   - Set environment variables
   - Configure build command: `npm run build`
   - Configure run command: `npm start`

4. **Database Connection**
   - Use provided DATABASE_URL
   - Add to environment variables

### Option 4: Self-Hosted (VPS)

**Pros:**
- Complete control
- Cost-effective at scale
- Custom configuration

**Requirements:**
- Linux VPS (Ubuntu/Debian recommended)
- Nginx or similar web server
- PM2 or similar process manager
- PostgreSQL database

**Setup:**

1. **Install Dependencies**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js 18+
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt install -y nodejs

   # Install PostgreSQL
   sudo apt install postgresql postgresql-contrib

   # Install PM2
   sudo npm install -g pm2
   ```

2. **Create Database**
   ```bash
   sudo -u postgres psql
   CREATE DATABASE psychedelic_archive;
   CREATE USER archive_user WITH PASSWORD 'secure_password';
   GRANT ALL PRIVILEGES ON DATABASE psychedelic_archive TO archive_user;
   \q
   ```

3. **Clone and Setup Project**
   ```bash
   cd /var/www
   git clone your-repo-url psychedelic-archive
   cd psychedelic-archive
   npm install
   ```

4. **Configure Environment**
   ```bash
   cp .env.example .env
   nano .env
   # Edit with your values
   ```

5. **Build Application**
   ```bash
   npm run build
   ```

6. **Start with PM2**
   ```bash
   pm2 start npm --name "psychedelic-archive" -- start
   pm2 save
   pm2 startup
   ```

7. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

8. **Enable HTTPS with Let's Encrypt**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d your-domain.com
   ```

## Post-Deployment Setup

### 1. Create Admin User

- Visit `/admin`
- Complete the user creation form
- Save credentials securely

### 2. Seed Initial Data

Two options:

**Option A: Manual Entry**
- Create categories (Text, Audio/Video, Bios, etc.)
- Create eras (Early Modern, 1950s, 1960s, etc.)
- Create initial tags

**Option B: Database Seeding**
```bash
# Create a seed script based on lib/seed.ts
# Run migrations/seeds through Payload
```

### 3. Configure Email (Optional)

For submission notifications:

```env
# Add to .env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### 4. Set Up Backups

**Database Backups:**
```bash
# Cron job for daily backups
0 2 * * * pg_dump -U archive_user psychedelic_archive > /backups/db_$(date +\%Y\%m\%d).sql
```

**Media Backups:**
```bash
# Sync to S3 or similar
aws s3 sync /var/www/psychedelic-archive/public/media s3://your-bucket/media
```

## Performance Optimization

### Enable Caching

**Next.js:**
```js
// next.config.js
module.exports = {
  ...withPayload(nextConfig),
  compress: true,
  poweredByHeader: false,
}
```

**Nginx:**
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

### Database Optimization

```sql
-- Create indexes for better performance
CREATE INDEX idx_entries_category ON entries(category_id);
CREATE INDEX idx_entries_era ON entries(era_id);
CREATE INDEX idx_entries_slug ON entries(slug);
CREATE INDEX idx_entries_status ON entries(status);
```

### CDN Setup

Use Cloudflare or similar for:
- Static asset caching
- DDoS protection
- SSL/TLS
- Global distribution

## Monitoring

### Recommended Tools

- **Uptime**: UptimeRobot, Pingdom
- **Errors**: Sentry
- **Analytics**: Plausible, Fathom (privacy-focused)
- **Performance**: Vercel Analytics, WebPageTest

### Health Check Endpoint

Create `/app/api/health/route.ts`:
```typescript
export async function GET() {
  return Response.json({ status: 'ok' })
}
```

## Troubleshooting

### Build Failures

**Issue**: Out of memory
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**Issue**: Database connection
- Verify DATABASE_URL is correct
- Check database is accessible from deploy environment
- Ensure SSL mode if required: `?sslmode=require`

### Runtime Issues

**Issue**: Images not loading
- Check public/media directory permissions
- Verify NEXT_PUBLIC_SERVER_URL is correct
- Check image optimization settings

**Issue**: Admin panel 404
- Ensure `/admin` route is not blocked
- Check Payload config is loaded
- Verify build completed successfully

## Security Checklist

- [ ] Strong PAYLOAD_SECRET set
- [ ] Database uses strong password
- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Database backups automated
- [ ] Media backups configured
- [ ] Security headers configured
- [ ] Rate limiting enabled (optional)
- [ ] Admin access monitored

## Scaling Considerations

### Horizontal Scaling

For high traffic:
- Use load balancer
- Multiple app instances
- Shared database
- Shared media storage (S3, etc.)

### Database Scaling

- Enable connection pooling
- Add read replicas for heavy read loads
- Consider managed database services

### Media Storage

For large media libraries:
- Use S3 or similar object storage
- Enable CDN for media delivery
- Implement lazy loading

## Cost Estimates

### Small Archive (< 1000 visitors/month)
- Vercel Free + Railway Postgres: $0-5/month
- Self-hosted VPS: $5-10/month

### Medium Archive (< 10,000 visitors/month)
- Vercel Pro + Managed DB: $20-30/month
- DigitalOcean App Platform: $25-40/month

### Large Archive (100,000+ visitors/month)
- Custom infrastructure: $100-500/month depending on traffic

## Support

For deployment issues:
- Check logs: `pm2 logs` or platform-specific logs
- Review README.md for setup details
- Contact: support@psychedelicarchive.com

---

**Next Steps After Deployment:**
1. Create admin user
2. Seed initial data
3. Test all features
4. Set up backups
5. Configure monitoring
6. Invite team members
7. Start adding content!
