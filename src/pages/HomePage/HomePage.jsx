import { Link } from "react-router-dom";
import css from "./HomePage.module.css";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();
  return (
    <div className={css.typewriter}>
      <h1>Welcome to my app</h1>
      <Link to="/tweets" className={css.link} location={location}>
        Go ahead
      </Link>
    </div>
  );
};
export default HomePage;
