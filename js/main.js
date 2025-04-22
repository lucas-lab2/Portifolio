document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('nav ul');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Load certificates
    fetch('data/certificates.json')
        .then(res => res.json())
        .then(data => {
            const container = document.getElementById('certificates-grid');
            data.certificates.forEach(cert => {
                const card = document.createElement('div');
                card.className = 'certificate-card';
                card.innerHTML = `<h3>${cert.title}</h3><p>${cert.platform}</p><p>${cert.date}</p>`;
                container.appendChild(card);
            });
        });

    // Load projects
    fetch('data/projects.json')
        .then(res => res.json())
        .then(data => {
            const webContainer = document.getElementById('web-projects-grid');
            data['web-projects'].forEach(proj => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>
                                  <p><strong>Tech:</strong> ${proj.tech.join(', ')}</p>
                                  <a href="${proj.github_url}" target="_blank">View Project</a>`;
                webContainer.appendChild(card);
            });
            
            const pyContainer = document.getElementById('python-projects-grid');
            data['python-projects'].forEach(proj => {
                const card = document.createElement('div');
                card.className = 'project-card';
                card.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>
                                  <p><strong>Tech:</strong> ${proj.tech.join(', ')}</p>
                                  <a href="${proj.github_url}" target="_blank">View Project</a>`;
                pyContainer.appendChild(card);
            });
        });
});
