import React from "react";

export default function RoleComponent({ roles, currRole, children }) {
  if (!roles.includes(currRole)) return <div>Access denied</div>;
  return <div>{children}</div>;
}
