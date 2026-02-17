document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Form Submission Handling
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const submitButton = form.querySelector('button[type="submit"]');
            const email = emailInput?.value;
            
            if (email && emailInput.validity.valid) {
                // Disable button to prevent multiple submissions
                if (submitButton) {
                    submitButton.disabled = true;
                    submitButton.textContent = '처리 중...';
                }
                
                // Simulate submission (in production, this would be an API call)
                setTimeout(() => {
                    alert(`참여 신청이 접수되었습니다! (${email})\n곧 안내 메일을 보내드리겠습니다.`);
                    form.reset();
                    
                    // Re-enable button
                    if (submitButton) {
                        submitButton.disabled = false;
                        submitButton.textContent = '신청하기';
                    }
                }, 500);
            } else {
                alert('올바른 이메일 주소를 입력해주세요.');
            }
        });
    }

    // Mission modal (footer button)
    const missionBtn = document.getElementById('mission-btn');
    const missionModal = document.getElementById('mission-modal');
    const missionClose = missionModal?.querySelector('.modal-close');

    function openMission() {
        missionModal?.classList.add('open');
        missionModal?.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        // Focus on close button for accessibility
        setTimeout(() => missionClose?.focus(), 100);
    }

    function closeMission() {
        missionModal?.classList.remove('open');
        missionModal?.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        // Return focus to the button that opened the modal
        setTimeout(() => missionBtn?.focus(), 100);
    }

    missionBtn?.addEventListener('click', openMission);
    missionClose?.addEventListener('click', closeMission);

    // Close modal on outside click
    missionModal?.addEventListener('click', (e) => {
        if (e.target === missionModal) closeMission();
    });

    // Close modal on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && missionModal?.classList.contains('open')) {
            closeMission();
        }
    });

    // Focus trap for modal accessibility
    if (missionModal) {
        missionModal.addEventListener('keydown', (e) => {
            if (e.key === 'Tab' && missionModal.classList.contains('open')) {
                const focusableElements = missionModal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];

                if (e.shiftKey && document.activeElement === firstElement) {
                    e.preventDefault();
                    lastElement?.focus();
                } else if (!e.shiftKey && document.activeElement === lastElement) {
                    e.preventDefault();
                    firstElement?.focus();
                }
            }
        });
    }
});
