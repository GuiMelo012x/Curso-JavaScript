/* Arrays */
console.warn("----- Arrays, Propriedades e Métodos -----")

const lista = [1,2,3,4,5];
const lista2 = [1,"2","oi",true,5];


console.log(lista);
console.log(lista2);
console.log(lista2[4]);

/* Propriedades */
const numbers = [3,4,5];
console.log(numbers.length)
console.log(numbers[2])

const myName = "Rosangela"

/* Métodos */
const otherNumbers = [1,2,3];
const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers);

const text ="Algum texto"
console.log(text.toLowerCase(text))

/* Objetos */
const person = {
    name: "Edna ",
    age: 35,
    job: "Programadora"
}

console.log(person)
console.log(person.name)
console.log(person.name.length)

/* Criando e deletando propriedades */
const dog = {
    name: "Amancio",
    age: 5,
    breed: "Maltês",
}
console.log(dog);

dog.color = "white";
console.log(dog);

delete dog.age
console.log(dog);

/* Array de objetos */
console.warn("----- Array de Objetos -----")

const cat = {
    name: "Texeira",
    age: 5,
    breed: "Laranja",
}
const bixin = [dog,cat];
console.log(bixin)

/* Mais sobre objetos */
const obj ={
    a: "teste",
    b: true,
}

console.log(obj);

const obj2= {
    c:[]
}

Object.assign(obj2,obj);

console.log(obj2)

/* Conhecendo melhor os objetos */
console.log(Object.keys(dog));
console.log(Object.keys(cat));

console.log(Object.entries(dog))
console.log(Object.entries(cat))

/* Mutação */
console.warn("----- Mutação -----")

const a = {
    name:"Cleonice "
}

const b = a;

a.age = 23;
console.log(a)
console.log(b)

delete b.age;

console.log(a)
console.log(b)

/* Loop em array */
console.warn("----- Loop em Arrays -----")


const nomes = ["Riselda","Maiara","Silezia","Dionísio"]

for (let i = 0; i < nomes.length; i++) {
    console.log(`Listando o usuário: ${nomes[i]}`);
}

/* Push e Pop */
console.warn("----- Push e Pop -----")

nomes.push("Emanuelle");
nomes.push("George");
nomes.push("Helenice","Sandreli","Ozorio")
console.log(nomes);

const itemRemovido = nomes.pop();
console.log(itemRemovido);
console.log(nomes);

/* Shift e Unshift */
console.warn("----- Shift e Unshift -----")


nomes.shift();
console.log(nomes);

nomes.unshift("Munique");
nomes.unshift("Alzira","Gutemberg","Pablo");
console.log(nomes);

/* IndexOf e lastIndexOf */
// 'Alzira', 'Gutemberg', 'Pablo', 'Munique', --> Munique em [3] 
// 'Maiara', 'Silezia', 'Dionísio', 'Emanuelle', 
// 'George', 'Helenice', 'Sandreli','Dionísio'] --> Dionísio se repete

nomes.push("Dionísio");
console.log(nomes)
console.log("indexOf de Munique: " + nomes.indexOf("Munique"));
console.log("lastIndexOf de Dionísio, que se repete: " + nomes.lastIndexOf("Dionísio"));
console.log(nomes.indexOf("inexistente"));

/* Slice */
console.warn("----- Slice -----");
const frutas = ["Banana","Morango","Abacaxi","Maçã","Cereja","Melancia"];
console.log(frutas);

const subFrutas = frutas.slice(2,5); // Pega os valores entre [2] e [5], excluindo o [5]. Se quiser o [5], é necessário alterar para 6
console.log(subFrutas);



console.warn("----- Foreach -----");
frutas.forEach((numero) => {
    console.log(`A fruta é ${numero}`)
})

console.warn("----- Includes -----");
console.log(frutas.includes("Maçã")) // true
console.log(frutas.includes("maçã")) // false 
console.log(frutas.includes("Uva")) // false


console.warn("----- Reverse -----");

const numberArray = [1,2,3,4,5];
console.log("Array normal - " + numberArray);

numberArray.reverse();
console.log("Array reverso - " + numberArray);

/* Rest Operator */
console.warn("----- Rest Operator -----");
const somaInfinita = (...args) =>{
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];

    }
    return total;
}
console.log(somaInfinita(1,2,3))
console.log(somaInfinita(1,2,3,5,6,7,21,5));


/* For Of */
console.warn("----- For Of -----");
const somaInfinita2 = (...args) => {
    let total = 0

    for(num of args){
        total+= num
    }
    return total;
}

console.log(somaInfinita2(1,2,3))
console.log(somaInfinita2(1,2,3,5,6,7,21,5));



/* Destructuring em Objetos */
console.warn("----- Destructuring em Objetos -----");

const userDetails = {
    firstName: "Jane",
    lastName: "Amorim",
    job: "Programadora",
}

const {firstName, lastName, job} = userDetails;

console.log(firstName, lastName, job);

const{firstName: primeiroNome} = userDetails;
console.log(primeiroNome);




/* Destructuring em Arrays */
console.warn("----- Destructuring em Arrays -----");
const myList = ["Avião", "Submarino", "Carro"];

const[veiculoA, veiculoB, veiculoC] = myList;
console.log(veiculoA, veiculoB, veiculoC);

/* JSON */
console.warn("----- JSON -----");

const myJSON ='{"name": "Cristiano", "age": 68,"skills": ["PHP","Python","Java"]}'

/* JSON para Objeto */

const myObject = JSON.parse(myJSON);
console.log(myObject)



/* JSON Invalido */

const badJSON = '{"name": Sidney, "age": 37}'

// const myBadObject = JSON.parse(badJSON); --> o back-end teria que corrigir.

myObject.isOpenToWork = true;
console.log(myObject);

/* Objeto para JSON */

const myNewJSON = JSON.stringify(myObject);

console.log(myNewJSON);
