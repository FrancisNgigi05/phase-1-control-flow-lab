let distanceInFeet = 199;
let result;
function scuberGreetingForFeet(distanceInFeet){
  // Write your code here!
  if (distanceInFeet < 400) {
    result = "This one is on me!";
  }
  else if (distanceInFeet > 2000 && distanceInFeet < 2500) {
    result = "I will gladly take your thirty bucks.";
  }
  else {
    result = "No can do."
  }
  return (result)
}

let city = "NYC";
function ternaryCheckCity(city){
  // Write your code here!
  // returns "Ok sounds good." when the city is NYc returns "No go" if city is not NYC
  result = city === "NYC" ? "Ok, sounds good." : "No go.";

  return (result)
}

let tip = "generous";
function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case "generous":
      result = "Thank you so much.";
      break;
    case "not as generous":
      result = "Thank you.";
      break;
    default:
      result = "Bye."
  }
  return (result);
}