let paragrafos = document.getElementsByTagName("p");
let paragrafo1 = document.getElementsByTagName("p")[0];
paragrafo1.innerHTML = paragrafo1.innerHTML.toUpperCase();
paragrafos[1].innerText = 'Crescendo na minha carreira em tecnologia!';

let quadradosLaterais = document.getElementsByClassName("main-content");
quadradosLaterais[0].style.backgroundColor = 'rgb(76,164,109)';

let centro = document.getElementsByClassName("center-content");
centro[0].style.backgroundColor = 'white';

let titulo = document.getElementById("titulo");
titulo.innerText = 'Exercício 5.1 - JavaScript';

for (let index in paragrafos) {
  console.log(paragrafos[index].innerHTML);
}

