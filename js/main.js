/* Mobile nav toggle */
document.querySelector('.nav-toggle')?.addEventListener('click', () => {
    document.querySelector('.nav-menu')?.classList.toggle('open');
});

/* Smooth scroll for anchor links */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    });
});

/* RGPD cookie consent banner */
(function () {
    const banner = document.getElementById('rgpd-banner');
    if (!banner || localStorage.getItem('rgpd-consent')) return;
    banner.style.display = 'flex';
    document.getElementById('rgpd-accept')?.addEventListener('click', () => {
        localStorage.setItem('rgpd-consent', 'accepted');
        banner.style.display = 'none';
    });
    document.getElementById('rgpd-refuse')?.addEventListener('click', () => {
        localStorage.setItem('rgpd-consent', 'refused');
        banner.style.display = 'none';
    });
})();
