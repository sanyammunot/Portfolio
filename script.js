function toggleTheme() {
    const isLight = document.body.classList.toggle('light-theme');
    try {
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
    } catch (e) {
        // ignore storage errors
    }
}

// Apply saved theme on load
document.addEventListener('DOMContentLoaded', () => {
    try {
        const saved = localStorage.getItem('theme');
        if (saved === 'light') {
            document.body.classList.add('light-theme');
        }
    } catch (e) {
        // ignore storage errors
    }

    // Navbar Highlight Logic
    const nav = document.querySelector('.nav');
    const highlight = document.querySelector('.nav-highlight');
    const icons = document.querySelectorAll('.dock-icon');

    if (nav && highlight && icons.length > 0) {
        icons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                const rect = icon.getBoundingClientRect();
                const navRect = nav.getBoundingClientRect();

                // Calculate position relative to nav
                const left = rect.left - navRect.left;

                highlight.style.width = `${rect.width}px`;
                highlight.style.transform = `translateY(-50%) translateX(${left}px)`;
                highlight.style.opacity = '1';
            });
        });

        nav.addEventListener('mouseleave', () => {
            highlight.style.opacity = '0';
        });
    }

    // Render projects if helper is present
    if (typeof renderProjects === 'function') {
        renderProjects();
    }

    // Work experience: toggle description when the block is clicked
    document.querySelectorAll('.experience-item').forEach((item) => {
        item.addEventListener('click', () => {
            const btn = item.querySelector('.company-toggle');
            const nextOpen = !item.classList.contains('is-open');
            item.classList.toggle('is-open', nextOpen);

            if (btn) {
                btn.setAttribute('aria-expanded', nextOpen ? 'true' : 'false');
            }
        });
    });

    // Smooth scroll
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
});

