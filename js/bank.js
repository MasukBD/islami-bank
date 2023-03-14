document.getElementById('deposit-btn').addEventListener('click', function () {
    // deposit field section 
    const depositField = document.getElementById('deposit-field');
    const depositAmount = depositField.value;
    const depositContainer = document.getElementById('deposit');
    const currentAmount = parseInt(depositContainer.innerText);
    depositContainer.innerText = currentAmount + parseInt(depositAmount);
    // Net balance update section 
    const netBalance = document.getElementById('net-balance');
    const previousNetBalance = netBalance.innerText;
    const afterDepositNetBalance = parseInt(previousNetBalance);
    const finalBalance = afterDepositNetBalance + parseInt(depositAmount);
    netBalance.innerText = finalBalance;

    depositField.value = '';
});

// withdraw section 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmount = withdrawField.value;
    const withdrawArea = document.getElementById('withdraw');
    const previousWithdrawAmount = withdrawArea.innerText;

    // decrement from net balance 
    const netBalance = document.getElementById('net-balance');
    const previousNetBalance = netBalance.innerText;
    // const totalNetBalance = parseInt(previousNetBalance) - parseInt(withdrawAmount);
    if (parseInt(previousNetBalance) >= parseInt(withdrawAmount)) {
        const totalWithdraw = parseInt(withdrawAmount) + parseInt(previousWithdrawAmount);
        withdrawArea.innerText = totalWithdraw;
        const totalNetBalance = parseInt(previousNetBalance) - parseInt(withdrawAmount);
        netBalance.innerText = totalNetBalance;
    }
    else {
        alert('Insufficient Balance');
    }

    withdrawField.value = '';


});