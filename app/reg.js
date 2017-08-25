(function(db){
    'use strict';

    //get my dom elements 
    const txtUsername = document.getElementById('username');    
    const txtEmail = document.getElementById('email');
    const txtPassword = document.getElementById('password');
    const txtCPassword = document.getElementById('cpassword');
    const registerBtn = document.getElementById('registerBtn');

    registerBtn.addEventListener('click', e => {
        //validate         
        if(!hasInfo(txtUsername.value)){
            alert('Please enter your username'); return;
        }

        if(!hasInfo(txtEmail.value)){
            alert('Please enter your email');return;
        }

        if(!areTheSame(txtPassword.value, txtCPassword.value)){
            alert("Passwords don't match");return;
        }
    
        const email = txtEmail.value;
        const pass = txtPassword.value;
        
        const auth = db.auth();
        const chessMasterRef = db.createdb('chessplayers');
        const userData = {name: txtUsername.value, win: 0, loss: 0, draw: 0, created: new Date()};        

        const promise = auth.createUserWithEmailAndPassword(email, pass);        
        chessMasterRef.push(userData); 
        promise.then(d => {
            alert('registration completed succesfully!!');    
            location.href = "login.html";
        }).catch(e => console.log(e.message));        
    });

    function hasInfo(txt){
        return txt.length > 0;
    }

    function areTheSame(a, b){
        return a === b;
    }

})(fire);