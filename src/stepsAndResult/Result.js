import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

export const Result = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <p>{JSON.stringify(state, null, 2)}</p>
      <Link to='/'>Start Again</Link>
    </>
  );
};
