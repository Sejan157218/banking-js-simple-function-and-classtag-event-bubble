function getInnerText(textId){
    const getInner = document.getElementById(textId);
    const intoNumber = Number(getInner.innerText);
    return intoNumber;
}

function getInputValue(inputId){
    const getInput = document.getElementById(inputId);
    const getValue = Number(getInput.value);
    getInput.value = '';
    return getValue;
}
function depositWiyhdrawUpdate(fieldId,value){
    const getInnerTextValue = getInnerText(fieldId)
    const newDeposit = getInnerTextValue + value;
    document.getElementById(fieldId).innerText = newDeposit;
    totalUptade(); 
}

function totalUptade(){
    const totalDeposit = getInnerText('total-deposit');
    const totalWithdraw = getInnerText('total-withdraw');
    const newTotal = totalDeposit - totalWithdraw + 1200;
    document.getElementById('total-amount').innerText =newTotal;
}


document.getElementById('deposit-button').addEventListener('click',function(){
    const depositValue = getInputValue('input-deposit');
    if(depositValue > 0){
    depositWiyhdrawUpdate('total-deposit',depositValue)
    }   
})


document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawValue = getInputValue('input-withdraw');
    const updateTotal = getInnerText('total-amount');
    console.log(withdrawValue,updateTotal);
    if(withdrawValue > 0 && updateTotal >= withdrawValue){
        depositWiyhdrawUpdate('total-withdraw',withdrawValue)
    }

})