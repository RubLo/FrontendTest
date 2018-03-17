
const writeHtmlUserDetails = data => {
  document.querySelector("img").src = data.avatar_url;
  document.querySelector("#userName").innerText = `@${data.login}`;
  //if user doesn't have a name use his login
  document.querySelector("#fullName").innerText = data.name
    ? data.name
    : data.login;
  //if user doesn't have a bio
  document.querySelector("#bio").innerText = data.bio
    ? data.bio
    : "No bios yet...";
  //if user has a long bio summary extend the height of the view
  data.bio && data.bio.length > 30 ? userInfos.classList.add("long-bio") : null;
};

const writeHtmlUserRepos = data => {
  data.forEach(repo => {
    const repoDiv = document.createElement("div");
    repoDiv.classList.add("repo");

    repoDiv.innerHTML = `<h2 class="repo-title">
        ${repo.name}
      </h2>
      <div class="icon-block">
        <img src="./images/star.svg"><p>${repo.watchers_count}</p>
        <img src="./images/share-variant.svg"><p>${repo.forks_count}</p>
      </div>`;
    userRepos.appendChild(repoDiv);
  });
};
