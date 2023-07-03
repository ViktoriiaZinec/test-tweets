import PropTypes from "prop-types";

export const Tweets = ({ users, onFollowButtonClick }) => {
  const handleFollowClick = (id) => {
    onFollowButtonClick(id);
  };
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <img src={user.avatar} alt={user.user} />
          <h1>{user.user}</h1>
          <p>{user.tweets} tweets</p>
          <p>{user.followers} followers</p>
          <button type="button" onClick={() => handleFollowClick(user.id)}>
            Follow
          </button>
        </li>
      ))}
    </ul>
  );
};

Tweets.propTypes = {
  users: PropTypes.array.isRequired,
  onFollowButtonClick: PropTypes.func.isRequired,
};
