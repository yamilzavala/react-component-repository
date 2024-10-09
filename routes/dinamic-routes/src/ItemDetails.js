import React from "react";
import { useParams } from "react-router-dom";

export default function ItemDetails() {
  const { id } = useParams();
  return <div>ItemDetails - ID: {id}</div>;
}
