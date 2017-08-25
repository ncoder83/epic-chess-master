(function(db){
    'use strict';

    //get my dom elements 
    const txtUsername = document.getElementById('username');    
    const txtEmail = document.getElementById('email');
    const txtPassword = document.getElementById('password');
    const txtCPassword = document.getElementById('cpassword');
    const registerBtn = document.getElementById('registerBtn');

    registerBtn.addEventListener('click', e => {
        alert('register button clicked');

        
        if(!hasInfo(txtUsername.value)){
            alert('Please enter your username'); return;
        }

        if(!hasInfo(txtEmail.value)){
            alert('Please enter your email');return;
        }

        if(!areTheSame(txtPassword.value, txtCPassword.value)){
            alert("Passwords don't match");return;
        }
        //add user with 
        const email = txtEmail.value;
        const pass = txtPassword.value;
        
        const auth = db.auth();
        const chessMasterRef = db.createdb('chessplayers');

        auth.createUserWithEmailAndPassword(email, pass);

         const userData = {
            name: txtUsername.value,
            win:0,
            loss:0,
            draw:0,
            created: new Date()
        };
        //console.log(userData);
        chessMasterRef.push(userData);
        
    });

    function hasInfo(txt){
        return txt.length > 0;
    }

    function areTheSame(a, b){
        return a === b;
    }

})(fire);