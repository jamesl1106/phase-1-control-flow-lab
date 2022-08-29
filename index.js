function scuberGreetingForFeet(distance) {


  let giveCustomerFreeSample, chargeTwentyDollars, chargeThirtyDollars, notAllow;

  if (distance <= 400) {
    giveCustomerFreeSample = true;
    return "This one is on me!"
  } else if (distance <= 2000) {
    chargeTwentyDollars = true;
    return "That will be twenty bucks."
  } else if (distance <= 2500) {
    chargeThirtyDollars = true;
    return "I will gladly take your thirty bucks."
  } else if (distance > 2500) {
    notAllow = true;
    return "No can do."
  }

}

function ternaryCheckCity(city) {

  // if (city == "NYC") {
  //   return "Ok, sounds good."
  // } else {
  //   return "No go."
  // }
return city == "NYC" ? "Ok, sounds good." : "No go."




}

function switchOnCharmFromTip(tip) {
  
  switch (tip){
    case 'generous' :
      return "Thank you so much."
      break;
    case 'not as generous' :
      return 'Thank you.'
      break;
    case 'thanks for everything' :
      return 'Bye.'
      break;
  }
}