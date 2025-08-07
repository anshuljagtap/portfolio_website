// Terminal-style Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');

    // Navigation click handlers
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.getAttribute('data-section');
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section
            sections.forEach(section => {
                section.classList.remove('active');
            });
            document.getElementById(targetSection).classList.add('active');
        });
    });

    // Typewriter animation
    const typewriterText = document.getElementById('typewriter-text');
    const homeContent = document.getElementById('home-content');
    
    const terminalLines = [
        { prompt: 'anshul_jagtap@cs-portfolio:~$ ', command: 'whoami', output: 'Computer Science Student | UC Santa Cruz | GPA: 3.82 | SWE & ML Enthusiast' },
        { prompt: 'anshul_jagtap@cs-portfolio:~$ ', command: './start --explore', output: '[ Loading projects, experience, and skills... ]' }
    ];

    let currentLineIndex = 0;
    let currentCharIndex = 0;
    let isTyping = false;

    function typeWriter() {
        if (currentLineIndex >= terminalLines.length) {
            // Show home content after typewriter is done
            setTimeout(() => {
                homeContent.style.display = 'block';
                homeContent.style.animation = 'fadeIn 0.5s ease-in-out';
            }, 1000);
            return;
        }

        const currentLine = terminalLines[currentLineIndex];
        const fullText = `${currentLine.prompt}${currentLine.command}`;
        
        if (currentCharIndex <= fullText.length) {
            typewriterText.textContent = fullText.slice(0, currentCharIndex);
            currentCharIndex++;
            setTimeout(typeWriter, 100);
        } else {
            // Show output after typing command
            setTimeout(() => {
                typewriterText.textContent = fullText + '\n' + currentLine.output;
                
                // Move to next line after showing output
                setTimeout(() => {
                    currentLineIndex++;
                    currentCharIndex = 0;
                    typewriterText.textContent = '';
                    typeWriter();
                }, 2000);
            }, 1000);
        }
    }

    // Start typewriter animation
    setTimeout(typeWriter, 500);

    // Cursor blink animation
    const cursor = document.querySelector('.cursor');
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '0' ? '1' : '0';
    }, 500);

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message
            alert('Message sent! (This is a demo - in a real app, this would send to your email)');
            
            // Reset form
            this.reset();
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 25px rgba(0, 255, 0, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add hover effects to experience cards
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 255, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });

    // Add hover effects to education card
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 5px 15px rgba(0, 191, 255, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = 'none';
        });
    });

    // Terminal flicker effect
    const terminalWindows = document.querySelectorAll('.terminal-window');
    terminalWindows.forEach(window => {
        // Add subtle flicker effect
        setInterval(() => {
            const opacity = 0.98 + Math.random() * 0.04;
            window.style.opacity = opacity;
        }, 150);
    });

    // Add keyboard shortcuts
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + 1-4 for navigation
        if ((e.ctrlKey || e.metaKey) && e.key >= '1' && e.key <= '4') {
            e.preventDefault();
            const sections = ['home', 'projects', 'experience', 'contact'];
            const sectionIndex = parseInt(e.key) - 1;
            
            if (sectionIndex < sections.length) {
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                document.querySelector(`[data-section="${sections[sectionIndex]}"]`).classList.add('active');
                
                // Show target section
                document.querySelectorAll('.section').forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(sections[sectionIndex]).classList.add('active');
            }
        }
    });

    // Add loading animation for sections
    function addLoadingAnimation(section) {
        const content = section.querySelector('.terminal-content');
        if (content) {
            content.style.opacity = '0';
            content.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                content.style.transition = 'all 0.5s ease-in-out';
                content.style.opacity = '1';
                content.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    // Apply loading animation when sections become active
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                if (mutation.target.classList.contains('active')) {
                    addLoadingAnimation(mutation.target);
                }
            }
        });
    });

    sections.forEach(section => {
        observer.observe(section, { attributes: true });
    });

    // Add terminal-style focus effects
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.style.borderColor = 'var(--terminal-blue)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.style.borderColor = 'var(--terminal-green)';
        });
    });

    // Add terminal-style button effects
    const buttons = document.querySelectorAll('.btn-terminal, .btn-terminal-secondary');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function() {
            this.style.transform = 'scale(0.95)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'scale(1)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add typing sound effect (optional)
    function playTypingSound() {
        // This would play a subtle typing sound
        // For now, we'll just add a visual effect
        const cursor = document.querySelector('.cursor');
        cursor.style.animation = 'none';
        setTimeout(() => {
            cursor.style.animation = 'blink 1s infinite';
        }, 10);
    }

    // Enhanced typewriter with sound effect
    const originalTypeWriter = typeWriter;
    typeWriter = function() {
        playTypingSound();
        originalTypeWriter();
    };

    console.log('Terminal Portfolio loaded successfully! 🚀');
    console.log('Available keyboard shortcuts: Ctrl/Cmd + 1-4 for navigation');
    console.log('Portfolio for: Anshul Jagtap - UC Santa Cruz CS Student');
}); 