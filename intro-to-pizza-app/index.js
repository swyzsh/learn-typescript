"use strict";
let nextPizzaId = 1;
let cashInRegister = 100;
let nextOrderId = 1;
const menu = [
    { id: nextPizzaId++, name: "Margherita", price: 8 },
    { id: nextPizzaId++, name: "Pepperoni", price: 10 },
    { id: nextPizzaId++, name: "Hawaiian", price: 10 },
    { id: nextPizzaId++, name: "Veggie", price: 9 },
];
const orderQueue = [];
function addNewPizza(newPizza) {
    let pizza = { id: nextPizzaId++, ...newPizza };
    menu.push(pizza);
    return pizza;
}
function placeOrder(pizzaName) {
    const pizza = menu.find(item => item.name === pizzaName);
    if (!pizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += pizza.price;
    const newOrderObj = {
        id: nextOrderId++,
        pizza: pizzaName,
        status: "ordered"
    };
    orderQueue.push(newOrderObj);
    return newOrderObj;
}
function completeOrder(orderId) {
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
function getPizzaDetail(identifier) {
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
