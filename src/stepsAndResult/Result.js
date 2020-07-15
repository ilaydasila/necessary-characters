import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export const Result = () => {
  const state = useSelector((state) => state.name);

  return (
    <>
      <p>{state}</p>
      <Link to='/'>
        <button>Start Again</button>
      </Link>
    </>
  );
};
