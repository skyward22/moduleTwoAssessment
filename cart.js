///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

const summedPrice = cart.reduce((acc, ord) => {
    return acc + ord.price
}, 0)
console.log(summedPrice)

// const summedPrice  = cart.reduce(price(a, c))
//     return a + c

// const summedPrice = finalPrice(cart)

// const summedPrice = cart.reduce((previousValue, currentValue) => previousValue + currentValue);

// const finalPrice = cart.reduce(totalPrice)


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return (cartTotal * (1 + tax)) - couponValue
}
console.log(calcFinalPrice(10, 2, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
  appetizer - everybody needs to start their stomach right.
  entree - you'll need a big meat meal.
  dessert - a nice light dessert to go with a meaty meal. 
  drink - the most classic thing to wash the food down. 

// name string
// address string
// phone number string
// notes string
// allergeis array
// hasCreditCard boolean
// regularCustomer boolean
// discount array

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const customer = {
    name: 'Skyler',
    address: 'somewhere',
    phoneNumber: '78893489',
    notes: 'super cool person'
}