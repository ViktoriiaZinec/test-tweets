import axios from "axios";

axios.defaults.baseURL = "https://6488c2e20e2469c038fe51f7.mockapi.io/";

export const getUsers = async () => {
  const response = axios.get("users");
  return response;
};
export const putFollower = async (user) => {
  const response = axios.put(`users/${user.id}`, user);
  return response;
};
