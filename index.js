// common function for Income input 
function getIncomeValue(inputName){
    const inputText = document.getElementById(inputName);
    const inputValue = inputText.value;
   const inputNumber = parseInt(inputValue);
   return inputNumber;
};
// common functions for input values
function getInputValue(inputName){
    const inputText = document.getElementById(inputName);
    const inputValue = inputText.value;
   const inputNumber = parseInt(inputValue);
   inputText.value = '';
   return inputNumber;
};
// common functions for outputs
function setInnerText(element, text){
    const balanceText = document.getElementById(element);
    balanceText.innerText = text;
};
// event add on calculate button 
document.getElementById('calculate-btn').addEventListener('click', function(){
   const income = getIncomeValue('income-input');
   const food = getInputValue('food-input');
   const rent = getInputValue('rent-input');
   const cloths = getInputValue('cloths-input');
    // expenses calculation 
    const totalExpences = food + rent + cloths;
    const balance = income - totalExpences;

    // total expenses output
    setInnerText('total-expenses',totalExpences);
    //balance output
    setInnerText('balance',balance);
});

// event add on save button
document.getElementById('save-btn').addEventListener('click',function(){
    const income = getIncomeValue('income-input');
    const save = getInputValue('save-input');
    const saveAmount = (income/100) * save ;
    const remainningBalence = income - saveAmount;
    // saving output
    setInnerText('saving-amount',saveAmount);
    setInnerText('remainning-balance',remainningBalence);
})