const menu = [
  { name: "Margherita", price: 8 },
  { name: "Pepperoni", price: 10 },
  { name: "Hawaiian", price: 10 },
  { name: "Veggie", price: 9 },
];

const cashInRegister = 100;
const orderQueue = []

function addNewPizza(pizzaObj) {
  menu.push(pizzaObj);
}

/**
 * Write another utility function, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue,
 *    (eg. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just incase we need it later)
 */