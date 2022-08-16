//Deposit and balance Field:
document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('inp-deposit');
    const depositAmount = parseFloat(depositInput.value);

    // console.log(typeof(depositAmount));
    
    //previous deposit and new deposit Sum:
    const totalDeposit = document.getElementById('total-deposit');
    const depositAmount2 = parseFloat(totalDeposit.innerText);
    const allDeposit = depositAmount2 + depositAmount;
    //deposit total set:
    totalDeposit.innerText = allDeposit.toFixed(2);
    depositInput.value = '';

    //main balance +:
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalance.innerText) + depositAmount;
    //total balance set:
    totalBalance.innerText = totalBalanceAmount.toFixed(2);    
});

// Withdraw and main balance:
document.getElementById('Withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('inp-withdraw');
    const withdraw = parseFloat(withdrawField.value);
    
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawAmount = parseFloat(totalWithdraw.innerText);
    const withdrawBalance = totalWithdrawAmount + withdraw;
    totalWithdraw.innerText = withdrawBalance.toFixed(2);
    withdrawField.value = '';

    //main balance -:
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalance.innerText) - withdraw;
    //total balance set:
    totalBalance.innerText = totalBalanceAmount.toFixed(2);    
})