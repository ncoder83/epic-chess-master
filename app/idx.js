(function(db){

    db.readdb('chessplayers').on('value', successOnRead, failureOnRead );

     //when data is returned
     function successOnRead(data){
        
        
            var chessMasters = data.val();
            $('#usersTbl tbody').empty();//clear out the table before populating it

            if(chessMasters){
                Object.keys(chessMasters).forEach((item) => {
                    var td = "<td>" + chessMasters[item].name + "</td>";
                    td +=  "<td>" + chessMasters[item].win + "</td>";
                    td +=  "<td>" + chessMasters[item].loss + "</td>";
                    td +=  "<td>" + chessMasters[item].draw + "</td>";
                    var tr = "<tr>" + td + "</tr>";
                    $('#usersTbl tbody').append(tr);//append that row       
                });
            }
    }

    ///when data failed to arrived
    function failureOnRead(err){
        console.log('Error', err);
    }

})(fire);