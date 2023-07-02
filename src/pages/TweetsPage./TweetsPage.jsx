import { useEffect, useState } from "react";
import { getUsers } from "../../services/usersAPI";
import { Tweets } from "../../components/tweets/Tweets";

const TweetsPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((data) => {
      console.log("data :>> ", data);
      setUsers(data.data);
    });
  }, []);
  console.log("users3 :>> ", users);
  return <Tweets users={users} />;
};
export default TweetsPage;
