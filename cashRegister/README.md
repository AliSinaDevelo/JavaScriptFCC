Cash Register

This is a JavaScript program that simulates a cash register. Given the purchase price and cash provided by a customer, the program calculates the change to be given back to the customer in terms of bills and coins. The program assumes that the cash register has a finite amount of bills and coins, and it tries to give back the optimal amount of change using the available denominations.

The program is implemented in the checkCashRegister function, which takes three arguments:

    price: the purchase price
    cash: the cash provided by the customer
    cid: an array of arrays representing the cash in the drawer. Each sub-array has two elements: the name of the denomination and the amount of cash in that denomination.

The checkCashRegister function returns an object with two properties:

    status: a string that represents the status of the cash register after the transaction. The possible values are:
        "OPEN": there is enough cash in the drawer to give the customer back the correct change.
        "INSUFFICIENT_FUNDS": there is not enough cash in the drawer to give the customer back the correct change.
        "CLOSED": there is exactly enough cash in the drawer to give the customer back the correct change. In this case, the function also returns the entire content of the drawer as change.
    change: an array of arrays representing the change to be given back to the customer. Each sub-array has two elements: the name of the denomination and the amount of cash in that denomination.

The program uses an object called currencyValues to define the value of each denomination of currency. It also uses a helper function called roundToTwoDecimalPlaces to avoid floating point arithmetic issues when dealing with currency.

Example Usage



    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
    // returns {status: "OPEN", change: [["QUARTER", 0.5]]}

In this example, the customer pays $20 for a purchase that costs $19.50. The program calculates that the correct change is $0.50, and it gives the customer one quarter.
Installation

This program does not require any installation. You can simply copy the checkCashRegister function into your JavaScript code and call it with the appropriate arguments.
License

This program is licensed under the MIT License. See the LICENSE file for details.