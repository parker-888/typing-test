class TypingTest {
    constructor() {
        // Initialize theme
        this.initializeTheme();
        
        // Theme management methods
        this.setupThemeToggle();
        
        // Chill mode: Simple words, minimal punctuation
        this.chillTextsWithPunctuation = [
            "The quick brown fox jumps over the lazy dog. This sentence has simple words that are easy to type.",
            "Programming is fun and exciting. You can create amazing things with code and logic.",
            "The internet connects people around the world. It makes information easy to find and share.",
            "Learning new skills takes time and practice. Keep trying and you will get better.",
            "Reading books helps you learn new things. Every book has something interesting to discover.",
            "Music makes life more enjoyable. Different songs can change your mood and energy.",
            "Friends are important in life. They help you through good times and bad times.",
            "Exercise keeps your body healthy and strong. It also makes you feel happy and energetic.",
            "Food gives your body energy to work and play. Eating healthy food helps you stay well.",
            "Sleep helps your body rest and recover. Getting enough sleep makes you feel refreshed.",
            "The sun shines bright in the sky during the day. It gives us light and warmth to live.",
            "Water is essential for all living things. We need to drink water every day to stay healthy.",
            "Plants grow from seeds in the ground. They need sunlight and water to survive.",
            "Animals live in many different places. Some live in forests while others live in oceans.",
            "People work hard to achieve their goals. Success comes from dedication and effort.",
            "Technology changes the way we live. New inventions make life easier and more fun.",
            "Education opens doors to new opportunities. Learning never stops throughout our lives.",
            "Family provides love and support. They are always there when we need them most.",
            "Nature offers beauty and peace. Spending time outdoors helps us feel calm and happy.",
            "Creativity allows us to express ourselves. Art and music bring joy to many people.",
            "Travel broadens our horizons. Seeing new places helps us understand different cultures.",
            "Cooking brings people together. Sharing meals creates lasting memories and bonds.",
            "Sports teach us teamwork and discipline. Playing games helps us stay active and healthy.",
            "Science explains how the world works. Research helps us discover new knowledge.",
            "History teaches us about the past. Understanding history helps us plan for the future.",
            "Language connects people across cultures. Words have the power to inspire and heal.",
            "Time moves forward without stopping. We must use our time wisely and make it count.",
            "Dreams give us hope for the future. Working toward our dreams makes life meaningful.",
            "Kindness makes the world a better place. Small acts of kindness can change someone's day.",
            "Patience helps us achieve our goals. Good things come to those who wait and work hard.",
            "Courage allows us to face challenges. Being brave helps us overcome our fears.",
            "Wisdom comes from experience and learning. Wise people make good decisions in life.",
            "Happiness comes from within ourselves. Finding joy in simple things brings lasting peace."
        ];
        
        this.chillTextsWithoutPunctuation = [
            "The quick brown fox jumps over the lazy dog This sentence has simple words that are easy to type",
            "Programming is fun and exciting You can create amazing things with code and logic",
            "The internet connects people around the world It makes information easy to find and share",
            "Learning new skills takes time and practice Keep trying and you will get better",
            "Reading books helps you learn new things Every book has something interesting to discover",
            "Music makes life more enjoyable Different songs can change your mood and energy",
            "Friends are important in life They help you through good times and bad times",
            "Exercise keeps your body healthy and strong It also makes you feel happy and energetic",
            "Food gives your body energy to work and play Eating healthy food helps you stay well",
            "Sleep helps your body rest and recover Getting enough sleep makes you feel refreshed",
            "The sun shines bright in the sky during the day It gives us light and warmth to live",
            "Water is essential for all living things We need to drink water every day to stay healthy",
            "Plants grow from seeds in the ground They need sunlight and water to survive",
            "Animals live in many different places Some live in forests while others live in oceans",
            "People work hard to achieve their goals Success comes from dedication and effort",
            "Technology changes the way we live New inventions make life easier and more fun",
            "Education opens doors to new opportunities Learning never stops throughout our lives",
            "Family provides love and support They are always there when we need them most",
            "Nature offers beauty and peace Spending time outdoors helps us feel calm and happy",
            "Creativity allows us to express ourselves Art and music bring joy to many people",
            "Travel broadens our horizons Seeing new places helps us understand different cultures",
            "Cooking brings people together Sharing meals creates lasting memories and bonds",
            "Sports teach us teamwork and discipline Playing games helps us stay active and healthy",
            "Science explains how the world works Research helps us discover new knowledge",
            "History teaches us about the past Understanding history helps us plan for the future",
            "Language connects people across cultures Words have the power to inspire and heal",
            "Time moves forward without stopping We must use our time wisely and make it count",
            "Dreams give us hope for the future Working toward our dreams makes life meaningful",
            "Kindness makes the world a better place Small acts of kindness can change someone's day",
            "Patience helps us achieve our goals Good things come to those who wait and work hard",
            "Courage allows us to face challenges Being brave helps us overcome our fears",
            "Wisdom comes from experience and learning Wise people make good decisions in life",
            "Happiness comes from within ourselves Finding joy in simple things brings lasting peace"
        ];
        
        // Typist mode: Normal complexity with normal punctuation
        this.typistTextsWithPunctuation = [
            "The void is silent until a single pixel lights up. Your story begins here in the digital realm where every keystroke echoes through the matrix of possibilities.",
            "In the depths of cyberspace, where data flows like rivers of light, we navigate through streams of information, each byte a building block of our digital existence.",
            "The future is not written in stone but in code, where algorithms dance and artificial intelligence dreams of electric sheep in neon-lit cities.",
            "Through the looking glass of technology, we peer into worlds both real and imagined, where virtual reality blurs the lines between what is and what could be.",
            "In this age of digital transformation, we are both creators and creations, shaping the world around us with every line of code and every thought expressed through our fingertips.",
            "The internet is not just a network of computers but a web of human consciousness, connecting minds across continents and cultures in an instant.",
            "As we type, we weave stories in the fabric of the digital universe, each word a pixel in the grand mosaic of human expression and technological advancement.",
            "The keyboard is our wand, the screen our canvas, and with every keystroke, we paint pictures in the minds of those who will read our words.",
            "In the symphony of silicon and software, we are the composers, orchestrating the flow of information that powers our modern world.",
            "The digital age has given us the power to create, connect, and communicate in ways that would have seemed like magic to previous generations.",
            "Beneath the surface of every digital interface lies a world of infinite complexity, where binary decisions cascade into meaningful experiences that shape our daily lives.",
            "The rhythm of innovation pulses through the veins of our technological society, each breakthrough building upon the foundations laid by countless minds before us.",
            "In the grand tapestry of human achievement, the digital revolution stands as a testament to our ability to transform abstract ideas into tangible realities.",
            "The boundaries between the physical and virtual worlds continue to blur, creating new possibilities for human interaction and expression that were once unimaginable.",
            "Every algorithm tells a story, every dataset contains a narrative waiting to be discovered by those who know how to listen to the whispers of information.",
            "The power of connectivity transcends geographical limitations, allowing ideas to flow freely across borders and cultures in a global conversation.",
            "As we navigate the digital landscape, we become both cartographers and explorers, mapping new territories while discovering hidden treasures of knowledge.",
            "The evolution of technology mirrors the evolution of human thought, each advancement reflecting our collective desire to understand and shape the world around us.",
            "In the quiet moments between keystrokes, we find the space where creativity meets computation, where human intuition guides digital precision.",
            "The digital realm offers us a canvas without limits, where imagination becomes reality through the alchemy of code and the magic of human ingenuity.",
            "Through the lens of technology, we gain new perspectives on age-old questions, finding answers in the patterns that emerge from vast oceans of data.",
            "The symphony of progress plays on, with each innovation adding its unique voice to the chorus of human advancement and discovery.",
            "In the space between zeros and ones, we find the poetry of logic, the beauty of structure, and the elegance of solutions to complex problems.",
            "The digital revolution has democratized access to knowledge, empowering individuals to learn, create, and contribute to the global conversation.",
            "As we type our thoughts into existence, we participate in the ongoing creation of human culture, adding our voices to the chorus of human expression.",
            "The future belongs to those who can navigate the intersection of human creativity and technological capability, finding harmony between innovation and purpose.",
            "Every line of code we write becomes part of the digital DNA that shapes our collective future, building the foundation for tomorrow's possibilities.",
            "The beauty of technology lies not just in what it can do, but in how it amplifies our human potential and extends our reach beyond natural limitations.",
            "In the grand experiment of human progress, the digital age represents our most ambitious attempt to create tools that enhance rather than replace our humanity.",
            "The stories we tell through technology become the myths and legends of our time, shaping how future generations will understand our era and aspirations.",
            "As we continue to explore the frontiers of digital possibility, we carry forward the torch of human curiosity, lighting the way for discoveries yet to come."
        ];
        
        this.typistTextsWithoutPunctuation = [
            "The void is silent until a single pixel lights up Your story begins here in the digital realm where every keystroke echoes through the matrix of possibilities",
            "In the depths of cyberspace where data flows like rivers of light we navigate through streams of information each byte a building block of our digital existence",
            "The future is not written in stone but in code where algorithms dance and artificial intelligence dreams of electric sheep in neon-lit cities",
            "Through the looking glass of technology we peer into worlds both real and imagined where virtual reality blurs the lines between what is and what could be",
            "In this age of digital transformation we are both creators and creations shaping the world around us with every line of code and every thought expressed through our fingertips",
            "The internet is not just a network of computers but a web of human consciousness connecting minds across continents and cultures in an instant",
            "As we type we weave stories in the fabric of the digital universe each word a pixel in the grand mosaic of human expression and technological advancement",
            "The keyboard is our wand the screen our canvas and with every keystroke we paint pictures in the minds of those who will read our words",
            "In the symphony of silicon and software we are the composers orchestrating the flow of information that powers our modern world",
            "The digital age has given us the power to create connect and communicate in ways that would have seemed like magic to previous generations",
            "Beneath the surface of every digital interface lies a world of infinite complexity where binary decisions cascade into meaningful experiences that shape our daily lives",
            "The rhythm of innovation pulses through the veins of our technological society each breakthrough building upon the foundations laid by countless minds before us",
            "In the grand tapestry of human achievement the digital revolution stands as a testament to our ability to transform abstract ideas into tangible realities",
            "The boundaries between the physical and virtual worlds continue to blur creating new possibilities for human interaction and expression that were once unimaginable",
            "Every algorithm tells a story every dataset contains a narrative waiting to be discovered by those who know how to listen to the whispers of information",
            "The power of connectivity transcends geographical limitations allowing ideas to flow freely across borders and cultures in a global conversation",
            "As we navigate the digital landscape we become both cartographers and explorers mapping new territories while discovering hidden treasures of knowledge",
            "The evolution of technology mirrors the evolution of human thought each advancement reflecting our collective desire to understand and shape the world around us",
            "In the quiet moments between keystrokes we find the space where creativity meets computation where human intuition guides digital precision",
            "The digital realm offers us a canvas without limits where imagination becomes reality through the alchemy of code and the magic of human ingenuity",
            "Through the lens of technology we gain new perspectives on age-old questions finding answers in the patterns that emerge from vast oceans of data",
            "The symphony of progress plays on with each innovation adding its unique voice to the chorus of human advancement and discovery",
            "In the space between zeros and ones we find the poetry of logic the beauty of structure and the elegance of solutions to complex problems",
            "The digital revolution has democratized access to knowledge empowering individuals to learn create and contribute to the global conversation",
            "As we type our thoughts into existence we participate in the ongoing creation of human culture adding our voices to the chorus of human expression",
            "The future belongs to those who can navigate the intersection of human creativity and technological capability finding harmony between innovation and purpose",
            "Every line of code we write becomes part of the digital DNA that shapes our collective future building the foundation for tomorrow's possibilities",
            "The beauty of technology lies not just in what it can do but in how it amplifies our human potential and extends our reach beyond natural limitations",
            "In the grand experiment of human progress the digital age represents our most ambitious attempt to create tools that enhance rather than replace our humanity",
            "The stories we tell through technology become the myths and legends of our time shaping how future generations will understand our era and aspirations",
            "As we continue to explore the frontiers of digital possibility we carry forward the torch of human curiosity lighting the way for discoveries yet to come"
        ];
        
        // Ultra+ mode: Complex words, lots of punctuation
        this.ultraTextsWithPunctuation = [
            "The quintessential algorithm demonstrates exponential computational complexity, necessitating sophisticated optimization methodologies and parallel processing architectures.",
            "Cryptocurrency's decentralized blockchain infrastructure revolutionizes traditional financial paradigms, implementing cryptographic protocols and consensus mechanisms.",
            "Quantum computing leverages superposition and entanglement phenomena, enabling unprecedented computational capabilities beyond classical binary limitations.",
            "Neural networks employ backpropagation algorithms to minimize loss functions through gradient descent optimization in multidimensional parameter spaces.",
            "Cybersecurity frameworks incorporate zero-trust architectures, implementing multi-factor authentication protocols and intrusion detection systems.",
            "Microservices architecture facilitates scalable, distributed application development through containerization and orchestration platforms.",
            "Machine learning pipelines require extensive data preprocessing, feature engineering, and hyperparameter tuning for optimal model performance.",
            "DevOps methodologies integrate continuous integration/continuous deployment (CI/CD) pipelines with automated testing and monitoring systems.",
            "Big data analytics processes petabytes of structured and unstructured data through distributed computing frameworks and real-time streaming platforms.",
            "Internet of Things (IoT) ecosystems interconnect billions of devices, generating massive datasets for predictive analytics and automation systems.",
            "Distributed ledger technology fundamentally transforms transactional transparency through immutable cryptographic verification and consensus-driven validation protocols.",
            "Artificial intelligence systems leverage deep learning architectures to process complex multimodal datasets, enabling autonomous decision-making capabilities.",
            "Cloud-native applications utilize container orchestration platforms to achieve horizontal scalability and fault-tolerant deployment across distributed infrastructure.",
            "Edge computing paradigms shift computational workloads closer to data sources, minimizing latency and optimizing bandwidth utilization in distributed networks.",
            "Natural language processing algorithms employ transformer architectures to understand contextual relationships and semantic nuances in human communication.",
            "Cybersecurity frameworks implement defense-in-depth strategies, incorporating threat intelligence feeds and behavioral analytics for proactive threat mitigation.",
            "Data science methodologies encompass statistical analysis, machine learning algorithms, and domain expertise to extract actionable insights from complex datasets.",
            "Software engineering practices emphasize modular design principles, enabling maintainable codebases and scalable system architectures.",
            "Network infrastructure optimization requires sophisticated traffic engineering and load balancing algorithms to ensure optimal performance and reliability.",
            "Virtualization technologies abstract hardware resources, enabling efficient resource utilization and flexible deployment strategies across heterogeneous environments.",
            "Application programming interfaces (APIs) facilitate seamless integration between disparate systems, enabling data exchange and functional interoperability.",
            "Database management systems implement ACID compliance protocols to ensure transactional integrity and data consistency across distributed environments.",
            "Mobile application development frameworks provide cross-platform compatibility while maintaining native performance characteristics and user experience standards.",
            "Web application security encompasses input validation, output encoding, and session management to prevent common vulnerability exploitation and data breaches.",
            "Performance optimization techniques include caching strategies, database query optimization, and resource compression to enhance application responsiveness.",
            "User experience design principles emphasize accessibility, usability, and intuitive interaction patterns to maximize user engagement and satisfaction.",
            "Continuous monitoring systems provide real-time visibility into application performance, enabling proactive issue identification and resolution.",
            "Scalability engineering involves horizontal and vertical scaling strategies to accommodate growing user demands and increasing computational requirements.",
            "Disaster recovery planning ensures business continuity through redundant systems, backup strategies, and automated failover mechanisms.",
            "Compliance frameworks establish regulatory adherence through audit trails, data governance policies, and security control implementations.",
            "Innovation management processes facilitate rapid prototyping, iterative development, and user feedback integration to accelerate product evolution.",
            "Knowledge management systems organize information assets, enabling efficient knowledge sharing and collaborative problem-solving across organizational boundaries."
        ];
        
        this.ultraTextsWithoutPunctuation = [
            "The quintessential algorithm demonstrates exponential computational complexity necessitating sophisticated optimization methodologies and parallel processing architectures",
            "Cryptocurrency's decentralized blockchain infrastructure revolutionizes traditional financial paradigms implementing cryptographic protocols and consensus mechanisms",
            "Quantum computing leverages superposition and entanglement phenomena enabling unprecedented computational capabilities beyond classical binary limitations",
            "Neural networks employ backpropagation algorithms to minimize loss functions through gradient descent optimization in multidimensional parameter spaces",
            "Cybersecurity frameworks incorporate zero-trust architectures implementing multi-factor authentication protocols and intrusion detection systems",
            "Microservices architecture facilitates scalable distributed application development through containerization and orchestration platforms",
            "Machine learning pipelines require extensive data preprocessing feature engineering and hyperparameter tuning for optimal model performance",
            "DevOps methodologies integrate continuous integration/continuous deployment CI/CD pipelines with automated testing and monitoring systems",
            "Big data analytics processes petabytes of structured and unstructured data through distributed computing frameworks and real-time streaming platforms",
            "Internet of Things IoT ecosystems interconnect billions of devices generating massive datasets for predictive analytics and automation systems",
            "Distributed ledger technology fundamentally transforms transactional transparency through immutable cryptographic verification and consensus-driven validation protocols",
            "Artificial intelligence systems leverage deep learning architectures to process complex multimodal datasets enabling autonomous decision-making capabilities",
            "Cloud-native applications utilize container orchestration platforms to achieve horizontal scalability and fault-tolerant deployment across distributed infrastructure",
            "Edge computing paradigms shift computational workloads closer to data sources minimizing latency and optimizing bandwidth utilization in distributed networks",
            "Natural language processing algorithms employ transformer architectures to understand contextual relationships and semantic nuances in human communication",
            "Cybersecurity frameworks implement defense-in-depth strategies incorporating threat intelligence feeds and behavioral analytics for proactive threat mitigation",
            "Data science methodologies encompass statistical analysis machine learning algorithms and domain expertise to extract actionable insights from complex datasets",
            "Software engineering practices emphasize modular design principles enabling maintainable codebases and scalable system architectures",
            "Network infrastructure optimization requires sophisticated traffic engineering and load balancing algorithms to ensure optimal performance and reliability",
            "Virtualization technologies abstract hardware resources enabling efficient resource utilization and flexible deployment strategies across heterogeneous environments",
            "Application programming interfaces APIs facilitate seamless integration between disparate systems enabling data exchange and functional interoperability",
            "Database management systems implement ACID compliance protocols to ensure transactional integrity and data consistency across distributed environments",
            "Mobile application development frameworks provide cross-platform compatibility while maintaining native performance characteristics and user experience standards",
            "Web application security encompasses input validation output encoding and session management to prevent common vulnerability exploitation and data breaches",
            "Performance optimization techniques include caching strategies database query optimization and resource compression to enhance application responsiveness",
            "User experience design principles emphasize accessibility usability and intuitive interaction patterns to maximize user engagement and satisfaction",
            "Continuous monitoring systems provide real-time visibility into application performance enabling proactive issue identification and resolution",
            "Scalability engineering involves horizontal and vertical scaling strategies to accommodate growing user demands and increasing computational requirements",
            "Disaster recovery planning ensures business continuity through redundant systems backup strategies and automated failover mechanisms",
            "Compliance frameworks establish regulatory adherence through audit trails data governance policies and security control implementations",
            "Innovation management processes facilitate rapid prototyping iterative development and user feedback integration to accelerate product evolution",
            "Knowledge management systems organize information assets enabling efficient knowledge sharing and collaborative problem-solving across organizational boundaries"
        ];
        
        // Set default texts based on current difficulty
        this.texts = this.shuffleArray(this.typistTextsWithPunctuation); // Default to typist mode with punctuation
        
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
            "Any sufficiently advanced technology is indistinguishable from magic. - Arthur C. Clarke",
            "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
            "Life is what happens when you're busy making other plans. - John Lennon",
            "The way to get started is to quit talking and begin doing. - Walt Disney",
            "It does not matter how slowly you go as long as you do not stop. - Confucius",
            "The only impossible journey is the one you never begin. - Tony Robbins",
            "Believe you can and you're halfway there. - Theodore Roosevelt",
            "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
            "The mind is everything. What you think you become. - Buddha",
            "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
            "It always seems impossible until it's done. - Nelson Mandela",
            "The future depends on what you do today. - Mahatma Gandhi",
            "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
            "The only person you are destined to become is the person you decide to be. - Ralph Waldo Emerson",
            "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
            "The harder you work for something, the greater you'll feel when you achieve it. - Unknown",
            "Dream big and dare to fail. - Norman Vaughan",
            "The best revenge is massive success. - Frank Sinatra",
            "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
            "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
            "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
            "The journey of a thousand miles begins with one step. - Lao Tzu",
            "What we think, we become. - Buddha",
            "The only true wisdom is in knowing you know nothing. - Socrates",
            "Be the change that you wish to see in the world. - Mahatma Gandhi",
            "In the middle of difficulty lies opportunity. - Albert Einstein",
            "The only thing we have to fear is fear itself. - Franklin D. Roosevelt",
            "It is during our darkest moments that we must focus to see the light. - Aristotle",
            "The best and most beautiful things in the world cannot be seen or even touched. - Helen Keller",
            "Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll",
            "The purpose of our lives is to be happy. - Dalai Lama",
            "Get busy living or get busy dying. - Stephen King",
            "The only thing standing between you and your goal is the story you keep telling yourself. - Jordan Belfort",
            "Everything you've ever wanted is on the other side of fear. - George Addair",
            "The two most important days in your life are the day you are born and the day you find out why. - Mark Twain",
            "The only person you should try to be better than is the person you were yesterday. - Unknown",
            "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi",
            "The only thing that interferes with my learning is my education. - Albert Einstein",
            "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
            "The only way to do great work is to love what you do. - Steve Jobs"
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
        this.focusMode = false; // Default to focus mode off
        this.punctuationMode = true; // Default to punctuation on
        this.targetWords = 50;
        this.errors = 0;
        this.totalTyped = 0;
        this.correctTyped = 0;
        this.wordCount = 0;
        
        // Mobile viewport management
        this.isMobile = this.detectMobile();
        this.originalViewport = null;
        this.textDisplayPosition = null;
        
        this.initializeElements();
        this.bindEvents();
        this.setupMobileViewport();
    }
    
    detectMobile() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
               window.innerWidth <= 768;
    }
    
    setupMobileViewport() {
        if (this.isMobile) {
            // Store original viewport meta tag
            const viewportMeta = document.querySelector('meta[name="viewport"]');
            if (viewportMeta) {
                this.originalViewport = viewportMeta.getAttribute('content');
            }
            
            // Store initial text display position
            if (this.textDisplay) {
                const rect = this.textDisplay.getBoundingClientRect();
                this.textDisplayPosition = {
                    top: rect.top,
                    height: rect.height
                };
            }
        }
    }
    
    enableMobileViewport() {
        if (!this.isMobile) return;
        
        // Set viewport to prevent zooming but allow normal scrolling
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta) {
            viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
        }
        
        // Scroll to text display area and ensure it's visible
        if (this.textDisplay) {
            this.textDisplay.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
            
            // Add a small delay to ensure the scroll completes
            setTimeout(() => {
                this.ensureTextDisplayVisible();
            }, 300);
        }
        
        // Only prevent body scrolling, don't fix position
        document.body.style.overflow = 'hidden';
    }
    
    disableMobileViewport() {
        if (!this.isMobile) return;
        
        // Restore original viewport settings
        const viewportMeta = document.querySelector('meta[name="viewport"]');
        if (viewportMeta && this.originalViewport) {
            viewportMeta.setAttribute('content', this.originalViewport);
        }
        
        // Restore body scrolling
        document.body.style.overflow = '';
    }
    
    ensureTextDisplayVisible() {
        if (!this.isMobile || !this.textDisplay) return;
        
        const rect = this.textDisplay.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // If text display is not fully visible, adjust scroll
        if (rect.top < 20 || rect.bottom > viewportHeight - 150) {
            this.textDisplay.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start',
                inline: 'nearest'
            });
        }
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
        this.focusButtons = document.querySelectorAll('.focus-btn');
        this.punctuationButtons = document.querySelectorAll('.punctuation-btn');
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
        
        // Mobile: Handle focus events for better positioning
        if (this.isMobile) {
            this.textInput.addEventListener('focus', () => {
                if (this.isRunning) {
                    setTimeout(() => {
                        this.ensureTextDisplayVisible();
                    }, 300);
                }
            });
        }
        
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
        
        this.focusButtons.forEach(btn => {
            btn.addEventListener('click', () => this.setFocusMode(btn));
        });
        
        this.punctuationButtons.forEach(btn => {
            btn.addEventListener('click', () => this.setPunctuationMode(btn));
        });
        
        // Popup event listeners
        const continueFocusBtn = document.getElementById('continueFocusMode');
        const cancelFocusBtn = document.getElementById('cancelFocusMode');
        
        if (continueFocusBtn) {
            continueFocusBtn.addEventListener('click', () => {
                this.focusButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector('.focus-btn[data-focus="on"]').classList.add('active');
                this.focusMode = true;
                this.hideFocusModePopup();
            });
        }
        
        if (cancelFocusBtn) {
            cancelFocusBtn.addEventListener('click', () => {
                this.focusButtons.forEach(btn => btn.classList.remove('active'));
                document.querySelector('.focus-btn[data-focus="off"]').classList.add('active');
                this.focusMode = false;
                this.hideFocusModePopup();
            });
        }
        
        if (this.wordCountInput) {
            this.wordCountInput.addEventListener('change', (e) => {
                this.targetWords = parseInt(e.target.value) || 50;
            });
        }
        
        // Mobile viewport management events
        if (this.isMobile) {
            // Handle viewport changes (keyboard appearance, orientation change)
            window.addEventListener('resize', () => {
                if (this.isRunning) {
                    setTimeout(() => {
                        this.ensureTextDisplayVisible();
                    }, 100);
                }
            });
            
            // Handle virtual keyboard events
            if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', () => {
                    if (this.isRunning) {
                        setTimeout(() => {
                            this.ensureTextDisplayVisible();
                        }, 100);
                    }
                });
            }
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
        
        // Get references to option groups
        const timeGroup = document.querySelector('.option-group:has(.time-options)');
        const difficultyGroup = document.querySelector('.option-group:has(.difficulty-options)');
        
        // Hide all special stats initially
        if (this.wordCountGroup) this.wordCountGroup.style.display = 'none';
        if (this.wordCountStat) this.wordCountStat.style.display = 'none';
        if (this.timeDisplay && this.timeDisplay.parentElement) this.timeDisplay.parentElement.style.display = 'block';
        
        if (this.testType === 'words') {
            // Word mode: show word count, hide timer
            if (this.wordCountGroup) this.wordCountGroup.style.display = 'block';
            if (this.wordCountStat) this.wordCountStat.style.display = 'block';
            if (this.timeDisplay && this.timeDisplay.parentElement) this.timeDisplay.parentElement.style.display = 'none';
            if (timeGroup) timeGroup.style.display = 'none';
            if (difficultyGroup) difficultyGroup.style.display = 'block';
        } else if (this.testType === 'quote') {
            // Quote mode: hide timer and difficulty
            if (this.timeDisplay && this.timeDisplay.parentElement) this.timeDisplay.parentElement.style.display = 'none';
            if (timeGroup) timeGroup.style.display = 'none';
            if (difficultyGroup) difficultyGroup.style.display = 'none';
        } else {
            // Timed mode: show everything
            if (this.timeDisplay && this.timeDisplay.parentElement) this.timeDisplay.parentElement.style.display = 'block';
            if (timeGroup) timeGroup.style.display = 'block';
            if (difficultyGroup) difficultyGroup.style.display = 'block';
        }
        
        this.updateTimeLabel();
    }
    
    setDifficulty(button) {
        this.difficultyButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.difficulty = button.dataset.difficulty;
        
        // Update texts based on difficulty and punctuation mode
        this.updateTextsBasedOnSettings();
        
        this.resetTest();
    }
    
    setFocusMode(button) {
        if (button.dataset.focus === 'on') {
            // Show popup for focus mode ON
            this.showFocusModePopup();
        } else {
            // Directly set focus mode OFF
            this.focusButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            this.focusMode = false;
        }
    }
    
    setPunctuationMode(button) {
        this.punctuationButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        this.punctuationMode = button.dataset.punctuation === 'on';
        
        // Update texts based on difficulty and punctuation mode
        this.updateTextsBasedOnSettings();
        
        this.resetTest();
    }
    
    updateTextsBasedOnSettings() {
        // Update texts based on difficulty and punctuation mode
        switch(this.difficulty) {
            case 'chill':
                this.texts = this.punctuationMode ? 
                    this.shuffleArray(this.chillTextsWithPunctuation) : 
                    this.shuffleArray(this.chillTextsWithoutPunctuation);
                break;
            case 'typist':
                this.texts = this.punctuationMode ? 
                    this.shuffleArray(this.typistTextsWithPunctuation) : 
                    this.shuffleArray(this.typistTextsWithoutPunctuation);
                break;
            case 'ultra':
                this.texts = this.punctuationMode ? 
                    this.shuffleArray(this.ultraTextsWithPunctuation) : 
                    this.shuffleArray(this.ultraTextsWithoutPunctuation);
                break;
        }
    }
    
    showFocusModePopup() {
        const popup = document.getElementById('focusModePopup');
        if (popup) {
            popup.style.display = 'flex';
        }
    }
    
    hideFocusModePopup() {
        const popup = document.getElementById('focusModePopup');
        if (popup) {
            popup.style.display = 'none';
        }
    }
    
    shuffleArray(array) {
        // Fisher-Yates shuffle algorithm
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
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
        
        // For timed tests, show countdown first
        if (this.testType === 'timed') {
            this.showCountdown();
            return;
        }
        
        this.initializeTest();
    }
    
    showCountdown() {
        const countdownPopup = document.getElementById('countdownPopup');
        const countdownNumber = document.getElementById('countdownNumber');
        const countdownText = document.getElementById('countdownText');
        
        if (countdownPopup && countdownNumber && countdownText) {
            countdownPopup.style.display = 'flex';
            
            let count = 3;
            countdownNumber.textContent = count;
            countdownText.textContent = 'Test begins in';
            
            const countdownInterval = setInterval(() => {
                count--;
                
                if (count > 0) {
                    countdownNumber.textContent = count;
                    // Add animation class to trigger the pulse effect
                    countdownNumber.classList.remove('countdown-pulse');
                    void countdownNumber.offsetWidth; // Trigger reflow
                    countdownNumber.classList.add('countdown-pulse');
                } else if (count === 0) {
                    countdownNumber.textContent = 'GO!';
                    countdownText.textContent = 'Start typing!';
                    // Add animation class to trigger the pulse effect
                    countdownNumber.classList.remove('countdown-pulse');
                    void countdownNumber.offsetWidth; // Trigger reflow
                    countdownNumber.classList.add('countdown-pulse');
                } else {
                    // Countdown finished, hide popup and start test
                    clearInterval(countdownInterval);
                    countdownPopup.style.display = 'none';
                    this.initializeTest();
                }
            }, 1000);
        } else {
            // Fallback if countdown elements not found
            this.initializeTest();
        }
    }
    
    initializeTest() {
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
        
        // Mobile viewport management - prevent scrolling during test
        if (this.isMobile) {
            this.enableMobileViewport();
        }
        
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
            // Word mode: no timer, test continues until word count is reached
            if (this.wordCountDisplay) this.wordCountDisplay.textContent = '0';
        } else if (this.testType === 'quote') {
            // Quote mode: no timer, test continues until quote is completed
        }
        
        // Generate text based on test type
        if (this.testType === 'timed' || this.testType === 'words') {
            this.generateInfiniteText();
        } else if (this.testType === 'quote') {
            // Shuffle quotes and pick a random one
            const shuffledQuotes = this.shuffleArray(this.quotes);
            this.currentText = shuffledQuotes[0];
        }
        
        // Update UI
        this.displayText();
        this.textInput.disabled = false;
        this.textInput.focus();
        this.startBtn.disabled = true;
        this.results.style.display = 'none';
        
        // Mobile: Ensure text display is visible and properly sized
        if (this.isMobile && this.textDisplay) {
            this.textDisplay.style.display = 'block';
            this.textDisplay.style.visibility = 'visible';
            this.textDisplay.style.opacity = '1';
            this.textDisplay.style.transform = 'none';
            this.textDisplay.style.filter = 'none';
        }
        
        // Add test-active class for enhanced text display
        if (this.textDisplay) {
            this.textDisplay.classList.add('test-active');
            console.log('Text display enhanced');
        }
        
        // Add test-active class to body for mobile viewport management
        if (this.isMobile) {
            document.body.classList.add('test-active');
        }
        
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
        
        // Hide test options during test for focused experience
        const testOptions = document.querySelector('.test-options');
        if (testOptions) {
            testOptions.style.display = 'none';
            console.log('Test options hidden');
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
        // For word mode and timed mode, only use word texts (no quotes)
        if (this.testType === 'words' || this.testType === 'timed') {
            this.allTexts = this.shuffleArray([...this.texts]);
        } else {
            // For other tests, combine all available texts for infinite typing and shuffle them
            this.allTexts = this.shuffleArray([...this.texts, ...this.quotes]);
        }
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
        
        // Track cumulative stats for timed and word tests
        if (this.testType === 'timed' || this.testType === 'words') {
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
            // For quote tests, use the original logic
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
        
        // Calculate word count (cumulative for timed and word tests)
        if (this.testType === 'timed' || this.testType === 'words') {
            this.wordCount = Math.round(this.totalTyped / 5); // Approximate word count
        } else {
            this.wordCount = Math.round(input.split(/\s+/).filter(word => word.length > 0).length);
        }
        
        // Check if we need to change text before updating display
        const shouldChangeText = (this.testType === 'timed' || this.testType === 'words') && input.length >= this.currentText.length;
        
        // Only update display if we're not about to change text
        if (!shouldChangeText) {
            // Update display
            this.updateTextDisplay(input);
        }
        
        // Mobile: Ensure text display stays visible during typing
        if (this.isMobile) {
            this.ensureTextDisplayVisible();
        }
        
        // Update word count display
        if (this.testType === 'words') {
            if (this.wordCountDisplay) this.wordCountDisplay.textContent = this.wordCount;
        }
        
        // Check if test is complete
        if (this.testType === 'words' && this.wordCount >= this.targetWords) {
            // For word mode, end test when the target word count is reached
            this.endTest();
        } else if (this.testType === 'quote' && input.length >= this.currentText.length) {
            this.endTest();
        } else if (shouldChangeText) {
            // For timed and word tests, provide infinite text
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
                if (this.focusMode) {
                    // In focus mode, all typed characters appear as correct
                    className = 'correct';
                } else {
                    // Normal mode - show actual correctness
                    if (input[i] === char) {
                        className = 'correct';
                    } else {
                        className = 'incorrect';
                    }
                }
            } else {
                className = 'future';
            }
            
            // Add cursor before the current character to type (only if typing has started)
            if (i === input.length && input.length > 0) {
                html += '<span class="cursor"></span>';
            }
            
            html += `<span class="${className}">${char}</span>`;
        }
        
        // Add cursor at the end if we've typed everything (only if typing has started)
        if (input.length >= this.currentText.length && input.length > 0) {
            html += '<span class="cursor"></span>';
        }
        
        this.textDisplay.innerHTML = html;
    }
    
    displayText() {
        let html = '';
        for (let i = 0; i < this.currentText.length; i++) {
            let className = 'future';
            html += `<span class="${className}">${this.currentText[i]}</span>`;
        }
        // No cursor initially - only show when typing starts
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
        
        // Mobile viewport management - restore normal viewport
        if (this.isMobile) {
            this.disableMobileViewport();
        }
        
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
        
        // Save test result if user is logged in
        if (window.authManager && window.authManager.currentUser) {
            const duration = (this.endTime - this.startTime) / 1000; // seconds
            window.authManager.saveTestResult(wpm, accuracy, this.testType, this.difficulty, duration);
        }
        
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
        
        // Mobile viewport management - restore normal viewport
        if (this.isMobile) {
            this.disableMobileViewport();
        }
        
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
        
        // Remove test-active class for normal text display
        if (this.textDisplay) {
            this.textDisplay.classList.remove('test-active');
            console.log('Text display reset to normal');
        }
        
        // Remove test-active class from body
        document.body.classList.remove('test-active');
        
        // Show WPM, Accuracy, and Time stats again, hide minimal timer
        if (this.wpmDisplay) this.wpmDisplay.parentElement.style.display = 'block';
        if (this.accuracyDisplay) this.accuracyDisplay.parentElement.style.display = 'block';
        if (this.timeDisplay) this.timeDisplay.parentElement.style.display = 'block';
        
        // Show test options again
        const testOptions = document.querySelector('.test-options');
        if (testOptions) {
            testOptions.style.display = 'block';
            console.log('Test options shown');
        }
        
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
    
    // Theme management methods
    initializeTheme() {
        // Check for saved theme preference or default to military theme
        const savedTheme = localStorage.getItem('theme') || 'military';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeIcon(savedTheme);
    }
    
    setupThemeToggle() {
        const themeToggle = document.getElementById('themeToggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }
    }
    
    toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        let newTheme;
        
        // Cycle through themes: dark -> light -> dark-text -> light-text -> military -> dark
        if (currentTheme === 'dark') {
            newTheme = 'light';
        } else if (currentTheme === 'light') {
            newTheme = 'dark-text';
        } else if (currentTheme === 'dark-text') {
            newTheme = 'light-text';
        } else if (currentTheme === 'light-text') {
            newTheme = 'military';
        } else {
            newTheme = 'dark';
        }
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeIcon(newTheme);
        
        // Update particle colors for theme
        this.updateParticleColors(newTheme);
    }
    
    updateThemeIcon(theme) {
        const themeIcon = document.querySelector('.theme-icon');
        if (themeIcon) {
            if (theme === 'dark') {
                themeIcon.textContent = '🌙';
            } else if (theme === 'light') {
                themeIcon.textContent = '☀️';
            } else if (theme === 'dark-text') {
                themeIcon.textContent = '📝';
            } else if (theme === 'light-text') {
                themeIcon.textContent = '✨';
            } else if (theme === 'military') {
                themeIcon.textContent = '🎖️';
            }
        }
    }
    
    updateParticleColors(theme) {
        // Update particle colors based on theme
        if (window.redrawParticles) {
            window.redrawParticles();
        }
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
    
    // Function to get theme-aware particle color
    function getParticleColor() {
        const theme = document.documentElement.getAttribute('data-theme') || 'military';
        if (theme === 'dark') {
            return '#00ffff';
        } else if (theme === 'light') {
            return '#e67e22';
        } else if (theme === 'dark-text') {
            return '#2c3e50';
        } else if (theme === 'light-text') {
            return '#ecf0f1';
        } else if (theme === 'military') {
            return '#8fbc8f';
        }
        return '#8fbc8f'; // fallback to military
    }
    
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
            const particleColor = getParticleColor();
            ctx.fillStyle = particleColor;
            ctx.shadowBlur = 10;
            ctx.shadowColor = particleColor;
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
    
    // Store animation function globally for theme updates
    window.redrawParticles = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(particle => {
            particle.draw();
        });
    };
    
    animate();
    
    // Handle window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
