// Fetch GitHub Repositories
async function loadGitHubRepos() {
  const response = await fetch("https://api.github.com/users/OshekharO/repos");
  const repos = await response.json();
  const list = document.getElementById("github-projects");

  list.innerHTML = "";
  repos.slice(0, 5).forEach(repo => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
    list.appendChild(li);
  });
}

// Fetch Random Quote
async function loadQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  document.getElementById("quote").textContent = data.content;
  document.getElementById("author").textContent = data.author;
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadGitHubRepos();
  loadQuote();
});
