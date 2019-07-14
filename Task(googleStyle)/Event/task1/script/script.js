/**
 * @author Nataliia Skrebets 
 */
let price_drink = document.getElementById("price_drink");
let amont_drink = document.getElementById("amont_drink");

price_drink.addEventListener("input", countPrice);
amont_drink.addEventListener("input", countPrice);


let price_bread = document.getElementById("price_bread");
let amont_bread = document.getElementById("amont_bread");

price_bread.addEventListener("input", countPrice);
amont_bread.addEventListener("input", countPrice);

let price_fruit = document.getElementById("price_fruit");
let amont_fruit = document.getElementById("amont_fruit");

price_fruit.addEventListener("input", countPrice);
amont_fruit.addEventListener("input", countPrice);

let total = document.getElementById("total");

function countPrice() {
    let drink_price = parseFloat(price_drink.value) || 0;
    let drink_amont = parseFloat(amont_drink.value) || 0;
    let bread_price = parseFloat(price_bread.value) || 0;
    let bread_amont = parseFloat(amont_bread.value) || 0;
    let fruit_price = parseFloat(price_fruit.value) || 0;
    let fruit_amont = parseFloat(amont_fruit.value) || 0;
    let sum = drink_price * drink_amont + bread_price * bread_amont + fruit_amont * fruit_price;
    total.innerHTML = "Total:" + sum;

}