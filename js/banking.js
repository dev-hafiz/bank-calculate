// Functional Way to get Counting 
function updateInputValue(inputFiledId) {
     const inputFiled = document.getElementById(inputFiledId);
     const inputAmountText = inputFiled.value ;
     const inputAmount = parseFloat(inputAmountText);
      // Clear InputFiled Value 
      inputFiled.value = ' ';

     // return Value 
     return inputAmount;
};

// Functional Adding 
function innerTextAndSetValue(innerFiled, amount) {
     const innerTotalcount = document.getElementById(innerFiled);
     const innerTotalText = innerTotalcount.innerText;
     const innerValeTotal = parseFloat(innerTotalText);

     // Set inner value of deposit total 
     innerTotalcount.innerText = innerValeTotal + amount;
};

// Balance update on fanctiona way 
function updateBalance(dAmount, isAdd) {
     const updateTotalCount = document.getElementById('balance-total');
     const updateTotalText = updateTotalCount.innerText;
     const updateTotalAmount = parseFloat(updateTotalText);

     if (isAdd == true) {
          // Set update value 
          updateTotalCount.innerText = updateTotalAmount + dAmount;
     }else{
          updateTotalCount.innerText = updateTotalAmount - dAmount;
     }
     
}

// JS event handler on submit deposit button 
document.getElementById('deposit-button').addEventListener('click', function () {
     // Get input Value 
     const depositAmount = updateInputValue('deposit-input');
     // Get deposit inner text id 
     if (depositAmount > 0) {
          innerTextAndSetValue('deposit-total', depositAmount)
          // Update balance 
          updateBalance(depositAmount, true)  
     }
     


});

// JS event handler on submit withdraw  button 

document.getElementById('withdrow-button').addEventListener('click', function () {
     const withdrawAmount = updateInputValue('withdrow-input');
     // Set withdraw inner Id 
     if (withdrawAmount > 0) {
          innerTextAndSetValue('withdraw-total', withdrawAmount);
          updateBalance(withdrawAmount, false) 
     }


     
})