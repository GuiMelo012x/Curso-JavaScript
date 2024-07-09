/* Adicionando eventos */
const btn = document.querySelector("#my-button");

btn.addEventListener("click", function () {
  console.log("Clicou aqui");
});

/* Removendo eventos */
const secondBtn = document.querySelector("#btn");

function imprimirMensagem() {
  console.log("Mensagem");
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn");

thirdBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

/* Argumento do evento */

const myTitle = document.querySelector("#my-title");

myTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

/* Propagação */

const containerBtn = document.querySelector("#btn-container");
const btnInsideContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInsideContainer.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Evento 2");
});

/* Removendo eventos padrões */
const a = document.querySelector("a");

a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não alterou a página");
});

/* Eventos de Tecla */

document.addEventListener("keyup", (e) => {
  console.log("soltou a tecla " + e.key);
});

document.addEventListener("keydown", (e) => {
  console.log("soltou a tecla " + e.key);
});

/* Outros eventos de mouse */
const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressionou um botão");
});

mouseEvents.addEventListener("mouseup", () => {
  console.log("Soltou um botão");
});

mouseEvents.addEventListener("dblclick", () => {
  console.log("Clique duplo");
});

/* Movimentos do Mouse */
document.addEventListener("mousemove", (e) => {
  // console.log(`No eixo X: ${e.x}`);
  // console.log(`No eixo Y: ${e.y}`);
});

/* Eventos por Scroll */
window.addEventListener("scroll", (e) => {
  if (window.pageYOffset > 20) {
    console.log("Passamos de 2000px");
  }
});

/* Eventos por Foco */
const input = document.querySelector("#my-input");

input.addEventListener("focus", (e) => {
  console.log("Entrou no input");
});

input.addEventListener("blur", (e) => {
  console.log("Saiu do input");
});

/* Evento de carregamento */
window.addEventListener("load", ()=>{
  console.log("A página carregou");
})

/* Debounce */
const debounce = (f, delay) => {
  let timeout;
  return (...arguments) => { 
    if(timeout){
      clearTimeout(timeout);
    }
    timeout = setTimeout(() =>{
      f.apply(arguments);
    },delay);
  }
}

window.addEventListener("mousemove",debounce(() =>{
  console.log("Executando a cada 400ms");
},400))