/* Métodos */
console.warn("----- Métodos -----");
const animal = {
    nome:"Eva",
    latir:  function(){
        console.log("au au");
    }
}
console.log(animal.nome)

animal.latir();

/* Aprofundando em Métodos */
console.warn("----- Aprofundando em Métodos -----");
const pessoa = {
    name : "Luiz",
    getName: function(){
        return this.name;
    },
    setName: function(newName){
        this.name = newName;
    }
}

console.log(pessoa.getName());
pessoa.setName("Sergio");
console.log(pessoa.getName());

/* Prototype */
console.warn("----- Prototype -----");
const text = "qualquer texto";
console.log(Object.getPrototypeOf(text))

const myObject={
    a: "b"
}

const mySecondObject = Object.create(myObject);


console.log("Primeiro Object - " + myObject.a)
console.log("Segundo Object - " + mySecondObject.a)


/* Classes Básicas */
console.warn("----- Classes Básicas -----");

const dog = {
    raca: null,
}

const maltes= Object.create(dog);

maltes.raca = "Maltês";
console.log(maltes.raca);

const bulldog = Object.create(dog);
bulldog.raca = "Bulldog";

console.log(bulldog.raca);




/* Função Construtora */
console.warn("----- Função Construtora -----");
function criarCachorro(nome,idade){
    const cachorro = Object.create({});
    cachorro.nome = nome;
    cachorro.idade = idade;
    return cachorro;
}

const knupp = criarCachorro("Knupp",9);
console.log(knupp)


/* Função Construtora 2 */
console.warn("----- Função Construtora 2 -----");
function Cachorro(nome,raca){
    this.nome = nome;
    this.raca = raca;
}

const husky = new Cachorro("Neves","Husky");

console.log(husky);



/* Métodos na Função Construtora */
console.warn("----- Métodos na Função Construtora -----");
Cachorro.prototype.latir = function(){
    console.log("au au au - método latir")
}

husky.latir();

/* Classes ES6 */
console.warn("----- Classes ES6 -----");
class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome;
        this.raca = raca;
    }
}

const bocafoli = new CachorroClasse("Bocafoli", "Shih-Tzu");
console.log(bocafoli);


/* Mais sobre Classes */
console.warn("----- Mais sobre Classes -----");
class Estado{
    constructor(estado,cidade){
        this.estado = estado;
        this.cidade = cidade;
    }
    descreverLocal(){
        console.log(`${this.cidade} fica no estado de ${this.estado}`)
    }
}

const local = new Estado("Ceará", "Juazeiro do Norte");

local.descreverLocal();



/* Override  */
console.warn("----- Override -----");
class Humano {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const diogo = new Humano("Diogo", "76");

console.log(diogo);
Humano.prototype.idade = "Não definida";
console.log(diogo.idade)


/* Symbol */
console.warn("----- Symbol -----");
class Aviao{
    constructor(marca,turbina){
        this.marca = marca;
        this.turbina = turbina;
    }
}
const asas = Symbol();
const pilotos = Symbol();
Aviao.prototype[asas] = 2; // Asas sempre será 2.
Aviao.prototype[pilotos] = 3; // Haverão sempre 3 pilotos.
const boeing = new Aviao("Boeing",10) // Boeing , 10 turbinas.
console.log(boeing);

console.log(boeing[asas]) // para acessar o "asas"
console.log(boeing[pilotos]) // para acessar o "pilotos"


/* Getters e Setters */
console.warn("----- Getters e Setters -----");

class Post{
    constructor(titulo,descricao,tags){
        this.titulo = titulo;
        this.descricao = descricao;
        this.tags = tags;
    }

    get exibirTitulo(){
        return `Você está lendo ${this.titulo}`
    }
    set adicionarTags(tags){
        const tagsArrays = tags.split(", ");
        this.tags = tagsArrays;
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");
console.log(myPost.exibirTitulo) // getter

myPost.adicionarTags = "progracao, javascript, js"; // setter

console.log(myPost);

/* Herança */
console.warn("----- Herança -----");
class Peixes{
    constructor(branquias){
        this.branquias = branquias;
    }
}

class Salmao extends Peixes{
    constructor(branquias,nome){
        super(branquias,branquias);
        this.nome = nome;
    }
}

const marlin = new Salmao(2,"Marlin");
console.log(marlin);


/* Operador instanceof  */
console.warn("----- Operador instanceof -----");
console.log(marlin instanceof Peixes); // true 
console.log(marlin instanceof Salmao); // true
console.log(Salmao instanceof Peixes); // false
