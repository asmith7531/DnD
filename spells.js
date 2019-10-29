function charAttribute(score) {
  let modifier = Math.floor((score - 10) / 2);
  console.log(modifier);
  let extraSpells = [];
  let max = null;
  if (score == 0) {
    modifier = 0;
    max = -1;
  } else if (score == 11) {
    max = 1;
  } else {
    max = maxSpell(modifier);
  }
  if (modifier > 0) {
    extraSpells = calcExtraSpells(modifier);
  }
  let charStats = {
    modifier: modifier,
    maximumSpellLevel: max,
    extraSpells: extraSpells
  };
  return charStats;
}

function calcExtraSpells(modifier) {
  let extraSpells = [];
  let leftOver = modifier % 4;
  var num = Math.ceil(modifier / 4);
  console.log(num);

  if (leftOver == 0) {
    for (i = 0; i < 4; i++) {
      extraSpells.push(num);
    }
  } else {
    for (i = 0; i < leftOver; i++) {
      extraSpells.push(num);
    }
  }

  while (num >= 0) {
    num--;
    for (i = 4; i > 0; i--) {
      extraSpells.push(num);
    }
  }
  var zero = extraSpells.indexOf(0);
  if (zero < 10) {
    return extraSpells.slice(0, zero);
  } else {
    return extraSpells.slice(0, 9);
  }
}

function maxSpell(modifier) {
  if (modifier >= 4) {
    return 9;
  } else if (modifier == 3) {
    return 7;
  } else if (modifier == 2) {
    return 4;
  } else if (modifier == 1) {
    return 2;
  } else if (modifier == 0) {
    return 0;
  } else if (modifier < 0) {
    return -1;
  }
}
