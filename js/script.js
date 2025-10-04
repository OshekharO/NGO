const githubUsername = "OshekharO";
const projectsContainer = document.getElementById('projects-container');

async function loadGitHubProjects() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=10`);
    const repos = await response.json();

    repos.forEach(repo => {
      if(repo.fork) return;
      const projectCard = document.createElement('div');
      projectCard.className = 'project-card fade-in';
      projectCard.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description provided.'}</p>
        <p>⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>
        ${repo.topics && repo.topics.length>0 ? `<p>${repo.topics.map(t=>`<span class="badge">${t}</span>`).join(' ')}</p>` : ''}
        <div class="project-links">
          <a href="${repo.html_url}" target="_blank">GitHub</a>
          ${repo.homepage? `<a href="${repo.homepage}" target="_blank">Live Demo</a>` : ''}
        </div>
      `;
      projectsContainer.appendChild(projectCard);
    });

    // Scroll Fade-in
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = { threshold:0.2, rootMargin:"0px 0px -50px 0px" };
    const appearOnScroll = new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    }, appearOptions);
    faders.forEach(fader => appearOnScroll.observe(fader));

  } catch(error) {
    console.error("Error fetching GitHub repos:", error);
    projectsContainer.innerHTML = `<p>Unable to load projects at this time.</p>`;
  }
}

window.addEventListener('DOMContentLoaded', loadGitHubProjects);
