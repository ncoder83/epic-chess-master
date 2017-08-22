(function(db){
    'use strict';
    
    const chessMasterRef = db.createdb('chessmasters');

    const usernameField = document.getElementById('username');
    const addUserButton = document.getElementById('addUser');
    const logoutButton = document.getElementById('logoutBtn');

    db.auth().onAuthStateChanged(fbUser => {
        if(fbUser){//do nothing
        }
        else{//if we are not logged-in goto login page
            location.href = "login.html";        
        }
    });

    //check to see if we are logged in
    //when submit button is clicked
    addUserButton.addEventListener('click', e => {
        if(usernameField.value.length === 0){
            alert('you must enter a Name!');
            return;
        }
        //add user info to firebase
        const userData = {
            name: usernameField.value,
            win:0,
            loss:0,
            draw:0,
            created: new Date()
        };
        //console.log(userData);
        chessMasterRef.push(userData);
        alert('User ' + userData.name + ' added successfully');
        usernameField.value = '';
    });

    logoutButton.addEventListener('click', e => {
        db.auth().signOut();
        location.href = "login.html";
    });

    //read the data and on the value event use our callbacks
    db.readdb('chessmasters').on('value', successOnRead, failureOnRead );

    //when data is returned
    function successOnRead(data){
        var chessMasters = data.val();
        $('#usersTbl tbody').empty();//clear out the table before populating it
        //foreach row
        Object.keys(chessMasters).forEach((item) => {
            var td = "<td>" + chessMasters[item].name + "</td>";
            td +=  "<td>" + chessMasters[item].win + "</td>";
            td +=  "<td>" + chessMasters[item].loss + "</td>";
            td +=  "<td>" + chessMasters[item].draw + "</td>";
            var tr = "<tr>" + td + "</tr>";
            $('#usersTbl tbody').append(tr);//append that row       
        });
    }

    ///when data failed to arrived
    function failureOnRead(err){
        console.log('Error', err);
    }

    function update(){

    }
})(fire);