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
        {users.map((user) => (
          <li key={user.id} className={css.card}>
            <NavLink to={"https://m.goit.global/ua/new/"}>
              <Logo className={css.logo_svg} />
            </NavLink>
            <div className={css.card_bg}></div>
            <div className={css.img_wrapper}>
              <img src={user.avatar} alt={user.user} className={css.avatar} />
            </div>
            <div className={css.line}></div>
            <p className={css.tweets_count}>{user.tweets} tweets</p>
            <p>{user.followers} followers</p>
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

// import PropTypes from "prop-types";
// import { useState } from "react";

// export const Tweets = ({ users, onFollowButtonClick }) => {
//   const userPerRow = 3;
//   const [next, setNext] = useState(userPerRow);
//   const handleFollowClick = (id) => {
//     onFollowButtonClick(id);
//   };
//   const handleMoreTweets = () => {
//     setNext(next + userPerRow);
//   };

//   return (
//     <>
//       <ul>
//         {users?.slice(0, next)?.map((user) => (
//           <li key={user.id}>
//             <img src={user.avatar} alt={user.user} />
//             <h1>{user.user}</h1>
//             <p>{user.tweets} tweets</p>
//             <p>{user.followers} followers</p>
//             <button type="button" onClick={() => handleFollowClick(user.id)}>
//               {user.isFollowing ? "Following" : "Follow"}
//             </button>
//           </li>
//         ))}
//       </ul>
//       {next < users?.length && (
//         <button type="button" onClick={handleMoreTweets}>
//           Load more
//         </button>
//       )}
//     </>
//   );
// };

// Tweets.propTypes = {
//   users: PropTypes.array.isRequired,
//   onFollowButtonClick: PropTypes.func.isRequired,
// };
