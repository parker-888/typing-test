class TypingTest {
    constructor() {
        // Chill mode: Simple words, no punctuation
        this.chillTexts = [
            "The quick brown fox jumps over the lazy dog. This sentence has simple words that are easy to type.",
            "Programming is fun and exciting. You can create amazing things with code and logic.",
            "The internet connects people around the world. It makes information easy to find and share.",
            "Learning new skills takes time and practice. Keep trying and you will get better.",
            "Reading books helps you learn new things. Every book has something interesting to discover.",
            "Music makes life more enjoyable. Different songs can change your mood and energy.",
            "Friends are important in life. They help you through good times and bad times.",
            "Exercise keeps your body healthy and strong. It also makes you feel happy and energetic.",
            "Food gives your body energy to work and play. Eating healthy food helps you stay well.",
            "Sleep helps your body rest and recover. Getting enough sleep makes you feel refreshed."
        ];
        
        // Typist mode: Normal complexity
        this.typistTexts = [
            "The void is silent until a single pixel lights up. Your story begins here in the digital realm where every keystroke echoes through the matrix of possibilities.",
            "In the depths of cyberspace, where data flows like rivers of light, we navigate through streams of information, each byte a building block of our digital existence.",
            "The future is not written in stone but in code, where algorithms dance and artificial intelligence dreams of electric sheep in neon-lit cities.",
            "Through the looking glass of technology, we peer into worlds both real and imagined, where virtual reality blurs the lines between what is and what could be.",
            "In this age of digital transformation, we are both creators and creations, shaping the world around us with every line of code and every thought expressed through our fingertips.",
            "The internet is not just a network of computers but a web of human consciousness, connecting minds across continents and cultures in an instant.",
            "As we type, we weave stories in the fabric of the digital universe, each word a pixel in the grand mosaic of human expression and technological advancement.",
            "The keyboard is our wand, the screen our canvas, and with every keystroke, we paint pictures in the minds of those who will read our words.",
            "In the symphony of silicon and software, we are the composers, orchestrating the flow of information that powers our modern world.",
            "The digital age has given us the power to create, connect, and communicate in ways that would have seemed like magic to previous generations."
        ];
        
        // Ultra+ mode: Complex words, lots of punctuation
        this.ultraTexts = [
            "The quintessential algorithm demonstrates exponential computational complexity, necessitating sophisticated optimization methodologies and parallel processing architectures.",
            "Cryptocurrency's decentralized blockchain infrastructure revolutionizes traditional financial paradigms, implementing cryptographic protocols and consensus mechanisms.",
            "Quantum computing leverages superposition and entanglement phenomena, enabling unprecedented computational capabilities beyond classical binary limitations.",
            "Neural networks employ backpropagation algorithms to minimize loss functions through gradient descent optimization in multidimensional parameter spaces.",
            "Cybersecurity frameworks incorporate zero-trust architectures, implementing multi-factor authentication protocols and intrusion detection systems.",
            "Microservices architecture facilitates scalable, distributed application development through containerization and orchestration platforms.",
            "Machine learning pipelines require extensive data preprocessing, feature engineering, and hyperparameter tuning for optimal model performance.",
            "DevOps methodologies integrate continuous integration/continuous deployment (CI/CD) pipelines with automated testing and monitoring systems.",
            "Big data analytics processes petabytes of structured and unstructured data through distributed computing frameworks and real-time streaming platforms.",
            "Internet of Things (IoT) ecosystems interconnect billions of devices, generating massive datasets for predictive analytics and automation systems."
        ];
        
        // Set default texts based on current difficulty
        this.texts = this.typistTexts; // Default to typist mode
        
        this.quotes = [
            "The only way to do great work is to love what you do. - Steve Jobs",
            "Innovation distinguishes between a leader and a follower. - Steve Jobs",
            "Stay hungry, stay foolish. - Steve Jobs",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
            "The best way to predict the future is to invent it. - Alan Kay",
            "Technology is best when it brings people together. - Matt Mullenweg",
            "The computer was born to solve problems that did not exist before. - Bill Gates",
            "The advance of technology is based on making it fit in so that you don't really even notice it. - Douglas Adams",
            "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke"
        ];
        
        this.currentText = '';
        this.currentIndex = 0;
        this.startTime = 0;
        this.endTime = 0;
        this.isRunning = false;
        this.timer = null;
        this.timeLeft = 60;
        this.testDuration = 60;
        this.testType = 'timed';
        this.difficulty = 'typist'; // Default difficulty
        this.targetWords = 50;
        this.errors = 0;
        this.totalTyped = 0;
        this.correctTyped = 0;
        this.wordCount = 0;
        
        this.initializeElements();
        this.bindEvents();
    }
    
    initializeElements() {
        this.textDisplay = document.getElementById('textDisplay');
        this.textInput = document.getElementById('textInput');
        this.startBtn = document.getElementById('startBtn');
        this.resetBtn = document.getElementById('resetBtn');
        this.wpmDisplay = document.getElementById('wpm');
        this.accuracyDisplay = document.getElementById('accuracy');
        this.timeDisplay = document.getElementById('time');
        this.timeLabel = document.getElementById('timeLabel');
        this.wordCountStat = document.getElementById('wordCountStat');
        this.wordCountDisplay = document.getElementById('wordCount');
        this.results = document.getElementById('results');
        this.finalWpm = document.getElementById('finalWpm');
        this.finalAccuracy = document.getElementById('finalAccuracy');
        this.totalWords = document.getElementById('totalWords');
        this.errorsDisplay = document.getElementById('errors');
        this.newTestBtn = document.getElementById('newTestBtn');
        
        // Test options elements
        this.timeButtons = document.querySelectorAll('.time-btn');
        this.typeButtons = document.querySelectorAll('.type-btn');
        this.difficultyButtons = document.querySelectorAll('.difficulty-btn');
        this.wordCountGroup = document.getElementById('wordCountGroup');
        this.wordCountInput = document.getElementById('wordCountInput');
    }
    
    bindEvents() {
        // Core button events
        this.startBtn.addEventListener('click', () => this.startTest());
        this.resetBtn.addEventListener('click', () => this.resetTest());
        this.newTestBtn.addEventListener('click', () => this.newTest());
        this.textInput.addEventListener('input', (e) => this.handleInput(e));
        this.textInput.addEventListener('keydown', (e) => this.handleKeydown(e));
        
        // Test options events
        this.timeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.setTimeDuration(btn));
        });
        
        this.typeButtons.forEach(btn => {
            btn.addEventListener('click', () => this.setTestType(btn));
        });
        
        this.difficultyButtons.forEach(btn => {
            btn.addEventListener('click', () => this.setDifficulty(btn));
        });
        
        if (this.wordCountInput) {
            this.wordCountInput.addEventListener('change', (e) => {
                this.targetWords = parseInt(e.target.value) || 50;
            });
        }
    }
    
    setTimeDuration(button) {
        this.timeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.testDuration = parseInt(button.dataset.time);
        this.timeLeft = this.testDuration;
        this.updateTimeDisplay();
        this.updateTimeLabel();
    }
    
    setTestType(button) {
        this.typeButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.testType = button.dataset.type;
        
        // Hide all special stats initially
        if (this.wordCountGroup) this.wordCountGroup.style.display = 'none';
        if (this.wordCountStat) this.wordCountStat.style.display = 'none';
        if (this.timeDisplay && this.timeDisplay.parentElement) this.timeDisplay.parentElement.style.display = 'block';
        
        if (this.testType === 'words') {
            if (this.wordCountGroup) this.wordCountGroup.style.display = 'block';
            if (this.wordCountStat) this.wordCountStat.style.display = 'block';
            if (this.timeDisplay && this.timeDisplay.parentElement) this.timeDisplay.parentElement.style.display = 'none';
        }
        
        this.updateTimeLabel();
    }
    
    setDifficulty(button) {
        this.difficultyButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.difficulty = button.dataset.difficulty;
        
        // Update texts based on difficulty
        switch(this.difficulty) {
            case 'chill':
                this.texts = this.chillTexts;
                break;
            case 'typist':
                this.texts = this.typistTexts;
                break;
            case 'ultra':
                this.texts = this.ultraTexts;
                break;
        }
        
        this.resetTest();
    }
    
    updateTimeLabel() {
        if (this.testType === 'timed' && this.timeLabel) {
            if (this.testDuration < 60) {
                this.timeLabel.textContent = 'SECONDS';
            } else if (this.testDuration < 3600) {
                this.timeLabel.textContent = 'TIME';
            } else {
                this.timeLabel.textContent = 'TIME';
            }
        }
    }
    
    startTest() {
        if (this.isRunning) return;
        
        this.isRunning = true;
        this.startTime = Date.now();
        this.errors = 0;
        this.totalTyped = 0;
        this.correctTyped = 0;
        this.currentIndex = 0;
        this.wordCount = 0;
        this.textIndex = 0;
        this.allTexts = [];
        this.lastInputLength = 0;
        
        // Set up test based on type
        if (this.testType === 'timed') {
            this.timeLeft = this.testDuration;
            this.updateTimeDisplay();
            this.updateTimeLabel();
            
            // Start timer
            this.timer = setInterval(() => {
                this.timeLeft--;
                this.updateTimeDisplay();
                
                if (this.timeLeft <= 0) {
                    this.endTest();
                }
            }, 1000);
        } else if (this.testType === 'words') {
            if (this.wordCountDisplay) this.wordCountDisplay.textContent = '0';
        }
        
        // Generate infinite text for timed tests
        if (this.testType === 'timed') {
            this.generateInfiniteText();
        } else if (this.testType === 'quote') {
            this.currentText = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        } else {
            this.currentText = this.texts[Math.floor(Math.random() * this.texts.length)];
        }
        
        // Update UI
        this.displayText();
        this.textInput.disabled = false;
        this.textInput.focus();
        this.startBtn.disabled = true;
        this.results.style.display = 'none';
        
        // Hide WPM, Accuracy, and Time stats during test, show minimal timer
        if (this.wpmDisplay) {
            this.wpmDisplay.parentElement.style.display = 'none';
            console.log('WPM stat hidden');
        }
        if (this.accuracyDisplay) {
            this.accuracyDisplay.parentElement.style.display = 'none';
            console.log('Accuracy stat hidden');
        }
        if (this.timeDisplay) {
            this.timeDisplay.parentElement.style.display = 'none';
            console.log('Time stat hidden');
        }
        
        // Show timer display for timed tests
        if (this.testType === 'timed') {
            const timerDisplay = document.getElementById('timerDisplay');
            const countdownTimer = document.getElementById('countdownTimer');
            if (timerDisplay && countdownTimer) {
                timerDisplay.style.display = 'block';
                countdownTimer.textContent = this.timeLeft;
                console.log('Timer display shown:', this.timeLeft);
            } else {
                console.log('Timer display elements not found');
            }
        }
        
        // Update stats every 100ms
        this.statsTimer = setInterval(() => {
            this.updateStats();
        }, 100);
    }
    
    generateInfiniteText() {
        // Combine all available texts for infinite typing
        this.allTexts = [...this.texts, ...this.quotes];
        this.currentText = this.allTexts[0];
        this.textIndex = 0;
    }
    
    getNextText() {
        this.textIndex++;
        if (this.textIndex >= this.allTexts.length) {
            this.textIndex = 0; // Loop back to the beginning
        }
        return this.allTexts[this.textIndex];
    }
    
    updateTimeDisplay() {
        if (!this.timeDisplay) return;
        
        let timeString = '';
        if (this.testDuration < 60) {
            // Show seconds for short tests
            timeString = this.timeLeft.toString();
        } else if (this.testDuration < 3600) {
            // Show minutes:seconds for medium tests
            const minutes = Math.floor(this.timeLeft / 60);
            const seconds = this.timeLeft % 60;
            timeString = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        } else {
            // Show hours:minutes for long tests
            const hours = Math.floor(this.timeLeft / 3600);
            const minutes = Math.floor((this.timeLeft % 3600) / 60);
            timeString = `${hours}:${minutes.toString().padStart(2, '0')}`;
        }
        
        this.timeDisplay.textContent = timeString;
        
        // Also update the countdown timer
        const countdownTimer = document.getElementById('countdownTimer');
        if (countdownTimer) {
            countdownTimer.textContent = timeString;
        }
    }
    
    provideNextText() {
        // Get the next text in the sequence
        this.currentText = this.getNextText();
        
        // Reset only the input and current text progress, but keep cumulative stats
        this.textInput.value = '';
        this.currentIndex = 0;
        this.lastInputLength = 0; // Reset for new text
        
        // DON'T reset these cumulative stats:
        // this.totalTyped = 0;     // Keep cumulative total
        // this.correctTyped = 0;   // Keep cumulative correct
        // this.errors = 0;         // Keep cumulative errors
        
        // Update the display with the new text
        this.displayText();
        
        // Keep focus on the input
        this.textInput.focus();
    }
    
    handleInput(e) {
        if (!this.isRunning) return;
        
        const input = e.target.value;
        
        // Track cumulative stats for timed tests
        if (this.testType === 'timed') {
            // Calculate the new characters typed in this input
            const newChars = input.length - (this.lastInputLength || 0);
            
            if (newChars > 0) {
                // Add to cumulative total
                this.totalTyped += newChars;
                
                // Check each new character for correctness
                for (let i = 0; i < newChars; i++) {
                    const inputIndex = this.lastInputLength + i;
                    const textIndex = inputIndex;
                    
                    if (input[inputIndex] === this.currentText[textIndex]) {
                        this.correctTyped += 1;
                    } else {
                        this.errors += 1;
                    }
                }
            }
            
            // Store current input length for next comparison
            this.lastInputLength = input.length;
        } else {
            // For non-timed tests, use the original logic
            this.totalTyped = input.length;
            
            // Check for errors
            let newErrors = 0;
            for (let i = 0; i < input.length; i++) {
                if (input[i] !== this.currentText[i]) {
                    newErrors++;
                }
            }
            this.errors = newErrors;
            this.correctTyped = this.totalTyped - this.errors;
        }
        
        // Calculate word count (cumulative for timed tests)
        if (this.testType === 'timed') {
            this.wordCount = Math.round(this.totalTyped / 5); // Approximate word count
        } else {
            this.wordCount = Math.round(input.split(/\s+/).filter(word => word.length > 0).length);
        }
        
        // Update display
        this.updateTextDisplay(input);
        
        // Update word count display
        if (this.testType === 'words') {
            if (this.wordCountDisplay) this.wordCountDisplay.textContent = this.wordCount;
        }
        
        // Check if test is complete
        if (this.testType === 'words' && this.wordCount >= this.targetWords) {
            this.endTest();
        } else if (this.testType === 'quote' && input.length >= this.currentText.length) {
            this.endTest();
        } else if (this.testType === 'timed' && input.length >= this.currentText.length) {
            // For timed tests, provide infinite text
            this.provideNextText();
        }
    }
    
    handleKeydown(e) {
        if (!this.isRunning) return;
        
        // Prevent backspace beyond current position
        if (e.key === 'Backspace' && this.textInput.selectionStart <= this.currentIndex) {
            e.preventDefault();
        }
    }
    
    updateTextDisplay(input) {
        let html = '';
        
        for (let i = 0; i < this.currentText.length; i++) {
            let char = this.currentText[i];
            let className = '';
            
            if (i < input.length) {
                if (input[i] === char) {
                    className = 'correct';
                } else {
                    className = 'incorrect';
                }
            } else if (i === input.length) {
                className = 'current';
            } else {
                className = 'future';
            }
            
            html += `<span class="${className}">${char}</span>`;
        }
        
        // Add cursor
        if (input.length < this.currentText.length) {
            html += '<span class="cursor"></span>';
        }
        
        this.textDisplay.innerHTML = html;
    }
    
    displayText() {
        let html = '';
        for (let i = 0; i < this.currentText.length; i++) {
            let className = i === 0 ? 'current' : 'future';
            html += `<span class="${className}">${this.currentText[i]}</span>`;
        }
        html += '<span class="cursor"></span>';
        this.textDisplay.innerHTML = html;
    }
    
    updateStats() {
        if (!this.isRunning) return;
        
        const elapsed = (Date.now() - this.startTime) / 1000 / 60; // minutes
        const wpm = elapsed > 0 ? Math.round(this.correctTyped / 5 / elapsed) : 0;
        const accuracy = this.totalTyped > 0 ? Math.round(((this.totalTyped - this.errors) / this.totalTyped) * 100) : 100;
        
        this.wpmDisplay.textContent = wpm;
        this.accuracyDisplay.textContent = accuracy + '%';
    }
    
    endTest() {
        this.isRunning = false;
        this.endTime = Date.now();
        
        clearInterval(this.timer);
        clearInterval(this.statsTimer);
        
        this.textInput.disabled = true;
        this.startBtn.disabled = false;
        
        this.showResults();
    }
    
    showResults() {
        const elapsed = (this.endTime - this.startTime) / 1000 / 60; // minutes
        const wpm = elapsed > 0 ? Math.round(this.correctTyped / 5 / elapsed) : 0;
        const accuracy = this.totalTyped > 0 ? Math.round(((this.totalTyped - this.errors) / this.totalTyped) * 100) : 100;
        const words = Math.round(this.totalTyped / 5);
        
        this.finalWpm.textContent = wpm;
        this.finalAccuracy.textContent = accuracy + '%';
        this.totalWords.textContent = words;
        this.errorsDisplay.textContent = this.errors;
        
        this.results.style.display = 'block';
        
        // Scroll to results
        this.results.scrollIntoView({ behavior: 'smooth' });
    }
    
    resetTest() {
        this.isRunning = false;
        this.timeLeft = this.testDuration;
        this.errors = 0;
        this.totalTyped = 0;
        this.correctTyped = 0;
        this.currentIndex = 0;
        this.wordCount = 0;
        
        clearInterval(this.timer);
        clearInterval(this.statsTimer);
        
        this.textInput.value = '';
        this.textInput.disabled = true;
        this.startBtn.disabled = false;
        this.results.style.display = 'none';
        
        this.textDisplay.innerHTML = '<span class="text-prompt">Press START to begin your typing journey...</span>';
        this.wpmDisplay.textContent = '0';
        this.accuracyDisplay.textContent = '100%';
        this.updateTimeDisplay();
        if (this.wordCountDisplay) this.wordCountDisplay.textContent = '0';
        this.updateTimeLabel();
        
        // Show WPM, Accuracy, and Time stats again, hide minimal timer
        if (this.wpmDisplay) this.wpmDisplay.parentElement.style.display = 'block';
        if (this.accuracyDisplay) this.accuracyDisplay.parentElement.style.display = 'block';
        if (this.timeDisplay) this.timeDisplay.parentElement.style.display = 'block';
        
        // Hide timer display
        const timerDisplay = document.getElementById('timerDisplay');
        if (timerDisplay) {
            timerDisplay.style.display = 'none';
        }
    }
    
    newTest() {
        this.resetTest();
        this.startTest();
    }
}

// Initialize the typing test when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new TypingTest();
    
    // Add particle effect to background
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-9999';
    canvas.style.userSelect = 'none';
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 50;
    
    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.size = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.1;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
            if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.opacity;
            ctx.fillStyle = '#00ffff';
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#00ffff';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
