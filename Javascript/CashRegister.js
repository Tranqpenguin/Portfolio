function checkCashRegister(price, cash, cid) {
    // Define currency units and their values (in dollars)
    const currencyUnit = [
        ["PENNY", 0.01],
        ["NICKEL", 0.05],
        ["DIME", 0.1],
        ["QUARTER", 0.25],
        ["ONE", 1],
        ["FIVE", 5],
        ["TEN", 10],
        ["TWENTY", 20],
        ["ONE HUNDRED", 100]
    ];

    // Calculate the total change to be given
    let change = cash - price;
    console.log(change);

    // Calculate the total cash in the drawer (cid)
    let totalCid = 0;
    for (let i = 0; i < cid.length; i++) {
        //console.log(cid[i][1]);
        totalCid += cid[i][1];
    }
    totalCid = totalCid.toFixed(2);
    console.log(totalCid);
    // Case: Insufficient funds in the drawer
    if (Number(totalCid) < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    // Case: Exact change in the drawer
    else if (Number(totalCid) === change) {
        return { status: "CLOSED", change: cid };
    }
    // Case: Change can be given from the drawer
    else {
        // Array to store the change to be returned
        let changeArr = [];

        // Iterate through currency units in reverse order (highest to lowest)
        for (let i = currencyUnit.length - 1; i >= 0; i--) {
            const coinName = currencyUnit[i][0];
            //console.log(coinName);
            const coinValue = currencyUnit[i][1];
            //console.log(coinValue);
            const coinAvailable = cid[i][1];
            //console.log(coinAvailable);

            // Calculate the maximum number of coins/bills available for the current denomination
            let coinCount = Math.floor(coinAvailable / coinValue);
            let returnedCoins = 0;
            //console.log(coinCount);
            console.log("");

            // Calculate change using the current denomination
            while (change >= coinValue && coinCount > 0) {
                change -= coinValue;
                change = change.toFixed(2);
                console.log(change);
                coinCount--;
                returnedCoins++;
            }

            // If change is given using the current denomination, add it to the change array
            if (returnedCoins > 0) {
                changeArr.push([coinName, returnedCoins * coinValue]);
            }
        }

        // Case: Exact change is given
        if (change === "0.00") {
            return { status: "OPEN", change: changeArr };
        }
        // Case: Insufficient denominations to give exact change
        else {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
    }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);