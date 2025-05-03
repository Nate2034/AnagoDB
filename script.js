document.addEventListener('DOMContentLoaded', () => {
    // Menu content switching
    const menuLinks = document.querySelectorAll('.menu a');
    const contentAreas = document.querySelectorAll('.content-area');
  
    menuLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const contentId = link.getAttribute('data-content');
  
        // Hide all content areas
        contentAreas.forEach(area => area.classList.add('hidden'));
  
        // Show selected content area
        document.getElementById(contentId).classList.remove('hidden');
  
        // Update active menu link
        menuLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      });
    });
  
    let darkmode = localStorage.getItem('darkmode')
    const themeSwitch = document.getElementById('theme-switch')

    const enableDarkmode = () => {
        document.body.classList.add('darkmode')
        localStorage.setItem('darkmode', 'active')
    }

    const disableDarkmode = () => {
        document.body.classList.remove('darkmode')
        localStorage.setItem('darkmode', 'null')
    }

    if(darkmode === "active") enableDarkmode()
    
    themeSwitch.addEventListener("click", () => {
        darkmode = localStorage.getItem('darkmode')
        darkmode !== "active" ? enableDarkmode() : disableDarkmode()
    })

    // Set initial content (Dashboard)
    document.getElementById('dashboard-content').classList.remove('hidden');
    menuLinks[0].classList.add('active');
  
    // Theme switching
    const themeSelect = document.getElementById('theme');
    themeSelect.addEventListener('change', (e) => {
      document.documentElement.setAttribute('data-theme', e.target.value);
    });
  
    // Initialize theme from select value
    document.documentElement.setAttribute('data-theme', themeSelect.value);
  });