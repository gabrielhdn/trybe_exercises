const angulo1 = 60;
const angulo2 = 60;
const angulo3 = 60;

if (angulo1 + angulo2 + angulo3 === 180) {
  console.log(true);
} else if (angulo1 <= 0 || angulo2 <= 0 || angulo3 <= 0) {
  console.log("Erro: ângulo inválido");
} else {
  console.log(false);
}

// COM FUNÇÃO:

function angles(a1, a2, a3) {
  if (a1 <= 0 || a2 <= 0 || a3 <= 0) {
    return 'Invalid angle.'
  } else if (a1 + a2 + a3 === 180) {
    return true;
  } else {
    return false;
  }
}

console.log(angles(60, 60, 60));
