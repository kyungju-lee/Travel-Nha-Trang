/**
 * 🌴 Nha Trang Travel Assistant - Interactive Features
 * JavaScript for enhanced user experience
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initNavigation();
    initChecklistStorage();
    initScrollAnimations();
    initCountdown();
    initProgressIndicator();
});

/**
 * Navigation - Smooth scroll & active state
 */
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.main-nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active state on scroll
    function updateActiveNav() {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

/**
 * Checklist - Local Storage persistence
 */
function initChecklistStorage() {
    const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
    const STORAGE_KEY = 'nhatrang_checklist';
    
    // Load saved state
    const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    
    checkboxes.forEach((checkbox, index) => {
        const key = `item_${index}`;
        
        // Restore saved state
        if (savedState[key] !== undefined) {
            checkbox.checked = savedState[key];
        }
        
        // Save on change
        checkbox.addEventListener('change', function() {
            const currentState = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
            currentState[key] = this.checked;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(currentState));
            
            // Animation feedback
            const checkmark = this.nextElementSibling;
            checkmark.style.transform = 'scale(1.2)';
            setTimeout(() => {
                checkmark.style.transform = 'scale(1)';
            }, 200);
            
            // Show progress
            updateChecklistProgress();
        });
    });
    
    // Initial progress update
    updateChecklistProgress();
}

/**
 * Update checklist progress indicator
 */
function updateChecklistProgress() {
    const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
    const checked = document.querySelectorAll('.check-item input[type="checkbox"]:checked').length;
    const total = checkboxes.length;
    const percentage = Math.round((checked / total) * 100);
    
    // Update progress display if exists
    let progressDisplay = document.querySelector('.checklist-progress');
    if (!progressDisplay) {
        progressDisplay = document.createElement('div');
        progressDisplay.className = 'checklist-progress';
        progressDisplay.innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>
            <span class="progress-text"></span>
        `;
        const checklistSection = document.querySelector('.checklist-section .section-title');
        if (checklistSection) {
            checklistSection.after(progressDisplay);
        }
    }
    
    const progressFill = progressDisplay.querySelector('.progress-fill');
    const progressText = progressDisplay.querySelector('.progress-text');
    
    if (progressFill && progressText) {
        progressFill.style.width = `${percentage}%`;
        progressText.textContent = `${checked}/${total} 완료 (${percentage}%)`;
        
        // Style the progress bar
        progressDisplay.style.cssText = `
            max-width: 400px;
            margin: 0 auto 2rem;
            text-align: center;
        `;
        
        const progressBar = progressDisplay.querySelector('.progress-bar');
        progressBar.style.cssText = `
            height: 8px;
            background: #DFE6E9;
            border-radius: 4px;
            overflow: hidden;
            margin-bottom: 0.5rem;
        `;
        
        progressFill.style.cssText += `
            height: 100%;
            background: linear-gradient(90deg, #4ECDC4, #1A535C);
            border-radius: 4px;
            transition: width 0.3s ease;
        `;
        
        progressText.style.cssText = `
            font-size: 0.9rem;
            color: #636E72;
        `;
    }
}

/**
 * Scroll Animations - Intersection Observer
 */
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.attraction-card, .food-card, .tip-card, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Countdown Timer to Travel Date
 */
function initCountdown() {
    const travelDate = new Date('2026-01-01T18:00:00+09:00'); // 공항 도착 시간 기준
    
    function updateCountdown() {
        const now = new Date();
        const diff = travelDate - now;
        
        if (diff <= 0) {
            // Already traveling or passed
            return;
        }
        
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        // Add countdown display to hero
        let countdownDisplay = document.querySelector('.countdown-display');
        if (!countdownDisplay) {
            countdownDisplay = document.createElement('div');
            countdownDisplay.className = 'countdown-display';
            const travelBadge = document.querySelector('.travel-badge');
            if (travelBadge) {
                travelBadge.after(countdownDisplay);
            }
        }
        
        countdownDisplay.innerHTML = `
            <div class="countdown-label">여행까지</div>
            <div class="countdown-time">
                <span class="countdown-num">${days}</span><span class="countdown-unit">일</span>
                <span class="countdown-num">${hours}</span><span class="countdown-unit">시간</span>
                <span class="countdown-num">${minutes}</span><span class="countdown-unit">분</span>
            </div>
        `;
        
        countdownDisplay.style.cssText = `
            margin-top: 1rem;
            padding: 1rem 2rem;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(10px);
            border-radius: 16px;
            text-align: center;
            animation: fadeInUp 1s ease-out 0.3s backwards;
        `;
        
        const label = countdownDisplay.querySelector('.countdown-label');
        label.style.cssText = `
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 0.5rem;
        `;
        
        const timeDisplay = countdownDisplay.querySelector('.countdown-time');
        timeDisplay.style.cssText = `
            display: flex;
            justify-content: center;
            align-items: baseline;
            gap: 0.25rem;
        `;
        
        countdownDisplay.querySelectorAll('.countdown-num').forEach(num => {
            num.style.cssText = `
                font-size: 1.5rem;
                font-weight: 700;
                color: #F7DC6F;
            `;
        });
        
        countdownDisplay.querySelectorAll('.countdown-unit').forEach(unit => {
            unit.style.cssText = `
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.9);
                margin-right: 0.5rem;
            `;
        });
    }
    
    updateCountdown();
    setInterval(updateCountdown, 60000); // Update every minute
}

/**
 * Progress Indicator - Reading progress
 */
function initProgressIndicator() {
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="reading-progress-fill"></div>';
    document.body.prepend(progressBar);
    
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: transparent;
        z-index: 1000;
    `;
    
    const fill = progressBar.querySelector('.reading-progress-fill');
    fill.style.cssText = `
        height: 100%;
        background: linear-gradient(90deg, #4ECDC4, #FF6B6B);
        width: 0%;
        transition: width 0.1s ease;
    `;
    
    function updateProgress() {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = (window.scrollY / scrollHeight) * 100;
        fill.style.width = `${scrollProgress}%`;
    }
    
    window.addEventListener('scroll', updateProgress);
}

/**
 * Utility: Format Vietnamese Dong
 */
function formatVND(amount) {
    return new Intl.NumberFormat('vi-VN').format(amount) + '₫';
}

/**
 * Utility: Format date in Korean
 */
function formatDateKR(date) {
    const days = ['일', '월', '화', '수', '목', '금', '토'];
    const d = new Date(date);
    return `${d.getMonth() + 1}월 ${d.getDate()}일 (${days[d.getDay()]})`;
}

// Add some helpful console message
console.log('%c🌴 나트랑 여행 비서 v1.0', 'font-size: 20px; color: #4ECDC4; font-weight: bold;');
console.log('%c즐거운 여행 되세요! 🎉', 'font-size: 14px; color: #FF6B6B;');

