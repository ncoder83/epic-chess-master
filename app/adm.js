(function(db){
    'use strict';
    
    const chessMasterRef = db.createdb('chessplayers');

    const usernameField = document.getElementById('username');
    const addUserButton = document.getElementById('addUser');
    const logoutButton = document.getElementById('logoutBtn');
    
    db.auth().onAuthStateChanged(fbUser => {
        if(fbUser){//do nothing
            console.log(fbUser);
        }
        else{//if we are not logged-in goto login page
            location.href = "login.html";        
        }
    });

    logoutButton.addEventListener('click', e => {
        db.auth().signOut();
        location.href = "login.html";
    });

    //read the data and on the value event use our callbacks
    db.readdb('chessplayers').on('value', successOnRead, failureOnRead );

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
            td += "<td><button id='"+item+"' class='button' oncClick='challenge(this.id)'>Challenge</button><td>";
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

    function challenge(userId){
        alert('are you ready to get rekt');
    }