// Dev environment visual indicator - checks actual server header
// If not served by GitHub Pages, shows gray background (dev environment)
fetch(window.location.href, {method: 'HEAD'})
    .then(r => {
        const server = r.headers.get('server') || '';
        if (!server.toLowerCase().includes('github')) {
            document.body.style.background = 'linear-gradient(135deg, #2a2a2a 0%, #3a3a4e 100%)';
        }
    })
    .catch(() => {});
