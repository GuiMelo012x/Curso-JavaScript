const arrowSum = (a, b) => a + b;
console.log(arrowSum(5, 5));

const greeting = (name) => {
  if (name) {
    console.log("olá " + name);
  } else {
    console.log("nha");
  }
};

console.log(greeting());
console.log(greeting("Gui"));

const arr = [1, 2, 3, 4, 5];
const highNumber = arr.filter((n) => {
  if (n >= 3) {
    return n;
  }
});

console.log(highNumber);

const users = [
  { name: "User 1", available: true },
  { name: "User 2", available: false },
  { name: "User 3", available: true },
  { name: "User 4", available: false },
  { name: "User 5", available: true },
  { name: "User 6", available: false },
];

const availableUsers = users.filter((user) => user.available);

console.log(availableUsers);

const products = [
  { name: "Camisa", price: 10.99, category: "Roupas" },
  { name: "Chaleira", price: 149.99, category: "Eletro" },
  { name: "Fogão", price: 300.99, category: "Eletro" },
  { name: "Calça", price: 50.99, category: "Roupas" },
  { name: "Micro", price: 120.99, category: "Eletro" },
];

products.map((products) => {
  if (products.category === "Roupas") {
    products.onSale = true;
  }
});

console.log(products);

let a = 4;
let name = "Rosane";
console.log(`O valor de a é ${a} e a string é ${name}`);

const fruits = ["Maçã", "Mamão", "Laranja"];

const [f1, f2, f3] = fruits;

console.log(f1, f3);

const productDetails = {
  name: "Mouse",
  price: 30,
  category: "Periferico",
  color: "cinza",
};

const { name: productName, price, category, color } = productDetails;

console.log(`O nome do produto é ${productName} e ele custa R$${price}`);

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = [...a1, ...a2];

console.log(a3);

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  discount(discount) {
    return this.price * ((100 - discount) / 100);
  }
}

const shirt = new Product("Camisa", 100); // Camisa de 100 reais
console.log(shirt);
console.log(shirt.discount(20)); // Camisa com 20% de desconto = 80 reais.

class ProductWithAttributes extends Product {
  constructor(name, price, colors) {
    super(name, price);
    this.colors = colors;
  }

  showColors() {
    console.log("As cores são:");
    this.colors.forEach((color) => {
        console.log(color);
    });
  }
}

const hat = new ProductWithAttributes("Chapéu", 15,["Preto","Branco"]);

hat.showColors();

console.log(hat);
console.log(hat.colors);
console.log(hat.name);
