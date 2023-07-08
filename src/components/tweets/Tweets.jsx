import css from "./Tweets.module.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

export const Tweets = ({ users, onFollowButtonClick }) => {
  const handleFollowClick = (id) => {
    onFollowButtonClick(id);
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        {users?.map((user) => (
          <li key={user.id} className={css.card}>
            <NavLink
              className={css.logo_link}
              to={"https://m.goit.global/ua/new/"}
              target="_blank"
            >
              <Logo className={css.logo_svg} />
            </NavLink>
            <div className={css.card_bg}></div>
            <div className={css.img_wrapper}>
              <img src={user.avatar} alt={user.user} className={css.avatar} />
            </div>
            <p className={css.tweets_count}>{user.tweets} tweets</p>
            <p>
              {user.followers.toLocaleString("en-US", { style: "decimal" })}{" "}
              followers
            </p>
            <button
              className={css.btn_follow}
              type="button"
              onClick={() => handleFollowClick(user.id)}
              style={{
                backgroundColor: user.isFollowing ? "#5cd3a8" : "#ebd8ff",
              }}
            >
              {user.isFollowing ? "Following" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Tweets.propTypes = {
  users: PropTypes.array.isRequired,
  onFollowButtonClick: PropTypes.func.isRequired,
};
