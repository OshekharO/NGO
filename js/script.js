const githubUsername = "OshekharO";
const projectsContainer = document.getElementById('projects-container');

async function loadGitHubProjects() {
  try {
    const res = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=10`);
    const repos = await res.json();

    repos.forEach((repo,index)=>{
      if(repo.fork) return;
      const card = document.createElement('div');
      card.className = 'project-card fade-in';
      card.style.animationDelay = `${index*0.1}s`;
      card.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description||'No description provided.'}</p>
        <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
        <div class="project-links">
          <a href="${repo.html_url}" target="_blank">GitHub</a>
          ${repo.homepage?`<a href="${repo.homepage}" target="_blank">Live Demo</a>`:''}
        </div>
      `;
      projectsContainer.appendChild(card);
    });

    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold:0.2, rootMargin:"0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries, observer)=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    },appearOptions);
    faders.forEach(fader=>appearOnScroll.observe(fader));
  } catch(e){ console.error(e); projectsContainer.innerHTML='<p>Unable to load projects.</p>'; }
}

window.addEventListener('DOMContentLoaded', loadGitHubProjects);

// Scroll spy for active nav links
const navLinks = document.querySelectorAll('.nav a');
window.addEventListener('scroll', ()=>{
  const fromTop = window.scrollY+100;
  navLinks.forEach(link=>{
    const section = document.querySelector(link.getAttribute('href'));
    if(section.offsetTop<=fromTop && section.offsetTop+section.offsetHeight>fromTop){
      link.classList.add('active');
    } else { link.classList.remove('active'); }
  });
});
