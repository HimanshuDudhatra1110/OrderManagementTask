import * as ROUTES from "../constants/routes";

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">
        {" "}
        LOGO{" "}
      </a>

      <nav className="navbar">
        <div className="links">
          <a href="item1">Item1</a>
          <a href="item2">Item2</a>
          <a href="item3">Item3</a>
          <a href="item4">Item4</a>
          <a href="item5">Item5</a>
          <a href="item6">Item6</a>
        </div>

        <a href={ROUTES.SIGNIN} type="button" className="signin-btn">
          Sign In
        </a>

        <a href="#" className="user-btn">
          <i class="bx bxs-user-circle"></i>
        </a>
        <a href="#" className="notification-btn">
          <i class="bx bxs-bell"></i>
        </a>
      </nav>
    </header>
  );
}
