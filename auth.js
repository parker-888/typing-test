// Supabase Configuration
// Load credentials from environment variables or config
const SUPABASE_URL = window.config?.SUPABASE_URL || process.env.SUPABASE_URL || '';
const SUPABASE_ANON_KEY = window.config?.SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || '';

// Validate configuration
if (!SUPABASE_URL || !SUPABASE_ANON_KEY || SUPABASE_URL === 'YOUR_ACTUAL_SUPABASE_URL' || SUPABASE_ANON_KEY === 'YOUR_ACTUAL_SUPABASE_ANON_KEY') {
    console.error('Missing or invalid Supabase configuration. Please update the SUPABASE_URL and SUPABASE_ANON_KEY values in auth.js');
    console.error('You can find these values in your Supabase dashboard under Settings > API');
}

// Initialize Supabase client
let supabase;
if (SUPABASE_URL && SUPABASE_ANON_KEY && SUPABASE_URL !== 'YOUR_ACTUAL_SUPABASE_URL' && SUPABASE_ANON_KEY !== 'YOUR_ACTUAL_SUPABASE_ANON_KEY') {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.error('Supabase client not initialized due to missing or invalid configuration');
}

class AuthManager {
    constructor() {
        this.currentUser = null;
        this.userProfile = null;
        this.init();
    }

    async init() {
        // Check if Supabase is properly initialized
        if (!supabase) {
            console.error('Supabase not initialized. Authentication features will be disabled.');
            this.updateUI(false);
            return;
        }

        try {
            // Check for existing session
            const { data: { session } } = await supabase.auth.getSession();
            if (session) {
                this.currentUser = session.user;
                await this.loadUserProfile();
                this.updateUI(true);
            } else {
                this.updateUI(false);
            }

            // Listen for auth changes
            supabase.auth.onAuthStateChange(async (event, session) => {
                if (event === 'SIGNED_IN' && session) {
                    this.currentUser = session.user;
                    await this.loadUserProfile();
                    this.updateUI(true);
                } else if (event === 'SIGNED_OUT') {
                    this.currentUser = null;
                    this.userProfile = null;
                    this.updateUI(false);
                }
            });
        } catch (error) {
            console.error('Error initializing authentication:', error);
            this.updateUI(false);
        }

        this.bindEvents();
    }

    bindEvents() {
        // Only bind events if elements exist (for main page)
        const logoutBtn = document.getElementById('logoutBtn');
        const profileBtn = document.getElementById('profileBtn');
        const deleteAccountBtn = document.getElementById('deleteAccountBtn');

        if (logoutBtn) {
            logoutBtn.addEventListener('click', () => this.logout());
        }
        if (profileBtn) {
            profileBtn.addEventListener('click', () => this.showProfile());
        }
        if (deleteAccountBtn) {
            deleteAccountBtn.addEventListener('click', () => this.deleteAccount());
        }
    }

    updateUI(isLoggedIn) {
        const authButtons = document.getElementById('authButtons');
        const userProfile = document.getElementById('userProfile');
        const profileSection = document.getElementById('profileSection');

        if (isLoggedIn && this.userProfile) {
            if (authButtons) authButtons.style.display = 'none';
            if (userProfile) {
                userProfile.style.display = 'flex';
                const usernameElement = document.getElementById('username');
                const userEmailElement = document.getElementById('userEmail');
                if (usernameElement) usernameElement.textContent = this.userProfile.username;
                if (userEmailElement) userEmailElement.textContent = this.currentUser.email;
            }
        } else {
            if (authButtons) authButtons.style.display = 'flex';
            if (userProfile) userProfile.style.display = 'none';
            if (profileSection) profileSection.style.display = 'none';
        }
    }



    async loginWithGoogle() {
        if (!supabase) {
            alert('Authentication service not available. Please configure your Supabase credentials in auth.js');
            console.error('Supabase not initialized. Please check the configuration at the top of auth.js');
            return;
        }
        
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    }

    async loginWithGitHub() {
        if (!supabase) {
            alert('Authentication service not available. Please configure your Supabase credentials in auth.js');
            console.error('Supabase not initialized. Please check the configuration at the top of auth.js');
            return;
        }
        
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Login error:', error);
            alert('Login failed. Please try again.');
        }
    }

    async signupWithGoogle() {
        if (!supabase) {
            alert('Authentication service not available. Please configure your Supabase credentials in auth.js');
            console.error('Supabase not initialized. Please check the configuration at the top of auth.js');
            return;
        }
        
        const username = document.getElementById('username')?.value?.trim();
        if (!username) {
            alert('Please enter a username');
            return;
        }
        
        // Store username in session storage for after OAuth redirect
        sessionStorage.setItem('pendingUsername', username);
        
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Signup error:', error);
            alert('Signup failed. Please try again.');
        }
    }

    async signupWithGitHub() {
        if (!supabase) {
            alert('Authentication service not available. Please configure your Supabase credentials in auth.js');
            console.error('Supabase not initialized. Please check the configuration at the top of auth.js');
            return;
        }
        
        const username = document.getElementById('username')?.value?.trim();
        if (!username) {
            alert('Please enter a username');
            return;
        }
        
        // Store username in session storage for after OAuth redirect
        sessionStorage.setItem('pendingUsername', username);
        
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'github',
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Signup error:', error);
            alert('Signup failed. Please try again.');
        }
    }

    async loadUserProfile() {
        if (!this.currentUser || !supabase) return;

        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('*')
                .eq('id', this.currentUser.id)
                .single();

            if (error && error.code !== 'PGRST116') {
                throw error;
            }

            if (!data) {
                // Create profile if it doesn't exist
                const pendingUsername = sessionStorage.getItem('pendingUsername');
                if (pendingUsername) {
                    await this.createProfile(pendingUsername);
                    sessionStorage.removeItem('pendingUsername');
                } else {
                    // Handle existing user without profile
                    await this.createProfile(this.currentUser.email.split('@')[0]);
                }
            } else {
                this.userProfile = data;
            }
        } catch (error) {
            console.error('Error loading profile:', error);
        }
    }

    async createProfile(username) {
        if (!supabase) return;
        
        try {
            const { data, error } = await supabase
                .from('profiles')
                .insert([
                    {
                        id: this.currentUser.id,
                        username: username,
                        email: this.currentUser.email,
                        best_wpm: 0,
                        best_accuracy: 0,
                        tests_completed: 0
                    }
                ])
                .select()
                .single();

            if (error) throw error;
            this.userProfile = data;
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    }

    async logout() {
        if (!supabase) return;
        
        try {
            const { error } = await supabase.auth.signOut();
            if (error) throw error;
        } catch (error) {
            console.error('Logout error:', error);
        }
    }

    async deleteAccount() {
        if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
            return;
        }

        try {
            // Delete profile data
            const { error: profileError } = await supabase
                .from('profiles')
                .delete()
                .eq('id', this.currentUser.id);

            if (profileError) throw profileError;

            // Delete test results
            const { error: resultsError } = await supabase
                .from('test_results')
                .delete()
                .eq('user_id', this.currentUser.id);

            if (resultsError) throw resultsError;

            // Delete user account
            const { error: userError } = await supabase.auth.admin.deleteUser(this.currentUser.id);
            if (userError) throw userError;

            alert('Account deleted successfully');
        } catch (error) {
            console.error('Delete account error:', error);
            alert('Failed to delete account. Please try again.');
        }
    }

    showProfile() {
        const profileSection = document.getElementById('profileSection');
        profileSection.style.display = 'block';
        profileSection.scrollIntoView({ behavior: 'smooth' });
        this.loadProfileData();
    }

    async loadProfileData() {
        if (!this.userProfile) return;

        try {
            // Load personal bests
            document.getElementById('bestWpm').textContent = this.userProfile.best_wpm || 0;
            document.getElementById('bestAccuracy').textContent = (this.userProfile.best_accuracy || 0) + '%';
            document.getElementById('testsCompleted').textContent = this.userProfile.tests_completed || 0;

            // Load recent test results for chart
            const { data: results, error } = await supabase
                .from('test_results')
                .select('wpm, accuracy, created_at')
                .eq('user_id', this.currentUser.id)
                .order('created_at', { ascending: false })
                .limit(20);

            if (error) throw error;

            this.drawProgressChart(results.reverse());
        } catch (error) {
            console.error('Error loading profile data:', error);
        }
    }

    drawProgressChart(results) {
        const canvas = document.getElementById('progressChart');
        const ctx = canvas.getContext('2d');
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        if (results.length === 0) {
            ctx.fillStyle = '#888';
            ctx.font = '16px Orbitron';
            ctx.textAlign = 'center';
            ctx.fillText('No test data yet', canvas.width / 2, canvas.height / 2);
            return;
        }

        const padding = 40;
        const chartWidth = canvas.width - 2 * padding;
        const chartHeight = canvas.height - 2 * padding;
        
        // Find min/max values
        const wpmValues = results.map(r => r.wpm);
        const maxWpm = Math.max(...wpmValues, 50); // Minimum scale of 50 WPM
        const minWpm = Math.min(...wpmValues, 0);
        
        // Draw grid
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        
        // Horizontal grid lines
        for (let i = 0; i <= 5; i++) {
            const y = padding + (chartHeight / 5) * i;
            ctx.beginPath();
            ctx.moveTo(padding, y);
            ctx.lineTo(canvas.width - padding, y);
            ctx.stroke();
            
            // WPM labels
            const wpmValue = maxWpm - (maxWpm / 5) * i;
            ctx.fillStyle = '#888';
            ctx.font = '12px Orbitron';
            ctx.textAlign = 'right';
            ctx.fillText(Math.round(wpmValue), padding - 10, y + 4);
        }
        
        // Draw WPM line
        ctx.strokeStyle = '#00ffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        results.forEach((result, index) => {
            const x = padding + (chartWidth / (results.length - 1)) * index;
            const y = padding + chartHeight - (result.wpm / maxWpm) * chartHeight;
            
            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        
        ctx.stroke();
        
        // Draw points
        ctx.fillStyle = '#00ffff';
        results.forEach((result, index) => {
            const x = padding + (chartWidth / (results.length - 1)) * index;
            const y = padding + chartHeight - (result.wpm / maxWpm) * chartHeight;
            
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    async saveTestResult(wpm, accuracy, testType, difficulty, duration) {
        if (!this.currentUser || !supabase) return;

        try {
            // Save test result
            const { error: resultError } = await supabase
                .from('test_results')
                .insert([
                    {
                        user_id: this.currentUser.id,
                        wpm: wpm,
                        accuracy: accuracy,
                        test_type: testType,
                        difficulty: difficulty,
                        duration: duration
                    }
                ]);

            if (resultError) throw resultError;

            // Update personal bests
            let updates = {
                tests_completed: (this.userProfile.tests_completed || 0) + 1
            };

            if (wpm > (this.userProfile.best_wpm || 0)) {
                updates.best_wpm = wpm;
            }

            if (accuracy > (this.userProfile.best_accuracy || 0)) {
                updates.best_accuracy = accuracy;
            }

            const { error: profileError } = await supabase
                .from('profiles')
                .update(updates)
                .eq('id', this.currentUser.id);

            if (profileError) throw profileError;

            // Update local profile
            this.userProfile = { ...this.userProfile, ...updates };
        } catch (error) {
            console.error('Error saving test result:', error);
        }
    }
    

}

// Initialize auth manager
let authManager;
document.addEventListener('DOMContentLoaded', () => {
    authManager = new AuthManager();
    window.authManager = authManager; // Make globally accessible
});
