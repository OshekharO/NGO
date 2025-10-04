// ----------------------------
// Portfolio: GitHub Projects
// ----------------------------
const githubUsername = "OshekharO"; // your GitHub username
const portfolioContainer = document.getElementById('portfolio-items');

async function loadGitHubProjects() {
  try {
    // Fetch public repositories
    const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=updated&per_page=100`);
    const repos = await response.json();

    repos.forEach(repo => {
      // Skip forks if you want only original projects
      if (repo.fork) return;

      // Create project card
      const projectCard = document.createElement('div');
      projectCard.className = 'col-md-4 mb-4 fade-in';
      projectCard.innerHTML = `
        <div class="card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${repo.name}</h5>
            <p class="card-text">${repo.description || 'No description provided.'}</p>
            <div class="mt-auto">
              <p>
                ⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}
              </p>
              ${repo.topics && repo.topics.length > 0 ? `<p>${repo.topics.map(topic => `<span class="badge bg-secondary me-1">${topic}</span>`).join('')}</p>` : ''}
              <a href="${repo.html_url}" class="btn btn-primary btn-sm me-2" target="_blank">GitHub</a>
              ${repo.homepage ? `<a href="${repo.homepage}" class="btn btn-success btn-sm" target="_blank">Live Demo</a>` : ''}
            </div>
          </div>
        </div>
      `;
      portfolioContainer.appendChild(projectCard);
    });

    // ----------------------------
    // Fade-in animation on scroll
    // ----------------------------
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
  }
}

// Call the function to load projects
loadGitHubProjects();
