/* Salvando Valores na Memória - Variáveis */
let nome = "Guilherme";
console.log(nome);

let a = 20, b =2, c = 4;
console.log(a,b,c);

/* Funções */
console.log("Prompt: ");
// const age = prompt("Digite a sua idade");
// console.log(`Você tem ${age} anos`);

console.log("Alert: ");
// alert("Teste");
// const z = 4;
// alert(`o número é ${z}`);

console.log("Math: ");
console.log(Math.max(2,5,6,1,0,4,10));
console.log(Math.floor(4.4));
console.log(Math.ceil(4.4));

console.log("Console: ");
console.error("ERRO!!!")
console.warn("Aviso!")

/* If */
const d = 10;
if (d > 5){
    console.log("D é maior que 5")
}

let user = "Joao"
if(user === "Joao"){
    console.log("O user é João");
}

user = "Maria"
if(user !== "Joao"){
    console.log("O user não é João");
}

/* Else */

const loggedIn = false

if(loggedIn){
    console.log("Está ligado")
} else{
    console.log("Não está autenticado")
}

nome = "Joao";
if(nome === "Joao"){
    console.log("O nome do usuário é João")
}else{
    console.log("O nome do usuário não é João")
}

/* Else If */
if(1>2){
    console.log("Teste")
}else if(2>3){
    console.log("Teste 2")
}else if(5 > 1){
    console.log("Agora sim");
}

/* While */
let i = 0;

while( i < 5){
    console.log(`Loop ${i + 1} com While`);
    i++;
}


/* Do While */
let e = 5;
do{
    console.log(`Valor de o: ${e} com Do While`)
    e--
}while(e > 1);

/* For */
for(let f = 0; f<5;f++){
    console.log(`Loop ${f+1} de T com For`)
}

let g = 5
for(g; g > 0; g--){
    console.log(`O r está diminuindo: ${g}`)
}

/* Break */
for(let h = 20; h > 10; h-- ){
    console.log(`O valor de h é: ${h}`)
    
    if(h === 12){
        console.log("O h é 12 e deu Break!");
        break;
    }
}

/* Continue */
for(let l = 1; l < 10;l++){
    if(l % 2 === 0 ){
        console.log("Número par!");
        continue;
    }
    console.log(l);
}

/* Switch */

const job = "Programador"
switch(job){
    case "Programador":
        console.log("Você é um programador!");
        break
    case "Engenheiro":
        console.log("Você é um Engenheiro!");
        break
    case "Advogado":
        console.log("Você é um Advogado!");
        break
    default:
        console.log("Profissão não encontrada.")
}