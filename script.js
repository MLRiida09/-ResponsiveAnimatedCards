
        const panels = document.querySelectorAll(".panel");
        
        panels.forEach((panel) => {
            panel.addEventListener('click', () => {
                removeActiveClass();
                panel.classList.add('active');
            });

            // Keyboard navigation
            panel.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    removeActiveClass();
                    panel.classList.add('active');
                }
            });

            // Touch support improvements
            panel.addEventListener('touchstart', (e) => {
                e.preventDefault();
            });

            panel.addEventListener('touchend', (e) => {
                e.preventDefault();
                removeActiveClass();
                panel.classList.add('active');
            });
        });

        function removeActiveClass() {
            panels.forEach((panel) => {
                panel.classList.remove('active');
            });
        }

        // Auto-rotate feature (optional)
        let autoRotate = false;
        let rotateInterval;

        function startAutoRotate() {
            if (autoRotate) return;
            autoRotate = true;
            let currentIndex = 0;
            
            rotateInterval = setInterval(() => {
                removeActiveClass();
                panels[currentIndex].classList.add('active');
                currentIndex = (currentIndex + 1) % panels.length;
            }, 3000);
        }

        function stopAutoRotate() {
            autoRotate = false;
            clearInterval(rotateInterval);
        }

        // Stop auto-rotate on user interaction
        panels.forEach(panel => {
            panel.addEventListener('click', stopAutoRotate);
            panel.addEventListener('touchend', stopAutoRotate);
        });

        // Optional: Start auto-rotate after 5 seconds of inactivity
        // setTimeout(startAutoRotate, 5000);
   