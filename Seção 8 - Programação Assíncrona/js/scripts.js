/* setTimeout */
console.warn("----- setTimeout -----");
console.log("Ainda não executou 1")
setTimeout(() => {
    console.log("Executou no setTimeout")
}, 2000);
console.log("Ainda não executou 2")



/* setInterval */
console.warn("----- setInterval -----");
console.log("Ainda não executou 1")

setInterval(() => {
    console.log("Executando no setInterval a cada 10000ms")
}, 10000);

console.log("Ainda não executou 2")


/* Promises */
console.warn("----- Promises -----");
const promessa = Promise.resolve( 5 + 5)
console.log("Código 1")

promessa.then(value => {
    console.log("a soma é " + value + " - Promessa executada após o código síncrono" );
    return value; 
})
.then((value) => - 1)
.then((value) => console.log("agora é " + value));


console.log("Código 2")


/* Falha nas Promises */
console.warn("----- Falha nas Promises -----");

Promise.resolve(4 * "asd")
  .then((n) => {
    if (Number.isNaN(n)) {
      throw new Error("Valores inválidos! - Falha nas Promises");
    }
    return n;
  })
   .catch((error) => { console.error(error.message);
  });



/* Rejeitando Promises */
console.warn("----- Rejeitando Promises -----");

function checkNumber(n){
    return new Promise((resolve, reject) => {
        if(n>10){
            resolve(`O número é maior que 10`)
        }else{
            reject(new Error(`Número muito baixo. - Reject`))
        }
    })
}
const a = checkNumber(20);
const b = checkNumber(10);
a.then((v) => console.log`O resultado é ${v}`).catch((err)=> 
    console.log(`Ocorreu um erro ${err}`))



/* Resolvendo Várias Promises */
console.warn("----- Resolvendo Várias Promises -----");
const p1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve(10)
    }, 1000);
});

const p2 = Promise.resolve(10 + 10)
const p3 = new Promise((resolve,reject) =>{
    if(30>10){
        resolve(30)
    }else{
        reject("Erro!")
    }
});

Promise.all([p1,p2,p3]).then((values) => console.log(values));

/* Async functions */
console.warn("----- Async functions -----");
async function somarComDelay (a,b) {
    return a + b;
}

somarComDelay(2,4).then((value) => {
    console.log(`O valor da soma é: ${value}`)
});

console.log("Teste async")


/* Async Await */
console.warn("----- Async Await -----");
function resolveComDelay(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve("Resolveu a Promise!")
        }, 2000);
    });
}

async function chamadaAsync(){
    console.log("Chamando a Promise, e esperando o resultado")
    const result = await resolveComDelay()
    console.log(`O resultado chegou: ${result}`)
}

chamadaAsync();


/* Generators */
console.warn("----- Generators -----");
function* generator(){
    yield 1;
    yield 2;
    yield 2;
    yield 2;
    yield 2;
    yield 2;
    yield 2;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
