'use strict'
var burgerBtn = $('#burger-add');
var pizzaBtn = $('#pizza-add');
var ribsBtn = $('#ribs-add');
var iceCreamBtn = $('#ice-cream-add');
var subtotal = 0.00;
var tax = 0.00;
var finalTotal = 0.00
var cartTbl = $('#cart-table');

burgerBtn.on('click', function() {
    subtotal += 8.99;
    tax += (8.99 * 0.0875);
    finalTotal = tax + subtotal;
    $('#final-total').html(Math.floor(finalTotal * 100) / 100);
    if ($('#final-total').html().split('.')[1].length === 1) {
        $('#final-total').html($('#final-total').html() + '0')
    };
    $('#cart-total').html(Math.floor(subtotal * 100) / 100);
    if ($('#cart-total').html().split('.')[1].length === 1) {
        $('#cart-total').html($('#cart-total').html() + '0')
    };
    $('#tax').html(Math.floor(tax * 100) / 100);
    if ($('#tax').html().split('.')[1].length === 1) {
        $('#tax').html($('#tax').html() + '0')
    };
    cartTbl.append('<tr><td> Cheesy Royale </td> <td> $8.99</td></tr>')
});

pizzaBtn.on('click', function() {
    subtotal += 11.99;
    tax += (11.99 * 0.0875);
    finalTotal = tax + subtotal;
    $('#final-total').html(Math.floor(finalTotal * 100) / 100);
    if ($('#final-total').html().split('.')[1].length === 1) {
        $('#final-total').html($('#final-total').html() + '0')
    };
    $('#cart-total').html(Math.floor(subtotal * 100) / 100);
    if ($('#cart-total').html().split('.')[1].length === 1) {
        $('#cart-total').html($('#cart-total').html() + '0')
    };
    $('#tax').html(Math.floor(tax * 100) / 100);
    if ($('#tax').html().split('.')[1].length === 1) {
        $('#tax').html($('#tax').html() + '0')
    };
    cartTbl.append('<tr><td> Arugula Pie </td> <td> $11.99</td></tr>')
});

ribsBtn.on('click', function() {
    subtotal += 40.00;
    tax += (40.00 * 0.0875);
    finalTotal = tax + subtotal;
    $('#final-total').html(Math.floor(finalTotal * 100) / 100);
    if ($('#final-total').html().split('.')[1].length === 1) {
        $('#final-total').html($('#final-total').html() + '0')
    };
    $('#cart-total').html(Math.floor(subtotal * 100) / 100);
    if ($('#cart-total').html().split('.')[1].length === 1) {
        $('#cart-total').html($('#cart-total').html() + '0')
    };
    $('#tax').html(Math.floor(tax * 100) / 100);
    if ($('#tax').html().split('.')[1].length === 1) {
        $('#tax').html($('#tax').html() + '0')
    };
    cartTbl.append('<tr><td> Smoked Swine </td> <td> $40.00</td></tr>')
});

iceCreamBtn.on('click', function() {
    subtotal += 6.99;
    tax += (6.99 * 0.0875);
    finalTotal = tax + subtotal;
    $('#final-total').html(Math.floor(finalTotal * 100) / 100);
    if ($('#final-total').html().split('.')[1].length === 1) {
        $('#final-total').html($('#final-total').html() + '0')
    };
    $('#cart-total').html(Math.floor(subtotal * 100) / 100);
    if ($('#cart-total').html().split('.')[1].length === 1) {
        $('#cart-total').html($('#cart-total').html() + '0')
    };
    $('#tax').html(Math.floor(tax * 100) / 100);
    if ($('#tax').html().split('.')[1].length === 1) {
        $('#tax').html($('#tax').html() + '0')
    };
    cartTbl.append('<tr><td> Creamy Ice </td> <td> $6.99</td></tr>')
});
