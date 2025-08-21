# Supabase Authentication Setup Guide

## 🔧 **Step 1: Create a Supabase Project**

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization and enter project details
4. Wait for the project to be created (this may take a few minutes)

## 🔑 **Step 2: Get Your API Keys**

1. In your Supabase dashboard, go to **Settings** → **API**
2. Copy the **Project URL** (looks like: `https://your-project-id.supabase.co`)
3. Copy the **anon public** key (starts with `eyJ...`)

## 📝 **Step 3: Configure Your Project**

1. Open `auth.js` in your project
2. Replace the placeholder values at the top of the file:

```javascript
const SUPABASE_URL = 'https://your-project-id.supabase.co';
const SUPABASE_ANON_KEY = 'your-anon-key-here';
```

## 🔐 **Step 4: Set Up OAuth Providers**

### **Google OAuth Setup**
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the Google+ API
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client IDs**
5. Set application type to "Web application"
6. Add authorized redirect URIs:
   - `https://your-project-id.supabase.co/auth/v1/callback`
   - `http://localhost:3000/auth/v1/callback` (for development)
7. Copy the Client ID and Client Secret
8. In Supabase dashboard, go to **Authentication** → **Providers** → **Google**
9. Enable Google provider and paste your Client ID and Client Secret

### **GitHub OAuth Setup**
1. Go to [GitHub Developer Settings](https://github.com/settings/developers)
2. Click "New OAuth App"
3. Fill in the details:
   - Application name: Your app name
   - Homepage URL: Your website URL
   - Authorization callback URL: `https://your-project-id.supabase.co/auth/v1/callback`
4. Copy the Client ID and Client Secret
5. In Supabase dashboard, go to **Authentication** → **Providers** → **GitHub**
6. Enable GitHub provider and paste your Client ID and Client Secret

## 🗄️ **Step 5: Set Up Database Schema**

Run the SQL commands from `database-schema.sql` in your Supabase SQL editor:

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy and paste the contents of `database-schema.sql`
3. Click "Run" to execute the commands

## 🧪 **Step 6: Test the Integration**

1. Open your typing test website
2. Try clicking the "Continue with Google" or "Continue with GitHub" buttons
3. You should be redirected to the OAuth provider for authentication
4. After successful authentication, you should be redirected back to your site

## 🚨 **Troubleshooting**

### **"Authentication service not available" Error**
- Check that you've updated the `SUPABASE_URL` and `SUPABASE_ANON_KEY` in `auth.js`
- Verify the values are correct (no extra spaces, correct format)

### **OAuth Redirect Errors**
- Make sure your redirect URLs are exactly correct in both OAuth provider settings and Supabase
- For development, use `http://localhost:3000` or your actual local development URL
- For production, use your actual domain

### **Database Errors**
- Ensure you've run the database schema setup
- Check that Row Level Security (RLS) policies are enabled
- Verify table structure matches the schema

## 📱 **Production Deployment**

When deploying to production:
1. Update redirect URLs in OAuth providers to use your production domain
2. Update redirect URLs in Supabase settings
3. Ensure your domain uses HTTPS (required for OAuth)

## 🔒 **Security Notes**

- Never commit your actual Supabase keys to version control
- Use environment variables in production deployments
- The anon key is safe to use in client-side code (it's designed for this)
- Row Level Security (RLS) protects your data at the database level
