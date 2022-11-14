import React from "react";
import { useParams } from "react-router-dom";

export function ProfileDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Profile Page for { id }!</h1>
    </div>
  );
}
