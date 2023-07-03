import { NavLink, Outlet } from "react-router-dom";
export const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tweets">Tweets</NavLink>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
