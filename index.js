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
// common function for errors 
function getErrors(elements,condition){
    if(condition==true){
        document.getElementById(elements).style.display ='block';
    }
    else{
        document.getElementById(elements).style.display ='none';
    }
};
// common functions of input errors 
    function isError(element,error){
        if(isNaN(element) == true || element < 0){
           getErrors(error,true); 
        }
        else{getErrors(error,false)}
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

    if(income<totalExpences){
        getErrors('balance-warning',true)
    }
    else{
        if(isNaN(totalExpences)==false && totalExpences>0){
            // total expenses output
            setInnerText('total-expenses',totalExpences);
        }
        if(isNaN(balance)==false && balance>0 && totalExpences>0){
        //balance output
        setInnerText('balance',balance); 
        }
        getErrors('balance-warning',false)
    }

    //calling function for inputs errors
    isError(income,'income-number-error');
    isError(food,'food-number-error');
    isError(rent,'rent-number-error');
    isError(cloths,'cloths-number-error');
});

// event add on save button
document.getElementById('save-btn').addEventListener('click',function(){
    const income = getIncomeValue('income-input');
    const save = getInputValue('save-input');
    const saveAmount = (income/100) * save ;
    const balance = document.getElementById('balance').innerText;
    // error hanldeling for balence & saving
    if(balance>=saveAmount && save>0){
        const remainningBalence = balance - saveAmount;
    // saving output
    setInnerText('saving-amount',saveAmount);
    setInnerText('remainning-balance',remainningBalence);
    getErrors('saving-warning',false);
    }
    else{
        getErrors('saving-warning',true);
    }
    isError(save,'saving-number-error');  
});