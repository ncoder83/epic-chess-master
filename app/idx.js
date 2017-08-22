(function(db){

    db.readdb('chessmasters').on('value', successOnRead, failureOnRead );

     //when data is returned
     function successOnRead(data){
        var chessMasters = data.val();
        $('#usersTbl tbody').empty();//clear out the table before populating it
        //foreach row
        // var keys = Object.keys(chessMasters);
        // for(var i = 0; i < keys.length; i++){
        //     var currentItem = keys[i];
        //     var td = "<td>" + chessMasters[currentItem].name + "</td>";
        //     td +=  "<td>" + chessMasters[currentItem].win + "</td>";
        //     td +=  "<td>" + chessMasters[currentItem].loss + "</td>";
        //     td +=  "<td>" + chessMasters[currentItem].draw + "</td>";
        //     var tr = "<tr>" + td + "</tr>";
        //     $('#usersTbl tbody').append(tr);//append that row 
        // }

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

})(fire);