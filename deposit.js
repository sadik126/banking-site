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


//update balance

// let totalbalance = document.getElementById('balance');
// let addtotal = totalbalance.innerText;
// let enterdepo = document.getElementById('depoid');
// let pastamount = enterdepo.innerText;
// let addpastamount = parseFloat(pastamount);

// total = parseFloat(addtotal) + addpastamount ;
// totalbalance.innerText = total;