console.error("----- Métodos em String -----");
/* String */
console.warn("----- Trim -----");
const testeTrim= "         testando \n  ";
console.log(testeTrim);
console.log(testeTrim.trim());

/* Padstart */
console.warn("----- Padstart -----");

const testePadstart = "1";

const newNumber = testePadstart.padStart(4,"0");

console.log(newNumber);

const newNumber2 = testePadstart.padEnd(4,"0");

console.log(newNumber2);

/* Split */
console.warn("----- Split -----");
const testeSplit = "O rato roeu a roupa do rei de Roma"
const arraySplit = testeSplit.split(" ");

console.log(arraySplit); 

/* Join */
console.warn("----- Join -----");
const arrayJoin = arraySplit.join("-");
console.log(arrayJoin);

frutas = ["Banana","Maçã","Morango","Cereja","Melancia"];

const fraseDeCompra = `Precisamos comprar estas frutas: ${frutas.join(", ")}.`

console.log(fraseDeCompra);


/* Repeat */
console.warn("----- Repeat -----");
const palavra = "Testando "

console.log(palavra.repeat(5));




