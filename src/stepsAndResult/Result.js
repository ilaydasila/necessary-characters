import React from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import "./result.scss";

export const Result = () => {
  const state = useSelector((state) => state.name);

  return (
    <>
      <p className='name'>{state}</p>
      <Link to='/'>
        <button>Start Again</button>
      </Link>
    </>
  );
};
