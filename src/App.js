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

  // NOTE(@sohee): userInfo가 저장된 값이 없으면 로그인 페이지로 이동
  if (!userInfo || !userInfo.userId) {
    window.history.pushState({}, "", "/");
    return LoginPage();
  }

  // NOTE(@sohee): serInfo가 저장된 값이 있을 땐 로그인 페이지로 접근해도 메인 페이지로 이동
  if (window.location.pathname === "/login") {
    window.history.pushState({}, "", "/");
    return MainPage();
  } else {
    const routePage = router[window.location.pathname] || ErrorPage;
    return routePage();
  }
};

export default App;
