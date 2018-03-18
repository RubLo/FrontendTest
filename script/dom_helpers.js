
const _hide = element => {
  element.classList.add("hidden");
};

const _toggleView = element => {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
    element.classList.add("hidden");
  }
};

const _resetHeight = element => {
  element.classList.remove("expand-for-error");
  element.classList.remove("expand-for-repos");
  element.classList.remove("expand-for-details");
};

const _removeAllChildsbyClassName = (childClassName, parent) => {
  document.querySelectorAll(`.${childClassName}`).forEach(el => {
    parent.removeChild(el);
  });
};

const _adaptHeight = (element, className) => {
  element.classList.add(className);
};

const _resetView = () => {
  _hide(repoHeader);
  _hide(userRepos);
  _hide(error);
  _hide(userInfos);
  _resetHeight(widget);
  _removeAllChildsbyClassName("repo", userRepos);
};


const _writeHtmlUserDetails = data => {
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

const _writeHtmlUserRepos = data => {
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
