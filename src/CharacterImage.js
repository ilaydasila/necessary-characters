import React from "react";
import { getImageOfCharacter } from "./utils/image";

import "./characterImage.scss";

export default function CharImg({ characterInfo }) {
  const imageHair = getImageOfCharacter(characterInfo).imageHair;
  const imageCloth = getImageOfCharacter(characterInfo).imageCloth;
  const imageWeapon = getImageOfCharacter(characterInfo).imageWeapon;
  return (
    <div className='character-image-container'>
      <img className='bottomimg' src='/assets/png/char.png' alt='character' />
      <img className='toping' src={imageCloth} alt='character cloth' />
      <img className='toping' src={imageHair} alt='character hair' />
      <img className='toping' src={imageWeapon} alt='character weapon' />
    </div>
  );
}
