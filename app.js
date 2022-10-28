var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNum = document.querySelector("#lucky-number");
var checkNumberButton = document.querySelector("#check-number");


function compareValues(sum,luckyNumber)
{
    //console.log(sum,luckyNumber);
}
function checkIfLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    console.log(sum);
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

checkNumberButton.addEventListener('click',function
    getInputs(){
       // console.log(dateOfBirth.value,luckyNum.value)
    
})
