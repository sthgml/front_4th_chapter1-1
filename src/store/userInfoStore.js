const userInfoStore = {
  getUserInfo: () => {
    const stringUserInfo = localStorage.getItem("userInfo");
    const userInfo = stringUserInfo ? JSON.parse(stringUserInfo) : null;
    return userInfo;
  },

  setUserInfo: (newValue) => {
    localStorage.setItem("userInfo", JSON.stringify(newValue));
  },

  clearUserInfo: () => {
    localStorage.setItem("userInfo", "");
  },
};

export default userInfoStore;
