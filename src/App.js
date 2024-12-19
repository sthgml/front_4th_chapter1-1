// router
// 전역 상태관리

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
  const routePage = router[window.location.pathname] || ErrorPage;
  return routePage();
};

export default App;
