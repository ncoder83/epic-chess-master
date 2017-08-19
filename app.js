// player name, wins, loss, draw
(function(){
    // Initialize Firebase
    const config = {
        apiKey: "AIzaSyAJujyC_-z2_DNWAXXpgwdWjDQXeOPr1so",
        authDomain: "epic-chess-master.firebaseapp.com",
        databaseURL: "https://epic-chess-master.firebaseio.com",
        projectId: "epic-chess-master",
        storageBucket: "epic-chess-master.appspot.com",
        messagingSenderId: "992233432238"
        };
    firebase.initializeApp(config);

    //get element
    const preTag = document.getElementById('object');

    //create reference
    const dbRef = firebase.database().ref().child('object');

    //sync changes
    dbRef.on('value', snap => console.log(snap.val()));
})();