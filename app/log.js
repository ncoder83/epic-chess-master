(function(db){
    'use strict';

    //get the page elements
    const txtEmail = document.getElementById('email');
    const txtPassword = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');

    //add events
    loginBtn.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = db.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);

        promise.then(d => { location.href ="cm-admin/index.html";})
        .catch( e => console.log(e.message));
    });

    //add a real-time authentication listener
    db.auth().onAuthStateChanged(fbUser => {
        if(fbUser)
            console.log(fbUser);
        else
            console.log('not logged in');
    });

})(fire);