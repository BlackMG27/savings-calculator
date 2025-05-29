//set up the variables once we build the HTML


//begin the function 
function savingsGoal(initialAmount: number, monthlyPay: number, targetAmount: number, APY: number){
  //store values in variables 
  let totalMonth: number = 0
  let accInterest: number = 0
  let totalAmount: number = initialAmount
  let monInt = monthlyInterest(APY)
  //create and store chart data
  let chartArr: {
    month: number, 
    totalSavings: number,
    interest: number
  }[] = []
  //put the initial values as chartArr[0]
  chartArr.push({
    month: totalMonth,
    totalSavings: initialAmount,
    interest: accInterest
  })
    
  //actual logic
  do{
    //add monthly payment to total amount 
    totalAmount = Number((totalAmount + monthlyPay).toFixed(2))
    //add total amount to total amount x monthly interest 
    totalAmount = Number((totalAmount + (totalAmount * monInt)).toFixed(2))
    //add total amount x monthly interest to accrued interest 
    accInterest = Number((accInterest + (totalAmount * monInt)).toFixed(2))
    //increase total months by 1 
    totalMonth += 1
    //push the new values into chartArr 
    chartArr.push({
      month: totalMonth,
      totalSavings: totalAmount,
      interest: accInterest
    })
  }while(totalAmount < targetAmount)
  
  console.log(`It will take around ${totalMonth} months to save $${targetAmount} saving $${monthlyPay} per month. You will have ${accInterest.toFixed(2)} in accrued interest.`)
  console.log(`Total Savings: $${totalAmount}`)
  console.log(chartArr)
  }
  
  //create caller function for monthly interest 
  function monthlyInterest(APY: number){
    let APM = (APY / 12)
    APM = APM / 100
    return Number(APM.toFixed(3))
  }
  
  savingsGoal(8910, 1500, 25200, 4)
