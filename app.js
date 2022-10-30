var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNum = document.querySelector("#lucky-number");
var checkNumberButton = document.querySelector("#check-number");
var output = document.querySelector("#out-put");

function compare(sum, luckyNum)
{
    if(sum % luckyNum == 0)  
    {
        output.innerText = "Your birthday is luckyyy!!🥳";
    }
    else{
        output.innerText = "Your birthday is not so lucky:/" ;
    }
}
function showMessage(message) {
    output.innerText = message;
}
checkNumberButton.addEventListener("click", checkIfLucky);
function checkIfLucky(){
    var dob = dateOfBirth.value;
    var sum = calculateSum(dob);
    var num = luckyNum.value;
    if(dob && num){
   compare(sum,luckyNum.value);
 
 }
            else{
      output.innerText = "Please enter both the fields";  
            }
    
}

  


function calculateSum(dob){
    dob = dob.replaceAll("-","");
   
    let sum=0;

    for(let index=0;index<dob.length;index++)
    {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}
