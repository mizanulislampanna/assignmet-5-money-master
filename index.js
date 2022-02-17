// common functions
function getInputValue(inputName){
    const inputText = document.getElementById(inputName);
    const inputValue = inputText.value;
   const inputNumber = parseInt(inputValue);
   inputText.value = '';
   return inputNumber;
}
function setInnerText(element, text){
    const balanceText = document.getElementById(element);
    balanceText.innerText = text;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
   const income = getInputValue('income-input');
   const food = getInputValue('food-input');
   const rent = getInputValue('rent-input');
   const cloths = getInputValue('cloths-input');
    // expenses calculation 
    const totalExpences = food + rent + cloths;
    const balance = income - totalExpences;

    console.log(totalExpences, balance);
    // total expenses output
    setInnerText('total-expenses',totalExpences);
    //balance output
    setInnerText('balance',balance);
})