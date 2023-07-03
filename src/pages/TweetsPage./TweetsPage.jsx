import { useEffect, useState } from "react";
import { getUsers, putFollower } from "../../services/usersAPI";
import { Tweets } from "../../components/tweets/Tweets";
import { BtnLoadMore } from "../../components/BtnLoadMore/BtnLoadMore";
import { Loader } from "../../components/Loader/Loader";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [followerCounts, setFollowerCounts] = useState(
    users.map((user) => user.followers)
  );

  useEffect(() => {
    setIsLoading(true);

    getUsers(page)
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, ...data.data]);
        setError(false);
        setIsLoading(true);
        setPage(page);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [page]);

  const handleFollowButtonClick = (userId) => {
    const updatedUsers = users.map((user) => {
      if (user.id === userId) {
        const updatedFollowers =
          parseInt(user.followers) + (user.isFollowing ? -1 : 1);

        return {
          ...user,
          followers: updatedFollowers,
          isFollowing: !user.isFollowing,
        };
      }
      return user;
    });
    setUsers(updatedUsers);
    const updatedUser = updatedUsers.find((user) => user.id === userId);
    setFollowerCounts(updatedUsers.map((user) => user.followers));

    putFollower(updatedUser);
  };

  const renderLoadMoreButton = users.length % 3 === 0;

  function onLoadMore() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <>
      <Tweets
        users={users}
        followers={followerCounts}
        onFollowButtonClick={handleFollowButtonClick}
      />
      {error && <p> It seems, something went wrong</p>}
      {renderLoadMoreButton && <BtnLoadMore onLoadMore={onLoadMore} />}
      {isLoading && <Loader />}
    </>
  );
};
export default TweetsPage;
