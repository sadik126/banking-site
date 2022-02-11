document.getElementById('depositbtn').addEventListener('click',function(){
    let depofield = document.getElementById('deposit');
    let amount = depofield.value;
    console.log(amount);


    let enterdepo = document.getElementById('depoid');
    let pastamount = enterdepo.innerText;
    let newamount = parseFloat(pastamount)  + parseFloat(amount);
    enterdepo.innerText = newamount;

    depofield.value = '';




    let totalbalance = document.getElementById('balance');
    let addtotal = totalbalance.innerText;

    total = parseFloat(addtotal) + parseFloat(amount) ;
    totalbalance.innerText = total;
    
})


document.getElementById('withdrawbtn').addEventListener('click',function(){
    let withfield = document.getElementById('withdraw');
    let amount = withfield.value;
    console.log(amount);

    let enterwith = document.getElementById('withid');
    let pastamount = enterwith.innerText;
    let newamount = parseFloat(pastamount)  + parseFloat(amount);
    enterwith.innerText = newamount;

    withfield.value = '';

    let totalbalance = document.getElementById('balance');
    let addtotal = totalbalance.innerText;

    total = parseFloat(addtotal) - parseFloat(amount) ;
    totalbalance.innerText = total;
    
})