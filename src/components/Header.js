const navList = [
  { path: "/", label: "홈" },
  { path: "/profile", label: "프로필" },
];

const Header = () => `
  <header class="bg-blue-600 text-white p-4 sticky top-0">
    <h1 class="text-2xl font-bold">항해플러스</h1>
  </header>

  <nav class="bg-white shadow-md p-2 sticky top-14">
    <ul class="flex justify-around">
      ${navList
        .map((item) =>
          liItem({
            currentPath: window.location.pathname,
            ...item,
          }),
        )
        .join("")}
        <li>
          <a 
            id="logout"
            href="/login"
            data-path="/login"
            class="text-gray-600"
          >
            로그아웃
          </a>
        </li>
    </ul>
  </nav>
`;

const liItem = ({ currentPath, path, label }) => {
  return `
  <li>
    <a 
      id="nav-button"
      data-path="${path}"
      href="${path}"
      class="${currentPath.replace("/", "") === path.replace("/", "") ? "font-bold text-blue-600" : "text-gray-600"}"
    >
      ${label}
    </a>
  </li>
  `;
};

export default Header;
