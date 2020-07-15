import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseName } from "../rootSlice";
import Form from "../Form";

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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='name'>
          Name<br></br>
        </label>
        <input id='name' name='name' ref={register} type='text'></input>
        <br />
        <button>Finish</button>
      </div>
    </Form>
  );
};
