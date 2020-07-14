import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseHair, chooseCloth, chooseWeapon } from "../rootSlice";

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor='hair'>Hair:</label>
        <select
          id='hair'
          name='hair'
          ref={register}
          onChange={(e) => dispatch(chooseHair(e.target.value))}
        >
          <option value='hair1'>Hair 1</option>
          <option value='hair2'>Hair 2</option>
          <option value='hair3'>Hair 3</option>
          <option value='hair4'>Hair 4</option>
          <option value='hair5'>Hair 5</option>
          <option value='hair6'>Hair 6</option>
        </select>
        <div>
          <label htmlFor='cloth'>Cloth:</label>
          <select
            id='cloth'
            name='cloth'
            ref={register}
            onChange={(e) => dispatch(chooseCloth(e.target.value))}
          >
            <option value='cloth1'>Cloth 1</option>
            <option value='cloth2'>Cloth 2</option>
            <option value='cloth3'>Cloth 3</option>
            <option value='cloth4'>Cloth 4</option>
            <option value='cloth5'>Cloth 5</option>
            <option value='cloth6'>Cloth 6</option>
          </select>
        </div>
        <div>
          <label htmlFor='weapon'>Weapon:</label>
          <select
            id='weapon'
            name='weapon'
            ref={register}
            onChange={(e) => dispatch(chooseWeapon(e.target.value))}
          >
            <option value='weapon1'>Weapon 1</option>
            <option value='weapon2'>Weapon 2</option>
            <option value='weapon3'>Weapon 3</option>
            <option value='weapon4'>Weapon 4</option>
            <option value='weapon5'>Weapon 5</option>
            <option value='weapon6'>Weapon 6</option>
          </select>
        </div>
        <button>Next</button>
      </div>
    </form>
  );
};
