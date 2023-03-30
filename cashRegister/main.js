function checkCashRegister(price, cash, cid) {
    const currencyValues = {
      'PENNY': 0.01,
      'NICKEL': 0.05,
      'DIME': 0.1,
      'QUARTER': 0.25,
      'ONE': 1,
      'FIVE': 5,
      'TEN': 10,
      'TWENTY': 20,
      'ONE HUNDRED': 100
    };
  
    let changeDue = cash - price;
    let totalCid = cid.reduce((total, curr) => total + curr[1], 0);
    let changeArr = [];
  
    if (changeDue > totalCid) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    } else if (changeDue.toFixed(2) === totalCid.toFixed(2)) {
      return {status: "CLOSED", change: cid};
    } else {
      cid = cid.reverse();
  
      for (let i = 0; i < cid.length; i++) {
        let currName = cid[i][0];
        let currTotal = cid[i][1];
        let currValue = currencyValues[currName];
        let currAmount = currTotal / currValue;
        let amountToReturn = 0;
  
        while (changeDue >= currValue && currAmount > 0) {
          amountToReturn += currValue;
          changeDue -= currValue;
          currAmount--;
          changeDue = Math.round(changeDue * 100) / 100;
        }
  
        if (amountToReturn > 0) {
          changeArr.push([currName, amountToReturn]);
        }
      }
    }
  
    if (changeDue > 0) {
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
  
    return {status: "OPEN", change: changeArr};
}
  
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);