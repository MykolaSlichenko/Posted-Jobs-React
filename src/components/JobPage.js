import React from "react";
import { useParams } from "react-router-dom";

export function JobsDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h1>Page for { id }!</h1>
    </div>
  );
}
