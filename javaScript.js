let plusBtn_1 = document.getElementById("plusIcon");
plusBtn_1.addEventListener('click', function () {
    let productNumber_1 = document.getElementById('count_1').innerHTML;
    let currentProductNumber_1 = parseFloat(productNumber_1);
    document.getElementById('count_1').innerHTML = currentProductNumber_1 + 1;
    let totalPay = document.getElementById('amount_1').innerHTML;
    let nowHaveToPay = parseFloat(totalPay);
    document.getElementById('amount_1').innerText = nowHaveToPay + 1499;
    let finalAmount = document.getElementById('count_3').innerHTML;
    let amountNumber = parseFloat(finalAmount);
    document.getElementById('count_3').innerHTML = amountNumber + 1499;

})
let minusBtn_1 = document.getElementById('minusIcon');
minusBtn_1.addEventListener('click', function () {
    let productNumber_1 = document.getElementById('count_1').innerHTML;
    let currentProductNumber_1 = parseFloat(productNumber_1);
    if (currentProductNumber_1 > 0) {
        document.getElementById('count_1').innerHTML = currentProductNumber_1 - 1;
        let totalPay = document.getElementById('amount_1').innerHTML;
        let nowHaveToPay = parseFloat(totalPay);
        document.getElementById('amount_1').innerText = nowHaveToPay - 1499;
        let finalAmount = document.getElementById('count_3').innerHTML;
        let amountNumber = parseFloat(finalAmount);
        document.getElementById('count_3').innerHTML = amountNumber - 1499;
    }
})
let plusBtn_2 = document.getElementById('secPlusIcon');
plusBtn_2.addEventListener('click', function () {
    let productNumber_2 = document.getElementById('count_2').innerHTML;
    let currentProductNumber_2 = parseFloat(productNumber_2);
    document.getElementById('count_2').innerHTML = currentProductNumber_2 + 1;
    let totalPay = document.getElementById('amount_1').innerHTML;
    let nowHaveToPay = parseFloat(totalPay);
    document.getElementById('amount_1').innerText = nowHaveToPay + 60;
    let finalAmount = document.getElementById('count_3').innerHTML;
    let amountNumber = parseFloat(finalAmount);
    document.getElementById('count_3').innerHTML = amountNumber + 60;
})
let minusBtn_2 = document.getElementById('pi');
minusBtn_2.addEventListener('click', function () {
    let productNumber_2 = document.getElementById('count_2').innerHTML;
    let currentProductNumber_2 = parseFloat(productNumber_2);
    if (currentProductNumber_2 > 0) {
        document.getElementById('count_2').innerHTML = currentProductNumber_2 - 1;
        let totalPay = document.getElementById('amount_1').innerHTML;
        let nowHaveToPay = parseFloat(totalPay);
        document.getElementById('amount_1').innerText = nowHaveToPay - 60;
        let finalAmount = document.getElementById('count_3').innerHTML;
        let amountNumber = parseFloat(finalAmount);
        document.getElementById('count_3').innerHTML = amountNumber-60 ;

    }
})
let button = document.getElementById('button');
button.addEventListener('click',function(){
    document.getElementById('firstPage').style.display = 'none';
    document.getElementById('secPage').style.display = 'block';
})