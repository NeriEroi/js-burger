var burgerName = document.getElementById('sandwich');
var burgerNameOutput = document.getElementById('burgerName');
var food = document.getElementsByClassName('ingredient');
var price = document.getElementById('price');
var coupon = document.getElementById('coupon');
var basePrice = 50;
var sale = 0.9;

var toppingPrice = 0;
var finalPrice = 0;

price.addEventListener('click', priceCalc)

function priceCalc() {
    toppingPrice = 0;

    for (i = 0; i < food.length; i++) {
        if (food[i].checked === true) {
            toppingPrice += parseInt(food[i].value);
        }
    }
    
    finalPrice = basePrice + toppingPrice;
    
    
    if (coupon.value === 'BK10') {
        finalPrice = finalPrice * sale;
    } else if (coupon.value === 'yourCoupon') {
        finalPrice = 0.50; 
    } else if (coupon.value.length > 0) {
        alert('Invalid code!')
    }
    
    if (burgerName.value.length === 0) {
        burgerNameOutput.innerHTML = 'Your Burger';
    } else {
        burgerNameOutput.innerHTML = burgerName.value;
    }

    document.getElementById('result').innerHTML = finalPrice.toFixed(2) + '€';
}
priceCalc();