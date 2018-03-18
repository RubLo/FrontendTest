class GitViewer {
  initData(username) {
    if (username) {
      _resetView();

      fetch(`${rootURL}${username}${oAuth}`)
        .then(res => (res.ok ? res.json() : this.renderError()))
        .then(dataUser => {
          dataUser
            ? fetch(`${rootURL}${username}/repos${oAuth}`)
                .then(res => res.json())
                .then(dataRepo => {
                  this.renderUserProfile(dataUser);
                  this.renderUserRepos(dataRepo);
                })
            : null;
        })
        .catch(error => this.renderError());
    }
  }

  renderUserProfile(data) {
    _adaptHeight(widget, "expand-for-details");
    _writeHtmlUserDetails(data);
    _toggleView(userInfos);
  }

  renderUserRepos(data) {
    if (data.length > 0) {
      _adaptHeight(widget, "expand-for-repos");
      _toggleView(repoHeader);
      _toggleView(userRepos);
      _writeHtmlUserRepos(data);
    }
  }

  renderError() {
    _adaptHeight(widget, "expand-for-error");
    _toggleView(error);
  }
}
