import PropTypes from "prop-types";
export const Tweets = ({ users }) => {
  console.log("users4 :>> ", users);
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <img src={user.avatar} alt={user.user} />
          <h1>{user.user}</h1>
          <p>{user.tweets}</p>
          <p>{user.followers}</p>
        </li>
      ))}
    </ul>
  );
};

Tweets.propTypes = {
  users: PropTypes.array.isRequired,
};
