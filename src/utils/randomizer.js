export function randomizerHair() {
  const hairs = [
    "hair1",
    "hair2",
    "hair3",
    "hair4",
    "hair5",
    "hair6",
    "hair7",
    "hair8",
    "hair9",
  ];
  const hair = hairs[Math.floor(Math.random() * hairs.length)];
  return hair;
}

export function randomizerCloth() {
  const clothes = [
    "cloth1",
    "cloth2",
    "cloth3",
    "cloth4",
    "cloth5",
    "cloth6",
    "cloth7",
    "cloth8",
    "cloth9",
  ];
  const cloth = clothes[Math.floor(Math.random() * clothes.length)];

  return cloth;
}

export function randomizerWeapon() {
  const weapons = ["weapon1", "weapon2", "weapon3", "weapon4", "weapon5"];
  const weapon = weapons[Math.floor(Math.random() * weapons.length)];
  return weapon;
}
