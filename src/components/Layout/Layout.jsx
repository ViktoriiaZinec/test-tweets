import { NavLink, Outlet } from "react-router-dom";
import css from "./Layout.module.css";
export const Layout = () => {
  return (
    <>
      <header>
        <nav className={css.nav}>
          <div className={css.navbar}>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : undefined)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => (isActive ? css.active : undefined)}
              to="/tweets"
            >
              Tweets
            </NavLink>
          </div>
        </nav>
      </header>

      <div>
        <Outlet />
      </div>
    </>
  );
};
