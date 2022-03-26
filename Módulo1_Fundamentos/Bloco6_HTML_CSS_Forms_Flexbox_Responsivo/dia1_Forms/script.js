const submitButton = document.getElementById('enviar');
const eraseButton = document.getElementById('apagar');
const inputs = document.querySelectorAll('input');
const textA = document.getElementById('motivos');
const agreement = document.getElementById('concordo');
submitButton.addEventListener('click', prevent);
eraseButton.addEventListener('click', eraseAll);
agreement.addEventListener('change', enableSubmit);

function prevent(event) {
  event.preventDefault();
  const validation = textInputValidation();
  if (validation === false) {
    alert('Dados inválidos');
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.');
  }
}

function eraseAll() {
  for (let index = 0; index < inputs.length; index += 1) {
    inputs[index].value = '';
    inputs[index].checked = false;
  }
  textA.value = '';
}

function enableSubmit() {
  submitButton.disabled = !agreement.checked;
}

function textInputValidation() {
  const email = document.getElementById('email').value.length;
  const invalidEmail = email < 10 || email > 50;

  const name = document.getElementById('nome').value.length;
  const invalidName = name < 10 || name > 40;

  const reason = document.getElementById('motivos').value.length;
  const invalidReason = reason > 500;

  if (invalidEmail || invalidName || invalidReason) {
    return false;
  }
  else {
    return true;
  }
}
