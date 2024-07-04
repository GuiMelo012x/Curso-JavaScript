/* Arrays */
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