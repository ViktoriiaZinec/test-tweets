import axios from "axios";

const API = axios.create({
  baseURL: "https://6488c2e20e2469c038fe51f7.mockapi.io/",
  params: {
    limit: 3,
    completed: false,
  },
});

export const getUsers = async (index) => {
  const response = await API.get("users", {
    params: { page: index },
  });
  return response;
};
export const putFollower = async (user) => {
  const response = API.put(`users/${user.id}`, user);
  return response;
};
