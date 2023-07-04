import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
export const Layout = () => {
  return (
    <>
      <header>
        <nav className={css.nav}>
          <div className={css.navbar}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/tweets">Tweets</NavLink>
          </div>
        </nav>
      </header>

      <div>
        <Outlet />
      </div>
    </>
  );
};
