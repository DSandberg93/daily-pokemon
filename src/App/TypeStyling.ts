const typeStyles = () => `
/* Pokemon type styling */

/* Normal typing combinations */

.normal {
  background: rgb(168, 168, 120);
}

.normal-fire {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.normal-figthing {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.normal-water {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.normal-flying {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.normal-grass {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.normal-poison {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.normal-electric {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.normal-ground {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(224, 192, 104) 80%);
  background-attachment: fixed;
}

.normal-psychic {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.normal-rock {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.normal-ice {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.normal-bug {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.normal-dragon {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.normal-ghost {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.normal-dark {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.normal-steel {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.normal-fairy {
  background: radial-gradient(rgb(168, 168, 120), rgb(168, 168, 120) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Fire typing combinations */

.fire {
  background: rgb(240, 128, 48);
}

.fire-normal {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.fire-figthing {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.fire-water {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.fire-flying {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.fire-grass {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.fire-poison {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.fire-electric {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.fire-ground {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(224, 192, 104) 80%);
  background-attachment: fixed;
}

.fire-psychic {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.fire-rock {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.fire-ice {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.fire-bug {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.fire-dragon {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.fire-ghost {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.fire-dark {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.fire-steel {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.fire-fairy {
  background: radial-gradient(rgb(240, 128, 48), rgb(240, 128, 48) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Fighting typing combinations */

.fighting {
  background: rgb(192, 48, 40);
}

.fighting-normal {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.fighting-fire {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.fighting-water {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.fighting-flying {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.fighting-grass {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.fighting-poison {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.fighting-electric {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.fighting-ground {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(224, 192, 104) 80%);
  background-attachment: fixed;
}

.fighting-psychic {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.fighting-rock {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.fighting-ice {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.fighting-bug {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.fighting-dragon {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.fighting-ghost {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.fighting-dark {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.fighting-steel {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.fighting-fairy {
  background: radial-gradient(rgb(192, 48, 40), rgb(192, 48, 40) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Water typing combinations */

.water {
  background: rgb(104, 144, 240);
}

.water-normal {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.water-fire {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.water-fighting {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.water-flying {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.water-grass {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.water-poison {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.water-electric {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.water-ground {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(224, 192, 104) 80%);
  background-attachment: fixed;
}

.water-psychic {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.water-rock {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.water-ice {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.water-bug {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.water-dragon {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.water-ghost {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.water-dark {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.water-steel {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.water-fairy {
  background: radial-gradient(rgb(104, 144, 240), rgb(104, 144, 240) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Flying typing combinations */

.flying {
  background: rgb(168, 144, 240);
}

.flying-normal {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.flying-fire {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.flying-fighting {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.flying-water {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.flying-grass {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.flying-poison {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.flying-electric {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.flying-ground {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(224, 192, 104) 80%);
  background-attachment: fixed;
}

.flying-psychic {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.flying-rock {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.flying-ice {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.flying-bug {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.flying-dragon {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.flying-ghost {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.flying-dark {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.flying-steel {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.flying-fairy {
  background: radial-gradient(rgb(168, 144, 240), rgb(168, 144, 240) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Grass typing combinations */

.grass {
  background: rgb(120, 200, 80);
}

.grass-normal {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.grass-fire {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.grass-figthing {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.grass-water {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.grass-flying {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.grass-poison {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.grass-electric {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.grass-ground {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(224, 192, 104) 80%);
  background-attachment: fixed;
}

.grass-psychic {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.grass-rock {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.grass-ice {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.grass-bug {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.grass-dragon {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.grass-ghost {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.grass-dark {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.grass-steel {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.grass-fairy {
  background: radial-gradient(rgb(120, 200, 80), rgb(120, 200, 80) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Poison typing combinations */

.poison {
  background: rgb(160, 64, 160);
}

.poison-normal {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.poison-fire {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.poison-figthing {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.poison-water {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.poison-flying {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.poison-grass {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.poison-electric {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.poison-ground {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(224, 192, 104) 80%);
  background-attachment: fixed;
}

.poison-psychic {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.poison-rock {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.poison-ice {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.poison-bug {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.poison-dragon {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.poison-ghost {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.poison-dark {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.poison-steel {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.poison-fairy {
  background: radial-gradient(rgb(160, 64, 160), rgb(160, 64, 160) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Electric typing combinations */

.electric {
  background: rgb(248, 208, 48);
}

.electric-normal {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.electric-fire {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.electric-figthing {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.electric-water {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.electric-flying {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.electric-grass {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.electric-poison {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.electric-ground {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(224, 192, 104) 80%);
  background-attachment: fixed;
}

.electric-psychic {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.electric-rock {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.electric-ice {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.electric-bug {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.electric-dragon {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.electric-ghost {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.electric-dark {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.electric-steel {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.electric-fairy {
  background: radial-gradient(rgb(248, 208, 48), rgb(248, 208, 48) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Ground typing combinations */

.ground {
  background: rgb(224, 192, 104);
}

.ground-normal {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.ground-fire {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.ground-figthing {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.ground-water {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.ground-flying {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.ground-grass {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.ground-poison {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.ground-electric {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.ground-psychic {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.ground-rock {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.ground-ice {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.ground-bug {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.ground-dragon {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.ground-ghost {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.ground-dark {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.ground-steel {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.ground-fairy {
  background: radial-gradient(rgb(224, 192, 104), rgb(224, 192, 104) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Psychic typing combinations */

.psychic {
  background: rgb(248, 88, 136);
}

.psychic-normal {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.psychic-fire {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.psychic-figthing {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.psychic-water {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.psychic-flying {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.psychic-grass {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.psychic-poison {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.psychic-electric {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.psychic-ground {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(224, 192, 104) 80%);
  background-attachment: fixed;
}

.psychic-rock {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.psychic-ice {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.psychic-bug {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.psychic-dragon {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.psychic-ghost {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.psychic-dark {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.psychic-steel {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.psychic-fairy {
  background: radial-gradient(rgb(248, 88, 136), rgb(248, 88, 136) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Rock typing combinations */

.rock {
  background: rgb(184, 160, 56);
}

.rock-normal {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.rock-fire {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.rock-figthing {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.rock-water {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.rock-flying {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.rock-grass {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.rock-poison {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.rock-electric {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.rock-ground {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.rock-psychic {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.rock-ice {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.rock-bug {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.rock-dragon {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.rock-ghost {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.rock-dark {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.rock-steel {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.rock-fairy {
  background: radial-gradient(rgb(184, 160, 56), rgb(184, 160, 56) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Ice typing combinations */

.ice {
  background: rgb(152, 216, 216);
}

.ice-normal {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.ice-fire {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.ice-figthing {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.ice-water {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.ice-flying {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.ice-grass {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.ice-poison {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.ice-electric {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.ice-ground {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.ice-psychic {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.ice-rock {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(184, 160, 56) 80%);
  background-attachment: fixed;
}

.ice-bug {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.ice-dragon {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.ice-ghost {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.ice-dark {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.ice-steel {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.ice-fairy {
  background: radial-gradient(rgb(152, 216, 216), rgb(152, 216, 216) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Bug typing combinations */

.bug {
  background: rgb(168, 184, 32);
}

.bug-normal {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.bug-fire {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.bug-figthing {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.bug-water {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.bug-flying {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.bug-grass {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.bug-poison {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.bug-electric {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.bug-ground {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.bug-psychic {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.bug-rock {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(184, 160, 56) 80%);
  background-attachment: fixed;
}

.bug-ice {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.bug-dragon {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.bug-ghost {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.bug-dark {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.bug-steel {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.bug-fairy {
  background: radial-gradient(rgb(168, 184, 32), rgb(168, 184, 32) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Dragon typing combinations */

.dragon {
  background: rgb(112, 56, 248);
}

.dragon-normal {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.dragon-fire {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.dragon-figthing {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.dragon-water {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.dragon-flying {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.dragon-grass {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.dragon-poison {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.dragon-electric {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.dragon-ground {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.dragon-psychic {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.dragon-ice {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(184, 160, 56) 80%);
  background-attachment: fixed;
}

.dragon-rock {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.dragon-bug {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.dragon-ghost {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.dragon-dark {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.dragon-steel {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.dragon-fairy {
  background: radial-gradient(rgb(112, 56, 248), rgb(112, 56, 248) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Ghost typing combinations */

.ghost {
  background: rgb(112, 88, 152);
}

.ghost-normal {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.ghost-fire {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.ghost-figthing {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.ghost-water {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.ghost-flying {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.ghost-grass {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.ghost-poison {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.ghost-electric {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.ghost-ground {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.ghost-psychic {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.ghost-ice {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(184, 160, 56) 80%);
  background-attachment: fixed;
}

.ghost-rock {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.ghost-bug {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.ghost-dragon {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.ghost-dark {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.ghost-steel {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.ghost-fairy {
  background: radial-gradient(rgb(112, 88, 152), rgb(112, 88, 152) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Dark typing combinations */

.dark {
  background: rgb(112, 88, 72);
}

.dark-normal {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.dark-fire {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.dark-figthing {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.dark-water {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.dark-flying {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.dark-grass {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.dark-poison {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.dark-electric {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.dark-ground {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.dark-psychic {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.dark-ice {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(184, 160, 56) 80%);
  background-attachment: fixed;
}

.dark-rock {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.dark-bug {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.dark-dragon {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.dark-ghost {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.dark-steel {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}

.dark-fairy {
  background: radial-gradient(rgb(112, 88, 72), rgb(112, 88, 72) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Steel typing combinations */

.steel {
  background: rgb(184, 184, 208);
}

.steel-normal {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.steel-fire {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.steel-figthing {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.steel-water {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.steel-flying {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.steel-grass {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.steel-poison {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.steel-electric {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.steel-ground {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.steel-psychic {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.steel-ice {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(184, 160, 56) 80%);
  background-attachment: fixed;
}

.steel-rock {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.steel-bug {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.steel-dragon {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.steel-ghost {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.steel-dark {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.steel-fairy {
  background: radial-gradient(rgb(184, 184, 208), rgb(184, 184, 208) 65%, rgb(238, 153, 172) 80%);
  background-attachment: fixed;
}

/* Fairy typing combinations */

.fairy {
  background: rgb(238, 153, 172);
}

.fairy-normal {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.fairy-fire {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(240, 128, 48) 80%);
  background-attachment: fixed;
}

.fairy-figthing {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(192, 48, 40) 80%);
  background-attachment: fixed;
}

.fairy-water {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(104, 144, 240) 80%);
  background-attachment: fixed;
}

.fairy-flying {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(168, 144, 240) 80%);
  background-attachment: fixed;
}

.fairy-grass {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(120, 200, 80) 80%);
  background-attachment: fixed;
}

.fairy-poison {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(160, 64, 160) 80%);
  background-attachment: fixed;
}

.fairy-electric {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(248, 208, 48) 80%);
  background-attachment: fixed;
}

.fairy-ground {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(248, 88, 136) 80%);
  background-attachment: fixed;
}

.fairy-psychic {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(168, 168, 120) 80%);
  background-attachment: fixed;
}

.fairy-ice {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(184, 160, 56) 80%);
  background-attachment: fixed;
}

.fairy-rock {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(152, 216, 216) 80%);
  background-attachment: fixed;
}

.fairy-bug {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(168, 184, 32) 80%);
  background-attachment: fixed;
}

.fairy-dragon {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(112, 56, 248) 80%);
  background-attachment: fixed;
}

.fairy-ghost {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(112, 88, 152) 80%);
  background-attachment: fixed;
}

.fairy-dark {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(112, 88, 72) 80%);
  background-attachment: fixed;
}

.fairy-steel {
  background: radial-gradient(rgb(238, 153, 172), rgb(238, 153, 172) 65%, rgb(184, 184, 208) 80%);
  background-attachment: fixed;
}
`;

export default typeStyles;
