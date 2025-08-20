# Neo Typing Test - User Account Setup Guide

This guide will help you set up user accounts and progress tracking for the Neo Typing Test using Supabase.

## 🚀 **Step 1: Create a Supabase Project**

1. Go to [supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `neo-typing-test`
   - **Database Password**: Choose a strong password
   - **Region**: Select closest to your users
5. Click "Create new project"
6. Wait for the project to be set up (2-3 minutes)

## 🔧 **Step 2: Configure Authentication**

1. In your Supabase dashboard, go to **Authentication** → **Settings**
2. Under **Site URL**, add your domain (e.g., `https://neotypingtest.com`)
3. Under **Redirect URLs**, add:
   - `https://neotypingtest.com`
   - `http://localhost:3000` (for development)
4. Go to **Authentication** → **Providers**
5. Enable **Google**:
   - Get Client ID and Secret from [Google Cloud Console](https://console.cloud.google.com)
   - Add your domain to authorized origins
6. Enable **GitHub**:
   - Get Client ID and Secret from [GitHub OAuth Apps](https://github.com/settings/developers)
   - Set callback URL to `https://your-project.supabase.co/auth/v1/callback`

## 🗄️ **Step 3: Set Up Database**

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy the contents of `database-schema.sql`
3. Paste and run the SQL commands
4. This will create:
   - `profiles` table for user data
   - `test_results` table for typing test history
   - Row Level Security policies
   - Automatic triggers for user creation

## 🔑 **Step 4: Get API Keys**

1. Go to **Settings** → **API** in your Supabase dashboard
2. Copy the **Project URL** and **anon public** key
3. Open `auth.js` in your project
4. Replace the placeholder values:
   ```javascript
   const SUPABASE_URL = 'YOUR_ACTUAL_SUPABASE_URL';
   const SUPABASE_ANON_KEY = 'YOUR_ACTUAL_SUPABASE_ANON_KEY';
   ```

## 🎯 **Step 5: Test the Integration**

1. Open your typing test website
2. Click "SIGN UP" and try logging in with Google or GitHub
3. Complete a typing test to verify data is being saved
4. Check your profile to see progress tracking

## 📊 **Features Included**

### **User Management**
- ✅ Social login (Google, GitHub)
- ✅ Username selection during signup
- ✅ Public profiles
- ✅ Account deletion

### **Progress Tracking**
- ✅ WPM and accuracy history
- ✅ Personal bests tracking
- ✅ Test completion count
- ✅ Progress charts

### **Data Security**
- ✅ Row Level Security (RLS)
- ✅ User data isolation
- ✅ Secure authentication

## 🔧 **Customization Options**

### **Add More Social Providers**
Edit `auth.js` to add more OAuth providers:
```javascript
// Add Discord, Twitter, etc.
async loginWithDiscord() {
    const { error } = await supabase.auth.signInWithOAuth({
        provider: 'discord',
        options: { redirectTo: window.location.origin }
    });
}
```

### **Add More Profile Fields**
Update the database schema to include:
- Profile bio
- Typing preferences
- Achievement badges
- Social links

### **Enhanced Analytics**
Add more tracking metrics:
- Average WPM over time
- Error patterns
- Typing speed consistency
- Practice streaks

## 🚨 **Troubleshooting**

### **Authentication Issues**
- Check redirect URLs in Supabase settings
- Verify OAuth provider configuration
- Ensure HTTPS is used in production

### **Database Errors**
- Check RLS policies are enabled
- Verify table structure matches schema
- Test with Supabase dashboard

### **Performance Issues**
- Monitor database query performance
- Consider adding more indexes
- Implement caching for frequently accessed data

## 📈 **Next Steps**

1. **Deploy to Production**: Set up your domain and SSL
2. **Add Analytics**: Integrate Google Analytics for user insights
3. **Implement Caching**: Add Redis for better performance
4. **Add Notifications**: Email reminders for practice sessions
5. **Social Features**: Leaderboards and friend challenges

## 🆘 **Support**

If you encounter issues:
1. Check Supabase logs in the dashboard
2. Verify browser console for JavaScript errors
3. Test with different browsers/devices
4. Review Supabase documentation

---

**Happy Typing! 🚀**
