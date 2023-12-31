import { filterValues } from "./filterValues";

const { all, follow, following } = filterValues;

export const filterUser = (users, filter) => {
  switch (filter) {
    case all.value:
      return users;
    case follow.value:
      return users.filter((user) => !user.isFollowing);
    case following.value:
      return users.filter((user) => user.isFollowing);
    default:
      return users;
  }
};
