function saturdayFun(activity = "roller-skate") {
  return (`This Saturday, I want to ${activity}!`);
}
saturdayFun();
saturdayFun("cycle");

const mondayWork = function (action = "go to the office") {
  return (`This Monday, I will ${action}.`);
}
mondayWork();
mondayWork("study for my test");

function wrapAdjective(flair = "*") {
  return function (term = "special") {
    return `You are ${flair}${term}${flair}!`
  }
}
  wrapAdjective();
  wrapAdjective("||", "great");