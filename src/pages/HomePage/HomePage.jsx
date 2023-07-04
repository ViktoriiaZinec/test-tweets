import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.typewriter}>
      <h1>Welcome to my app</h1>
      <Link to="/tweets" className={css.link}>
        Go ahead
      </Link>
    </div>
  );
};
export default HomePage;
