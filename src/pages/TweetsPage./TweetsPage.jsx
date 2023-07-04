import { useEffect, useState } from "react";
import { getUsers, putFollower } from "../../services/usersAPI";
import { Tweets } from "../../components/tweets/Tweets";
import { Loader } from "../../components/Loader/Loader";
import Dropdown from "../../components/Dropdown/Dropdown";
import { filterUser } from "../../components/FilterUser/FilterUser";
import css from "./TweetsPage.module.css";
import { BtnLoadMore } from "../../components/BtnLoadMore/BtnLoadMore";
import { BtnGoBack } from "../../components/BtnGoBack/BtnGoBack";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const userPerRow = 3;
  const [next, setNext] = useState(userPerRow);
  const [selectedOption, setSelectedOption] = useState("");

  let filteredUsers = filterUser(users, selectedOption);

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
  const handleMoreTweets = () => {
    setNext(next + userPerRow);
  };

  const slicedUsers = filteredUsers?.slice(0, next);
  return (
    <div className={css.container}>
      <BtnGoBack />
      <Dropdown
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />

      <Tweets
        users={slicedUsers}
        followers={followerCounts}
        onFollowButtonClick={handleFollowButtonClick}
      />

      {error && <p> It seems, something went wrong</p>}
      {slicedUsers.length < filteredUsers.length && (
        <BtnLoadMore onLoadMore={handleMoreTweets} />
      )}
      {isLoading && <Loader />}
    </div>
  );
};
export default TweetsPage;
