"use strict";
//set up the variables once we build the HTML
//begin the function 
function savingsGoal(initialAmount, monthlyPay, targetAmount, APY) {
    //store values in variables 
    let totalMonth = 0;
    let accInterest = 0;
    let totalAmount = initialAmount;
    let monInt = monthlyInterest(APY);
    //actual logic
    do {
        //add monthly payment to total amount 
        totalAmount = totalAmount + monthlyPay;
        //add total amount to total amount x monthly interest 
        totalAmount = totalAmount + (totalAmount * monInt);
        //add total amount x monthly interest to accrued interest 
        accInterest += (totalAmount * monInt);
        //increase total months by 1 
        totalMonth++;
    } while (totalAmount < targetAmount);
    console.log(`It will take around ${totalMonth} months to save $${targetAmount} saving $${monthlyPay} per month. You will have ${accInterest} in accrued interest.`);
}
//create caller function for monthly interest 
function monthlyInterest(APY) {
    let APM = (APY / 12).toFixed(3);
    return Number(APM);
}
savingsGoal(7800, 900, 25200, 4.00);
// //create a caller function for the accrued monthly cash 
// function monthlyCash(total: number, monInt: number){
// }
