/* Movendo-se pelo DOM */
console.warn("----- Movendo-se pelo DOM -----");
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

/* Selecionando por Tag */
console.warn("----- Selecionando por Tag -----");
const listItens = document.getElementsByTagName("li");
console.log(listItens);

/* Selecionando por Id */
console.warn("----- Selecionando por Id -----");
const title = document.getElementById("title");
console.log(title);

/* Selecionando por Classe */
console.warn("----- Selecionando por Classe -----");
const products = document.getElementsByClassName("product");
console.log(products);

/* Selecionando por CSS */
console.warn("----- Selecionando por CSS -----");
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);

const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

/* insertBefore */
console.warn("----- insertBefore -----");
const p = document.createElement("p");
console.log(p);

const header = title.parentElement;
console.log(header);

header.insertBefore(p, title);

/* appendChild */
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");

navLinks.appendChild(li);

/* replaceChild */
const h2 = document.createElement("h2");

h2.textContent = "Título H2";

header.replaceChild(h2, title);

/* createTextNode */
console.warn("----- createTextNode -----");
const myText = document.createTextNode("Agora vamos colocar mais um título");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);
console.log(h3);
mainContainer.appendChild(h3);

/* getAttribute e setAttribute */
console.warn("----- getAttribute e setAttribute -----");
const firstLink = navLinks.querySelector("a"); // a pois quero ir atrás do primeiro link do site.

console.log(firstLink);

firstLink.setAttribute("href","https://www.google.com");

console.log(firstLink.getAttribute("href"));
firstLink.setAttribute("target","_blank");

/* Altura e Largura */
console.warn("----- Altura e Largura -----");
const footer = document.querySelector("footer");

console.log(footer.offsetWidth); 
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

/* getClientBoundingRect */
console.warn("----- getClientBoundingRect -----");
const product1 = products[0];
console.log(product1.getBoundingClientRect());

/* CSS com JS */
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

/* Alterando estilos com HTML Collection */
for (const li of listItens) {
    li.style.backgroundColor = "red";
}