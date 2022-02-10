document.getElementById('depositbtn').addEventListener('click',function(){
    let depofield = document.getElementById('deposit');
    let amount = depofield.value;
    console.log(amount);


    let enterdepo = document.getElementById('depoid');
    let pastamount = enterdepo.innerText;
    let newamount = parseFloat(pastamount)  + parseFloat(amount);
    enterdepo.innerText = newamount;

    depofield.value = '';
    document.ge
})