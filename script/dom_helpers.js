
const hide = element => {
  element.classList.add("hidden");
};

const toggleView = element => {
  if (element.classList.contains("hidden")) {
    element.classList.remove("hidden");
    element.classList.add("visible");
  } else {
    element.classList.remove("visible");
    element.classList.add("hidden");
  }
};

const resetHeight = element => {
  element.classList.remove("expand-for-error");
  element.classList.remove("expand-for-details");
};

const removeAllChildsbyClassName = (childClassName, parent) => {
  document.querySelectorAll(`.${childClassName}`).forEach(el => {
    parent.removeChild(el);
  });
};

const adaptHeight = (element, className) => {
  element.classList.add(className);
};

const resetView = () => {
  hide(repoHeader);
  hide(userRepos);
  hide(error);
  hide(userInfos);
  resetHeight(widget);
  removeAllChildsbyClassName("repo", userRepos);
};
