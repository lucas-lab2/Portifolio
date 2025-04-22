document.addEventListener('DOMContentLoaded', () => {
  // Load certificates
  const certsGrid = document.getElementById('certificates');
  if(certsGrid) {
    fetch('js/data/certificates.json')
      .then(res=>res.json())
      .then(data=>{
        data.forEach(c=>{
          const div = document.createElement('div');
          div.className='col-md-6';
          div.innerHTML=`<div class="card p-3"><h5>${c.title}</h5><p>${c.platform} - ${c.date}</p><p>${c.description}</p></div>`;
          certsGrid.appendChild(div);
        });
      });
  }
  // Load web projects
  const webGrid = document.getElementById('web-projects');
  if(webGrid) {
    fetch('../js/data/projects.json')
      .then(res=>res.json())
      .then(data=>{
        data.web.forEach(p=>{
          const div = document.createElement('div');
          div.className='col-md-4';
          div.innerHTML=`<div class="card p-3 h-100"><h5>${p.title}</h5><p>${p.description}</p><p><strong>Tech:</strong> ${p.tech.join(', ')}</p><a href="${p.github_url}" target="_blank">Ver no GitHub</a></div>`;
          webGrid.appendChild(div);
        });
      });
  }
  // Load DS projects
  const dsGrid = document.getElementById('ds-projects');
  if(dsGrid) {
    fetch('../js/data/projects.json')
      .then(res=>res.json())
      .then(data=>{
        data['data-science'].forEach(p=>{
          const div = document.createElement('div');
          div.className='col-md-4';
          div.innerHTML=`<div class="card p-3 h-100"><h5>${p.title}</h5><p>${p.description}</p><p><strong>Tech:</strong> ${p.tech.join(', ')}</p><a href="${p.github_url}" target="_blank">Ver no GitHub</a></div>`;
          dsGrid.appendChild(div);
        });
      });
  }
});
