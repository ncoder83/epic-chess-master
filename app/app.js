// player name, wins, loss, draw
(function(module){
    'use strict';
    
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAJujyC_-z2_DNWAXXpgwdWjDQXeOPr1so",
        authDomain: "epic-chess-master.firebaseapp.com",
        databaseURL: "https://epic-chess-master.firebaseio.com",
        projectId: "epic-chess-master",
        storageBucket: "epic-chess-master.appspot.com",
        messagingSenderId: "992233432238"
    };
    //initialize the database
    firebase.initializeApp(config);

    //create a child db under the main firebase database
    module.createdb = function(dbname){
        return firebase.database().ref().child(dbname);
    };

    //retrieve the db by the firebase name
    module.readdb = function(dbname){
        return firebase.database().ref(dbname);
    };

    module.auth = function(){
        return firebase.auth();
    }
    return module;

})(window.fire = window.fire || {});