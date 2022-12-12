import React from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  
  return (
    <div>
      <h1>Home Page!</h1>
      <Link className='link' to={`/jobs`} exact>
        <h3>To Jobs Page</h3>
      </Link>
    </div>
  );
}
