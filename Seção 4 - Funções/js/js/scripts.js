/* Criando uma função */
function minhaFuncao(){
    console.log("testando")   
}
minhaFuncao();
const minhaFuncaoEmVariavel = function(){
    console.log("Função em variável")
}

minhaFuncaoEmVariavel();

function comParametro(txt){
    console.log(`Imprimindo ${txt}`)
}

comParametro("Oiiii");

/* Return */
const a = 10;
const b = 20;
const c = 30;
const d = 40;

function soma(n1,n2){
    return n1 + n2;
}

const resultado = soma(a,b);
console.log(resultado);
console.log(soma(c,d));

/* Escopo */
let e = 20
function testandoEscopo(){
    let e = 30;
    console.log(`E dentro da função é ${e}`);
}

testandoEscopo();
console.log(`E fora da função é ${e}`);

/* Escopo aninhado */
let f = 10;
function escopoAninhado(){
    let f = 20;
    if(true){
        let f = 50;
        console.log(f);
        if(true){
            let f = 60;
            console.log(f);
        }
    }
    console.log(f);
}

escopoAninhado();
console.log(f);

/* Arrow Function */
const testeArrow = () => {
    console.log("Esta é uma arrow function")
}

testeArrow();

const parOuImpar = (n) => {
    if(n%2 === 0){
        console.log("Par");
        return;
    }
    console.log("Ímpar");
}

parOuImpar(1);
parOuImpar(2);

const raizQuadrada = (x) =>{ // Forma padrão.
    return x*x;
}

console.log(raizQuadrada(3))

const raizQuadrada2 = (x) => x*x; // Forma facilitada.

console.log(raizQuadrada2(4));

/* Parâmetro opcional */
const multiplication = function(g,h){
    if (h === undefined){
        return g * 2 
    }else{
        return g*h
    }
}

console.log(multiplication(4,3))
console.log(multiplication(3))

const greeting = (name) =>{
    if(!name){
        return console.log("Insira o nome");
    }
    return console.log(`Olá ${name}`)
    
}

greeting("Benedito ")
greeting()

/* Valor default */
const customGreeting = (name,greet = "Olá") =>{
    return `${greet},${name}!`
}

console.log(customGreeting("Bryan"));
console.log(customGreeting("Claudia","Bom dia"))

const repeatText = (text,repeat = 2) => {
    for (let i = 0; i< repeat; i++){
        console.log(text);
    }
}

repeatText("Loop");
repeatText("Loop",2);

/* Closure */

function someFuncion(){
    let txt = "Alguma coisa"

    function display(){
        console.log(txt);
    }
    display();
}

someFuncion();

const multiplicationClosure = (n) =>{
    return (m) =>{
        return n*m;
    }
}

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);

console.log(c1)
console.log(c2)
console.log(c1(5))
console.log(c2(10))

/* Recursão */

const untilTen = (n,m) =>{
    if(n < 10 ){
        console.log("A função parou de executar.");
    }else{
        const x = n - m;
        console.log(x);

        untilTen(x,m);
    }
}

untilTen(100,10);

function factorial(x){
    if (x===0){
        return 1
    }else{
        return x * factorial (x-1); // Função se autoinvocando
    }
}

const num = 5;
const result = factorial (num)

console.log(`O fatorial do número ${num} é ${result}`);