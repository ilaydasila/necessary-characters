import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseHair, chooseCloth, chooseWeapon } from "../rootSlice";
import Form from "../Form";

export const Step1 = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const hair = useSelector((state) => state.hair);
  const cloth = useSelector((state) => state.cloth);
  const weapon = useSelector((state) => state.weapon);

  const { register, handleSubmit } = useForm({
    defaultValues: { hair, cloth, weapon },
  });

  const onSubmit = (data) => {
    dispatch(chooseHair(data.hair));
    dispatch(chooseCloth(data.cloth));
    dispatch(chooseWeapon(data.weapon));
    history.push("/step2");
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className='input-container'>
        <label htmlFor='hair'>Hair</label>
        <br />
        <select
          id='hair'
          name='hair'
          ref={register}
          onChange={(e) => dispatch(chooseHair(e.target.value))}
        >
          <option value='hair1'>1</option>
          <option value='hair2'>2</option>
          <option value='hair3'>3</option>
          <option value='hair4'>4</option>
          <option value='hair5'>5</option>
          <option value='hair6'>6</option>
        </select>
      </div>
      <div className='input-container'>
        <label htmlFor='cloth'>Cloth</label>
        <br />
        <select
          id='cloth'
          name='cloth'
          ref={register}
          onChange={(e) => dispatch(chooseCloth(e.target.value))}
        >
          <option value='cloth1'>1</option>
          <option value='cloth2'>2</option>
          <option value='cloth3'>3</option>
          <option value='cloth4'>4</option>
          <option value='cloth5'>5</option>
          <option value='cloth6'>6</option>
          <option value='cloth7'>7</option>
        </select>
      </div>
      <div className='input-container'>
        <label htmlFor='weapon'>Weapon</label>
        <br />
        <select
          id='weapon'
          name='weapon'
          ref={register}
          onChange={(e) => dispatch(chooseWeapon(e.target.value))}
        >
          <option value='weapon1'>1</option>
          <option value='weapon2'>2</option>
          <option value='weapon3'>3</option>
          <option value='weapon4'>4</option>
          <option value='weapon5'>5</option>
        </select>
      </div>
      <button>Next</button>
    </Form>
  );
};
