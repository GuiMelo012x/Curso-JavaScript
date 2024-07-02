/* Tipos de Dados e Operadores */
console.log("2");
console.log(typeof(2));
console.log(typeof 2);
console.log(typeof 5.14);
console.log(typeof -40);

/* Operações aritméticas */

console.log(5+2);
console.log(1-5+(5*8)/5);

/* Special Numbers */
console.log(typeof Infinity);
console.log(2* "oi");
console.log(typeof nAn);

/* Strings */
console.log("text 1");
console.log('text 2');
console.log(`text 3`);
console.log(typeof `text 3`);
console.log("Texto em\nDuas linhas");
console.log("Espaçamento de\t TAB")

/* Concatenação */
console.log("Recife " + "-" + " Pernambuco")

/* Interpolação - Template Strings */
console.log(`A soma de 2 + 2 é: ${2+2} e é um cálculo fácil`);

/* Boolean */
console.log(true);
console.log(5>10);
console.log(10 > 2);
console.log (typeof false);

/* Comparações */
console.log(10==10);
console.log(10==9);

/* Comparação de Idêntico */
console.log("Comparação de Idêntico:")
console.log(9 == "9");
console.log(9 === "9"); 

/* Operadores Lógicos na Prática */
console.log("Operadores Lógicos: ")
console.log (5 > 2 && 2 < 10);
console.log(5 > 2 || 2 < 10);

console.log (5 > 2 && 20 < 10);
console.log(5 > 2 || 20 < 10);

console.log(5 > 2 );
console.log(!5 > 2 );

/* Empty Values */
console.log(null == undefined);
console.log(undefined == false);

/* Mudança de dados */
console.log(5*null);
console.log("teste" * 1);
console.log("10" + 1);
console.log("10" - 1);