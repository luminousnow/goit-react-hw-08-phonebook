const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;

const authSelektors = {
  getIsLoggedIn,
  getUserName,
};

export { getIsLoggedIn, getUserName };
