function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  const weekDaysList = document.querySelector('.week-days');
  let days = document.querySelectorAll('#days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const daysList = document.getElementById('days');
const buttonContainer = document.querySelector('.buttons-container');
const taskContainer = document.querySelector('.my-tasks');

function createDays(arrayDias) {
  for (let index = 0; index < arrayDias.length; index += 1) {
    let element = arrayDias[index];
    let diaSemana = document.createElement('li');
    diaSemana.innerHTML = element;
    diaSemana.classList = 'day';

    if (element === 4 || element === 11 || element === 18) {
      diaSemana.classList.add('friday');
    } else if (element === 24 || element === 31) {
      diaSemana.classList.add('holiday');
    } else if (element == 25) {
      diaSemana.classList.add('friday', 'holiday');
    }
    daysList.appendChild(diaSemana);
  }
}

createDays(dezDaysList);

function holidayButton(string) {
  let button = document.createElement('button');
  button.innerText = string;
  button.id = 'btn-holiday';
  buttonContainer.appendChild(button);
}

holidayButton('Feriados');

function changeHolidayColor(event) {
  let holidays = document.querySelectorAll('.holiday');
  let newColor = 'pink';
  let initialColor = 'rgb(238,238,238)';
  for (let index = 0; index < holidays.length; index += 1) {
    let element = holidays[index];
    if (element.style.backgroundColor === newColor) {
      element.style.backgroundColor = initialColor;
    } else {
      element.style.backgroundColor = newColor;
    }
  }
}

document.getElementById('btn-holiday').addEventListener('click', changeHolidayColor);

function makeFridayButton(string) {
  let button = document.createElement('button');
  button.innerText = string;
  button.id = 'btn-friday';
  buttonContainer.appendChild(button);
}

makeFridayButton('Sexta-feira');

function sextou(fridayArray) {
  let fridayDays = document.querySelectorAll('.friday');
  let mensagem = 'Sextou!';
  
  document.getElementById('btn-friday').addEventListener('click', function () {
  for (let index = 0; index < fridayDays.length; index += 1) {
    let element = fridayDays[index];
    if (element.innerHTML !== mensagem) {
      element.innerHTML = mensagem;
    } else {
      element.innerHTML = fridayArray[index];
    }
  }  
  })
}

let fridays = [4, 11, 18, 25];
sextou(fridays);

function zoomIn(event) {
  event.target.style.fontSize = '25px';
  event.target.style.fontWeight = '600';
}

function zoomOut(event) {
  event.target.style.fontSize = '';
  event.target.style.fontWeight = '';
}

days.addEventListener('mouseover', zoomIn);
days.addEventListener('mouseout', zoomOut);

function addTask(task) {
  let taskP = document.createElement('span');
  taskP.innerHTML = task;
  taskContainer.appendChild(taskP);
}

addTask('treinar');

function addTaskColor(cor) {
  let taskCor = document.createElement('div');
  taskCor.classList = 'task';
  taskCor.style.backgroundColor = cor;
  taskContainer.appendChild(taskCor);
}

addTaskColor('orange');

function taskSelected() {
  let tasks = document.querySelector('.task');
  let selectedT = document.getElementsByClassName('task selected');

  tasks.addEventListener('click', function(event) {
    if (selectedT.length === 0) {
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

taskSelected();

function colorDays() {
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  let selectedTask = document.getElementsByClassName('task selected');

  days.addEventListener('click', function (event) {
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
}

colorDays();