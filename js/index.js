class Product {
  constructor(name, cost, date) {
    this.name = name;
    this.cost = cost;
    this.date = date;
  }
  toString() {
    return `${this.name} - ${this.cost} - ${this.date.toDateString()}`;
  }
}
let products = [
  new Product("Carro", 150, new Date(2010, 5, 10)),
  new Product("Moto", 250, new Date(2015, 7, 12)),
  new Product("Laptop", 17, new Date(2021, 5, 1)),
  new Product("Celular", 500, new Date(2005, 3, 20)),
  new Product("Cama", 200, new Date(2000, 2, 21)),
  new Product("Monitor", 300, new Date(2009, 1, 5)),
  new Product("Cuadro", 15, new Date(2019, 2, 11)),
  new Product("Lapizero", 160, new Date(2020, 4, 25)),
];
function getPropietie(product, proName) {
  if (proName == "cost") {
    return product.cost;
  }
  if (proName == "date") {
    return product.date.getTime();
  }
}
function orderProducts(orderByPropietie = "cost", falling = false) {
  let copy = products.slice();
  for (let i = 0; i < copy.length; i++) {
    for (let j = 0; j < copy.length; j++) {
      if (i != j) {
        let a = copy[j];
        let b = copy[i];
        if (
          getPropietie(copy[i], orderByPropietie) >
          getPropietie(copy[j], orderByPropietie)
        ) {
          let aux = copy[i];
          copy[i] = copy[j];
          copy[j] = aux;
        }
      }
    }
  }
  if (falling) copy.reverse();
  return copy;
}

function printProducts(products) {
  let message = products.map((item) => item.toString()).join("\n");
  alert(message);
}
printProducts(orderProducts("date", false));
