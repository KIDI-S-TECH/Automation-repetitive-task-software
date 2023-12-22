let customerDaliyTransaction= [6000,500,900,4500,900,35000,960,700]

function sum(...params){
    let element=0 
    for(let i=0; i < params.length; i++){

     element += params[i]

    }
    return element

}
alert("congratulation your deposit has been successfully recieved on your bank account with the total of $"+sum(...customerDaliyTransaction));

//reduce method
let customerwithdrawal =[49460,900,700,4500,6500]
let newBalance =customerwithdrawal.reduce((totalnum,intial)=>{
    return totalnum - intial
})

alert("Thanks for making a withdrawal and Trusting our service dear prominent customer.your new balance is $"+newBalance);


