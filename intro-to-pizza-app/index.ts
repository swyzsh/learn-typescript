let nextPizzaId: number = 1;
let cashInRegister: number= 100;
let nextOrderId: number = 1;

type Menu = {
  id: number,
  name: string,
  price: number
}

const menu: Menu[] = [
  { id: nextPizzaId++, name: "Margherita", price: 8 },
  { id: nextPizzaId++, name: "Pepperoni", price: 10 },
  { id: nextPizzaId++, name: "Hawaiian", price: 10 },
  { id: nextPizzaId++, name: "Veggie", price: 9 },
];

type Order = {
  id: number,
  pizza: string,
  status: "ordered" | "completed" 
}

const orderQueue: Order[] = []

function addNewPizza(newPizza: Omit<Menu, "id">): Menu {
  let pizza: Menu = { id: nextPizzaId++, ...newPizza };
  menu.push(pizza);
  return pizza;
}

function placeOrder(pizzaName: string): Order | undefined {
  const pizza = menu.find(item => item.name === pizzaName);

  if (!pizza) {
    console.error(`${pizzaName} does not exist in the menu`);
    return;
  }

  cashInRegister += pizza.price;
  const newOrderObj: Order = {
    id: nextOrderId++,
    pizza: pizzaName,
    status: "ordered" 
  };
  orderQueue.push(newOrderObj);
  return newOrderObj;
} 

function completeOrder(orderId: number): Order | undefined {
  if (orderQueue.length < 1) {
    console.error(`The order queue is empty`);
    return;
  }

  const order = orderQueue.find(item => item.id === orderId);
  if (!order) {
    console.error(`Order with ${orderId} not found`);
    return;
  }

  order.status = "completed";
  return order;
}

function getPizzaDetail(identifier: string | number): Menu | undefined {
  if (typeof identifier === "string") {
    return menu.find(item => item.name.toLowerCase() === identifier.toLowerCase());  
  } 
  
  if (typeof identifier === "number") {
    return menu.find(item => item.id === identifier);
  }

  throw new TypeError("Parameter `identifier` must be a string or number.");
}

addNewPizza({ name: "BBQ Chicken", price: 15 });
console.log(menu);
console.log('Current Orders: ', orderQueue);
console.log('Cash: ', cashInRegister);
placeOrder('Margherita');
placeOrder('Veggie');
completeOrder(2);
console.log('Current Orders: ', orderQueue);
console.log('Cash: ', cashInRegister);
console.log(getPizzaDetail(2));
console.log(getPizzaDetail("Veggie"));