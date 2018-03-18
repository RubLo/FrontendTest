const widget = document.querySelector(".widget"),
  error = document.querySelector("#error"),
  search = document.querySelector("#search"),
  input = document.querySelector("#searchInput"),
  userInfos = document.querySelector("#userInfos"),
  userRepos = document.querySelector("#userRepos"),
  repoHeader = document.querySelector("#repoHeader");

const rootURL = "https://api.github.com/users/";
const oAuth = "?access_token="; //insert your own access token after the equal

