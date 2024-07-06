/* Strict Mode */
"use strict";

/* Debug com console.log */
console.warn("----- Debug com console.log -----");
let a = 1;
let b = 2;

if(a==1){
    a = b + 2;
}
console.log(a); 


for (let i = 0; i < b; i++) {
    a = a + 2;
    console.log(a); 
}

if (a > 5){
    a = 25;
}

console.log(a); 

/* Debugger */
console.warn("----- Debugger -----");

let c = 1;
let d = 2;
if(c == 1){
    c = d+2;
}
// debugger;

for (let i = 0; i < d; i++) {
    c = c + 2;
    console.log(c); 
}

console.log("Loop")
// debugger;

/* Tratamento de dado por funçao */
console.warn("----- Tratamento de dado por funçao -----");

function checkNumber(n){
    const result = Number(n);

    if(Number.isNaN(result)){
        console.log("Valor incorreto!");
        return;
    }
    console.log("Valor correto!");
    return result;
}

checkNumber(5);
checkNumber("10");
checkNumber({});
checkNumber("Teste");


/* Exceptions */
console.warn("----- Exceptions -----");
let x = 10;
if (x != 11){
    // throw new Error ("O valor de X não pode ser diferente de 11")
}

/* Try Catch */
console.warn("----- Try Catch -----");
try{
    const soma = x + y ;
} catch(error){ // E, e, rr, error são comuns como nome de parâmetros para o erro
    console.log(`Erro no programa: ${error}`)
}


/* Finally */
console.warn("----- Finally -----");
try{
    const value = checkNumber("vai dar erro")
    
    if(!value){
        throw new Error("Valores Inválido!")
    }

}catch(error){
    console.log("Algum problema aconteceu.")
}finally{
    console.log("Código executado.")
}


/* Assertions */
console.warn("----- Assertions -----");
function checkArray(arr){
    if(arr.length === 0 ){
        throw new Error("O array precisa ter elementos")
    }else{
        console.log(`O array tem ${arr.length} elementos.`)
    }
}

checkArray([5]);
// checkArray([]);
