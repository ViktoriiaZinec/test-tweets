import { useEffect, useState } from "react";
import { getUsers, putFollower } from "../../services/usersAPI";
import { Tweets } from "../../components/tweets/Tweets";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [followerCounts, setFollowerCounts] = useState(
    users.map((user) => user.followers)
  );

  useEffect(() => {
    getUsers().then((data) => {
      console.log("data :>> ", data);
      setUsers(data.data);
    });
  }, []);

  const handleFollowButtonClick = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        const updatedFollowers =
          parseInt(user.followers) + (user.isFollowing ? -1 : 1);
        // const newButtonLabel =
        //   updatedFollowers % 2 === 0 ? "Follow" : "Unfollow";

        return {
          ...user,
          followers: updatedFollowers,
          isFollowing: !user.isFollowing,
          // buttonLabel: newButtonLabel,
        };
      }
      return user;
    });
    setUsers(updatedUsers);
    const updatedUser = updatedUsers.find((user) => user.id === userId);
    setFollowerCounts(updatedUsers.map((user) => user.followers));

    putFollower(updatedUser);
  };

  return (
    <Tweets
      users={users}
      followers={followerCounts}
      onFollowButtonClick={handleFollowButtonClick}
    />
  );
};
export default TweetsPage;
