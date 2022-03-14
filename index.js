function scuberGreetingForFeet(num){
  if (num > 0 && num <= 400) {
    return `This one is on me!`
  }
  else if (num > 2000 && num <= 2500){
    return `I will gladly take your thirty bucks.`
  }
  else if (num >2500){
    return `No can do.`
  }

  // Write your code here!
}

function ternaryCheckCity(city){
  return (city === `NYC`) ? 'Ok, sounds good.' : 'No go.';
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case `generous`:
      return `Thank you so much.`;
    case `not as generous`:
      return `Thank you.`;
    default:
      return `Bye.`;
  }
}

