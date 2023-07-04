import axios from "axios";

const API = axios.create({
  baseURL: "https://6488c2e20e2469c038fe51f7.mockapi.io/",
});

export const getUsers = async () => {
  const response = await API.get("users");
  return response;
};
export const putFollower = async (user) => {
  const response = API.put(`users/${user.id}`, user);
  return response;
};
