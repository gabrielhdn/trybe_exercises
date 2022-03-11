const number = -10;

if (number > 0) {
  console.log("Positive");
}
else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// COM FUNÇÃO:

function positiveNegative(n1) {
  if (n1 > 0) {
    return 'Positive.';
  } else if (n1 < 0) {
    return 'Negative.';
  } else {
    return 'Zero.';
  }
}

console.log(positiveNegative(-5));
