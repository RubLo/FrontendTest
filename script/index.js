
const clickHandler = username => {
  resetView();
  fetchData(username);

};

const fetchData = username => {
  const rootURL = "https://api.github.com/users/";
  const oAuth = "?access_token=72b809d2a074f6aa53fbbedbf12a7f6371a838a3";

  if (username) {
    fetch(rootURL + username + oAuth)
      .then(res => (!res.ok ? renderError() : res.json()))
      .then(dataUser => {
        dataUser
          ? fetch(`${rootURL}${username}/repos${oAuth}`)
              .then(res => res.json())
              .then(dataRepo => {
                renderUserProfile(dataUser);
                renderUserRepos(dataRepo);
              })
          : null;
      })
      .catch(error => renderError());
  }
};

const renderUserProfile = data => {
    adaptHeight(widget, "expand-for-details");
    writeHtmlUserDetails(data);
    toggleView(userInfos);
};

const renderUserRepos = data => {
  toggleView(repoHeader);
  toggleView(userRepos);
  writeHtmlUserRepos(data);
};

const renderError = () => {
  adaptHeight(widget, "expand-for-error");
  toggleView(error);
};



