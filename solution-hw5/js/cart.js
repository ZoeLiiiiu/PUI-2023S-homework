importScripts('rollData.js');
import {chosenProduct, Roll, rolls, chosenGlazing, chosenPackSize} from "js/rollData.js";

// create the cart array
const cart = []

function addToCart(){
    const rollType = chosenProduct
    const basePrice =  rolls[chosenProduct].basePrice
    rollGlazing = chosenGlazing
    packSize = chosenPackSize
    const product = new Roll(rollType, rollGlazing, packSize, basePrice)
    cart.push(product)
    console.log(cart)
}

const defaultCart = {
    'roll1': {
        'type': 'Original',
        'glazing': 'Suger Milk',
        'packSize': '1',
        'basePrice': rolls.Original.basePrice
    },

    'roll2': {
        'type': 'Walnut',
        'glazing':'Vanilla Milk',
        'packSize':'12',
        'basePrice': rolls.Walnut.basePrice
    },

    'roll3':{
        'type': 'Raisin',
        'glazing': 'Sugar Milk',
        'packSize': '3',
        'basePrice': rolls.Raisin.basePrice
    },

    'roll4':{
        'type':'Apple',
        'glazing': 'Original',
        'packSize': '3',
        'basePrice': rolls.Apple.basePrice
    }
    
}

// set up the default cart
for (const [item,information] of Object.entries(defaultCart)){
    rollType = information.type
    rollGlazing = information.glazing
    packSize = information.packSize
    basePrice = information.basePrice
    const product = new Roll(rollType, rollGlazing, packSize, basePrice)
    cart.push(product)
}

function createCartItem(item){
    const template = document.querySelector('#items-to-be-paid-template');
    const clone = template.content.cloneNode(true);
    item.element = clone.querySelector('.items-to-be-paid')
    console.log(item.element)

}

for (const item of cart){
    createCartItem(item)
}

// let the addToCart() function be triggered by clicking on the btnAddtoCart
const btnAddToCart = document.querySelector('.add-to-cart-btn');
btnAddToCart.addEventListener('click', () =>  {addToCart()})