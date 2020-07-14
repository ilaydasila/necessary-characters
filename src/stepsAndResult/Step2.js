import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseName } from "../rootSlice";

export const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const name = useSelector((state) => state.name);

  const { register, handleSubmit } = useForm({ defaultValues: { name } });

  const onSubmit = (data) => {
    dispatch(chooseName(data.name));
    history.push("/result");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name'>Name:</label>
        <input id='name' name='name' ref={register} type='text'></input>
        <button>Finish</button>
      </div>
    </form>
  );
};
