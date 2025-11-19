// Dark Mode Toggle - Initialize immediately to prevent flash
const htmlElement = document.documentElement;
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Set up dark mode toggle once DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
        
        themeToggle.addEventListener('click', () => {
            const theme = htmlElement.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';
            
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
        });
    }
});

// Smooth scrolling for navigation links
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

// Add active class to navigation links based on scroll position
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all project cards and CV items
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .cv-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});

// Impressum Modal
const impressumModal = document.getElementById('impressum-modal');
const impressumLink = document.getElementById('impressum-link');
const closeModal = document.querySelector('.close');

impressumLink.addEventListener('click', (e) => {
    e.preventDefault();
    impressumModal.style.display = 'block';
});

closeModal.addEventListener('click', () => {
    impressumModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === impressumModal) {
        impressumModal.style.display = 'none';
    }
});

// Scroll to Top Button
const scrollTopButton = document.getElementById('scroll-to-top');

if (scrollTopButton) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopButton.classList.add('visible');
        } else {
            scrollTopButton.classList.remove('visible');
        }
    });

    // Scroll to top when clicked
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Achievement System
const achievements = {
    profile: {
        id: 'profile',
        icon: '🎮',
        title: 'Secret Developer',
        description: 'Found the hidden developer!',
        hint: 'Try to find the me',
        points: 10,
        unlocked: false
    },
    scrollTop: {
        id: 'scrollTop',
        icon: '⬆️',
        title: 'Back to the Top',
        description: 'Used the scroll button',
        hint: 'Scroll down and look for a way back up',
        points: 10,
        unlocked: false
    },
    darkMode: {
        id: 'darkMode',
        icon: '🌙',
        title: 'Night Owl',
        description: 'Toggled dark mode',
        hint: 'Come to the dark side',
        points: 10,
        unlocked: false
    },
    fortytwo: {
        id: 'fortytwo',
        icon: '🔢',
        title: 'Answer to Everything',
        description: 'Found the ultimate answer',
        hint: 'Find the answer to life, the universe and everything',
        points: 10,
        unlocked: false
    },
    coffee: {
        id: 'coffee',
        icon: '☕',
        title: 'Caffeinated',
        description: 'Powered up with coffee',
        hint: 'Coffee is essential for developers',
        points: 10,
        unlocked: false
    },
    ninja: {
        id: 'ninja',
        icon: '🥷',
        title: 'Ninja Hunter',
        description: 'Found all hidden ninjas!',
        hint: 'Find all 5 hidden ninjas on the page',
        points: 10,
        unlocked: false,
        ninjasFound: 0,
        totalNinjas: 5
    }
};

let coffeeClicks = 0;
let ninjasFound = [];
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;
let typedText = '';

// Load achievements from localStorage
function loadAchievements() {
    const saved = localStorage.getItem('achievements');
    if (saved) {
        const savedData = JSON.parse(saved);
        Object.keys(savedData).forEach(key => {
            if (achievements[key]) {
                achievements[key].unlocked = savedData[key].unlocked;
                if (key === 'ninja' && savedData[key].ninjasFound !== undefined) {
                    achievements[key].ninjasFound = savedData[key].ninjasFound;
                }
            }
        });
    }
    const savedNinjas = localStorage.getItem('ninjasFound');
    if (savedNinjas) {
        ninjasFound = JSON.parse(savedNinjas);
    }
    updateTracker();
}

// Save achievements to localStorage
function saveAchievements() {
    localStorage.setItem('achievements', JSON.stringify(achievements));
}

// Show achievement notification
function showAchievement(achievement) {
    const modal = document.getElementById('achievement-modal');
    const icon = document.getElementById('achievement-icon');
    const title = document.getElementById('achievement-title');
    const description = document.getElementById('achievement-description');
    const points = document.getElementById('achievement-points');
    
    icon.textContent = achievement.icon;
    title.textContent = 'Achievement Unlocked!';
    description.textContent = achievement.title;
    points.textContent = `+${achievement.points} points`;
    
    modal.classList.add('show');
    
    setTimeout(() => {
        modal.classList.remove('show');
    }, 3000);
    
    updateTracker();
    checkAllUnlocked();
}

// Unlock achievement
function unlockAchievement(id) {
    if (!achievements[id].unlocked) {
        achievements[id].unlocked = true;
        saveAchievements();
        showAchievement(achievements[id]);
    }
}

// Update tracker button
function updateTracker() {
    const unlockedCount = Object.values(achievements).filter(a => a.unlocked).length;
    const totalCount = Object.keys(achievements).length;
    const progress = document.getElementById('tracker-progress');
    if (progress) {
        progress.textContent = `${unlockedCount}/${totalCount}`;
    }
}

// Check if all achievements unlocked
function checkAllUnlocked() {
    const allUnlocked = Object.values(achievements).every(a => a.unlocked);
    if (allUnlocked) {
        setTimeout(() => {
            const modal = document.getElementById('achievement-modal');
            const icon = document.getElementById('achievement-icon');
            const title = document.getElementById('achievement-title');
            const description = document.getElementById('achievement-description');
            const points = document.getElementById('achievement-points');
            
            icon.textContent = '🎉';
            title.textContent = 'CONGRATULATIONS!';
            description.textContent = 'You unlocked a new Software Engineer for your company!';
            points.textContent = '🏆 MASTER ACHIEVER 🏆';
            
            modal.classList.add('show');
            
            // Show fireworks
            showFireworks();
            
            setTimeout(() => {
                modal.classList.remove('show');
            }, 6000);
        }, 3500);
    }
}

// Fireworks animation
function showFireworks() {
    const canvas = document.createElement('canvas');
    canvas.id = 'fireworks-canvas';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');
    
    const particles = [];
    const colors = ['#ff6b6b', '#ffd700', '#4ecdc4', '#45b7d1', '#f06292', '#ba68c8', '#7bed9f'];
    
    class Particle {
        constructor(x, y, color) {
            this.x = x;
            this.y = y;
            this.color = color;
            this.velocity = {
                x: (Math.random() - 0.5) * 8,
                y: (Math.random() - 0.5) * 8
            };
            this.alpha = 1;
            this.decay = Math.random() * 0.03 + 0.02;
        }
        
        update() {
            this.velocity.y += 0.1;
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.alpha -= this.decay;
        }
        
        draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }
    
    function createFirework(x, y) {
        const particleCount = 50;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle(x, y, color));
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach((particle, index) => {
            particle.update();
            particle.draw();
            
            if (particle.alpha <= 0) {
                particles.splice(index, 1);
            }
        });
        
        if (particles.length > 0 || Date.now() - startTime < 3000) {
            requestAnimationFrame(animate);
        } else {
            document.body.removeChild(canvas);
        }
    }
    
    const startTime = Date.now();
    
    // Create fireworks at random intervals
    const fireworkInterval = setInterval(() => {
        if (Date.now() - startTime > 3000) {
            clearInterval(fireworkInterval);
            return;
        }
        
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height * 0.6;
        createFirework(x, y);
    }, 400);
    
    // Initial burst
    createFirework(canvas.width / 2, canvas.height / 3);
    
    animate();
}

// Achievement 1: Profile Click
const profileImage = document.querySelector('.profile-image');
if (profileImage) {
    profileImage.addEventListener('click', () => {
        unlockAchievement('profile');
    });
}

// Achievement 2: Scroll to top button
const scrollToTopBtn = document.getElementById('scroll-to-top');
if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener('click', () => {
        unlockAchievement('scrollTop');
    });
}

// Achievement 3: Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        unlockAchievement('darkMode');
    });
}

// Achievement 4: Click on the flashing "42"
const easterEgg42 = document.querySelector('.easter-egg-42');
if (easterEgg42) {
    easterEgg42.style.cursor = 'pointer';
    easterEgg42.addEventListener('click', () => {
        unlockAchievement('fortytwo');
    });
}

// Achievement 5: Click coffee emoji once
const copyrightEgg = document.querySelector('.copyright-easter-egg');
if (copyrightEgg) {
    copyrightEgg.addEventListener('click', () => {
        unlockAchievement('coffee');
    });
}

// Achievement 6: Find all ninjas
function setupNinjas() {
    const ninjas = document.querySelectorAll('.ninja-hidden, .ninja-visible');
    ninjas.forEach((ninja, index) => {
        ninja.addEventListener('click', (e) => {
            e.stopPropagation();
            const ninjaId = `ninja-${index}`;
            
            if (!ninjasFound.includes(ninjaId)) {
                ninjasFound.push(ninjaId);
                localStorage.setItem('ninjasFound', JSON.stringify(ninjasFound));
                
                // Visual feedback
                ninja.style.opacity = '0.3';
                ninja.style.transform = 'scale(1.5) rotate(360deg)';
                
                achievements.ninja.ninjasFound = ninjasFound.length;
                saveAchievements();
                
                // Check if all ninjas found
                if (ninjasFound.length >= achievements.ninja.totalNinjas) {
                    unlockAchievement('ninja');
                } else {
                    // Show progress notification
                    const modal = document.getElementById('achievement-modal');
                    const icon = document.getElementById('achievement-icon');
                    const title = document.getElementById('achievement-title');
                    const description = document.getElementById('achievement-description');
                    const points = document.getElementById('achievement-points');
                    
                    icon.textContent = '🥷';
                    title.textContent = 'Ninja Found!';
                    description.textContent = `Found ${ninjasFound.length}/${achievements.ninja.totalNinjas} ninjas`;
                    points.textContent = '🔍 Keep searching!';
                    
                    modal.classList.add('show');
                    setTimeout(() => {
                        modal.classList.remove('show');
                    }, 3000);
                }
                
                updateTracker();
            }
        });
        
        // Mark already found ninjas
        if (ninjasFound.includes(`ninja-${index}`)) {
            ninja.style.opacity = '0.3';
        }
    });
}

setupNinjas();

// Tracker Modal
const trackerBtn = document.getElementById('achievement-tracker');
const trackerModal = document.getElementById('tracker-modal');
const trackerClose = document.querySelector('.tracker-close');

if (trackerBtn && trackerModal) {
    trackerBtn.addEventListener('click', () => {
        updateAchievementsList();
        trackerModal.style.display = 'block';
    });
}

if (trackerClose) {
    trackerClose.addEventListener('click', () => {
        trackerModal.style.display = 'none';
    });
}

window.addEventListener('click', (e) => {
    if (e.target === trackerModal) {
        trackerModal.style.display = 'none';
    }
});

// Update achievements list in modal
function updateAchievementsList() {
    const list = document.getElementById('achievements-list');
    const totalScore = document.getElementById('total-score');
    
    if (list) {
        list.innerHTML = '';
        let score = 0;
        
        Object.values(achievements).forEach(achievement => {
            if (achievement.unlocked) {
                score += achievement.points;
            }
            
            const item = document.createElement('div');
            item.className = `achievement-item ${achievement.unlocked ? 'unlocked' : 'locked'}`;
            
            let descriptionText = achievement.unlocked ? achievement.description : achievement.hint;
            if (achievement.id === 'ninja') {
                const found = achievement.ninjasFound || ninjasFound.length;
                descriptionText += ` (${found}/${achievement.totalNinjas})`;
            }
            
            item.innerHTML = `
                <div class="achievement-item-icon">${achievement.unlocked ? achievement.icon : '🔒'}</div>
                <div class="achievement-item-text">
                    <h4>${achievement.unlocked ? achievement.title : '???'}</h4>
                    <p>${descriptionText}</p>
                </div>
                <div class="achievement-item-points">${achievement.unlocked ? `+${achievement.points}` : '???'}</div>
            `;
            list.appendChild(item);
        });
        
        if (totalScore) {
            totalScore.textContent = score;
        }
    }
}

// Reset Achievements Button
const resetBtn = document.getElementById('reset-achievements');
if (resetBtn) {
    resetBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all achievements? This cannot be undone!')) {
            // Reset all achievements
            Object.keys(achievements).forEach(key => {
                achievements[key].unlocked = false;
                if (key === 'ninja') {
                    achievements[key].ninjasFound = 0;
                }
            });
            coffeeClicks = 0;
            ninjasFound = [];
            localStorage.removeItem('ninjasFound');
            
            // Reset ninja visuals
            document.querySelectorAll('.ninja-hidden').forEach(ninja => {
                ninja.style.opacity = '';
                ninja.style.transform = '';
            });
            
            saveAchievements();
            updateTracker();
            updateAchievementsList();
            
            // Show confirmation
            alert('✅ All achievements have been reset!');
        }
    });
}

// Initialize
loadAchievements();
updateAchievementsList();

// Mobile menu toggle (if you want to add a hamburger menu later)
// This is a placeholder for future enhancement
const createMobileMenu = () => {
    // Add mobile menu functionality here if needed
};
