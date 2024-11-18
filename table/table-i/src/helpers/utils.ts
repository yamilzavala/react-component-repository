import { SortDirection, SortField, User } from "../types/types";

export function sortUsers(
  userList: Array<User>,
  field: SortField = "id",
  direction: SortDirection = "asc"
): User[] {
  const usersClone = userList.slice();
  switch (field) {
    case "id":
    case "age":
      return usersClone.sort((a, b) => {
        return direction === "asc" ? a[field] - b[field] : b[field] - a[field];
      });
    case "name":
    case "occupation":
      return usersClone.sort((a, b) => {
        return direction === "asc"
          ? a[field].localeCompare(b[field])
          : b[field].localeCompare(a[field]);
      });
    default:
      return usersClone;
  }
}

export function paginateUsers(
  userList: Array<User>,
  page: number,
  pageSize: number
): { totalPages: number; pageUsers: User[] } {
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const pageUsers = userList.slice(start, end);
  const totalPages = userList.length / pageSize;
  return { totalPages, pageUsers };
}
