import { users } from "../data/users";

export type SortField = "id" | "name" | "age" | "occupation";
export type SortDirection = "asc" | "desc";
export type User = (typeof users)[number];
