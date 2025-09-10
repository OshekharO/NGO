// Fetch GitHub Repositories
async function loadGitHubRepos() {
  try {
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
  } catch (err) {
    document.getElementById("github-projects").innerHTML =
      `<li class="list-group-item text-danger">Failed to load repos</li>`;
  }
}

// Fetch Random Quote (ZenQuotes API)
async function loadQuote() {
  try {
    const response = await fetch("https://zenquotes.io/api/random");
    const data = await response.json();
    document.getElementById("quote").textContent = data[0].q;
    document.getElementById("author").textContent = data[0].a;
  } catch (err) {
    document.getElementById("quote").textContent = "Could not load quote.";
    document.getElementById("author").textContent = "";
  }
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  loadGitHubRepos();
  loadQuote();
});
