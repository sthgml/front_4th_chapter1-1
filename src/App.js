// router
// 전역 상태관리
import userInfoStore from "./store/userInfoStore";

import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";

const router = {
  "/": MainPage,
  "/login": LoginPage,
  "/profile": ProfilePage,
};

const App = () => {
  const userInfo = userInfoStore.getUserInfo();
  const currentPath =
    window.location.hash.replace("#", "") || window.location.pathname;

  let routePage = router[currentPath] || ErrorPage;

  // NOTE(@sohee): userInfo가 저장된 값이 없으면 로그인 페이지로 이동
  if (currentPath === "/profile") {
    if (!userInfo) {
      window.history.pushState({}, "", "/login");
      routePage = LoginPage;
    }
  }

  // NOTE(@sohee): 로그인된 사용자가 로그인 페이지에 접근시 메인 페이지로 리다이렉트 한다 userInfo가 저장된 값이 있을 땐 로그인 페이지로 접근해도 메인 페이지로 이동
  if (userInfo && currentPath === "/login") {
    window.history.pushState({}, "", "/");
    routePage = MainPage;
  }

  routePage.register && document.addEventListener("click", routePage.register);
  routePage.submitRegister &&
    document.addEventListener("submit", routePage.submitRegister);

  return routePage();
};

export default App;
