export function getImageOfCharacter(characterInfo) {
  const hair = characterInfo.split(" ")[0];
  const cloth = characterInfo.split(" ")[1];
  const weapon = characterInfo.split(" ")[2];
  return {
    imageHair: `/assets/png/${hair}.png`,
    imageCloth: `/assets/png/${cloth}.png`,
    imageWeapon: `/assets/png/${weapon}.png`,
  };
}
