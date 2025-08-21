# Environment Variables Setup Guide

This guide explains how to securely configure your Supabase credentials using environment variables instead of hardcoding them in your source code.

## 🔐 **Why Environment Variables?**

- **Security**: Keep sensitive credentials out of your source code
- **Flexibility**: Different credentials for development, staging, and production
- **Best Practices**: Follow industry standards for configuration management

## 🚀 **Setup Options**

### **Option 1: Build-Time Environment Variables (Recommended)**

If you're using a build tool (like Vite, Webpack, or similar):

1. Create a `.env` file in your project root:
```bash
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

2. Add `.env` to your `.gitignore` file:
```bash
echo ".env" >> .gitignore
```

3. Configure your build tool to inject these variables into the client-side code.

### **Option 2: Meta Tags (Runtime Injection)**

Add meta tags to your HTML files before the `config.js` script:

```html
<meta name="SUPABASE_URL" content="https://your-project-id.supabase.co">
<meta name="SUPABASE_ANON_KEY" content="your-anon-key-here">
```

### **Option 3: Window Object Injection**

Inject the variables into the window object before loading your scripts:

```html
<script>
window.SUPABASE_URL = 'https://your-project-id.supabase.co';
window.SUPABASE_ANON_KEY = 'your-anon-key-here';
</script>
```

## 🌐 **Deployment Platforms**

### **Netlify**
1. Go to your site settings → Environment variables
2. Add:
   - `SUPABASE_URL` = your Supabase URL
   - `SUPABASE_ANON_KEY` = your Supabase anon key
3. Redeploy your site

### **Vercel**
1. Go to your project settings → Environment variables
2. Add:
   - `SUPABASE_URL` = your Supabase URL
   - `SUPABASE_ANON_KEY` = your Supabase anon key
3. Redeploy your site

### **GitHub Pages**
Since GitHub Pages doesn't support server-side environment variables, use Option 2 (Meta Tags) or Option 3 (Window Object Injection).

### **Custom Server**
Set environment variables in your server configuration:
```bash
export SUPABASE_URL=https://your-project-id.supabase.co
export SUPABASE_ANON_KEY=your-anon-key-here
```

## 🔧 **Development Setup**

For local development, create a `.env` file:

```bash
# .env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

**Important**: Never commit your `.env` file to version control!

## 🛡️ **Security Best Practices**

1. **Never commit credentials**: Always use `.gitignore` for `.env` files
2. **Use different credentials**: Separate credentials for development and production
3. **Rotate keys regularly**: Update your Supabase keys periodically
4. **Monitor usage**: Keep an eye on your Supabase dashboard for unusual activity

## 🧪 **Testing Your Configuration**

1. Open your browser's developer console
2. Check for any warning messages about missing credentials
3. Try to authenticate with Google or GitHub
4. Verify that the authentication works without errors

## 🚨 **Troubleshooting**

### **"Supabase credentials not found" Warning**
- Check that your environment variables are properly set
- Verify the variable names match exactly (case-sensitive)
- Ensure your deployment platform supports environment variables

### **Authentication Still Not Working**
- Verify your Supabase project is active
- Check that OAuth providers are configured in Supabase
- Ensure your redirect URLs are correct

### **Build Errors**
- Make sure your build tool is configured to handle environment variables
- Check that variable names don't contain special characters
- Verify your `.env` file format is correct

## 📝 **Example Files**

### `.env.example`
```bash
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

### `.gitignore`
```bash
# Environment variables
.env
.env.local
.env.production
.env.staging
```

## 🔄 **Migration from Hardcoded Values**

If you previously had hardcoded credentials in `auth.js`:

1. Remove the hardcoded values
2. Set up environment variables using one of the options above
3. Test the authentication flow
4. Deploy with the new configuration

Your authentication should now work securely with environment variables!
