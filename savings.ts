//set up the variables once we build the HTML


//begin the function 
function savingsGoal(initialAmount: number, monthlyPay: number, targetAmount: number, APY: number){
  //store values in variables 
  let totalMonth: number = 0
  let accInterest: number = 0
  let totalAmount: number = initialAmount
  let monInt = monthlyInterest(APY)
  //actual logic
  do{
    //add monthly payment to total amount 
    totalAmount = totalAmount + monthlyPay
    //add total amount to total amount x monthly interest 
    totalAmount = totalAmount + (totalAmount * monInt)
    //add total amount x monthly interest to accrued interest 
    accInterest = accInterest + (totalAmount * monInt)
    //increase total months by 1 
    totalMonth += 1
  }while(totalAmount < targetAmount)
  
  console.log(`It will take around ${totalMonth} months to save $${targetAmount} saving $${monthlyPay} per month. You will have ${accInterest.toFixed(2)} in accrued interest.`)
  
  }
  
  //create caller function for monthly interest 
  function monthlyInterest(APY: number){
    let APM: number = (APY / 12)
    APM = APM / 100
    return Number(APM)
  }
  
  savingsGoal(7800, 900, 25200, 4)
