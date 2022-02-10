document.getElementById('loginbtn').addEventListener('click',function(){
    let emailfield = document.getElementById('email');
    let emailvalue = emailfield.value;
    
    //get password
    let passfield = document.getElementById('password')
    let passvalue = passfield.value;
    
    if(emailvalue == 'sadikhimel04@gmail.com' && passvalue == '1234'){
        window.location.href ='dashboard.html';
    }
})



//deposite

