function deleteComment(id){
    console.log("Deleting comment...");
    var xhr = new XMLHttpRequest();
    var url = "https://us-central1-first-app-56234.cloudfunctions.net/deletecomments"+"?id="+id;
    xhr.open('DELETE', url);

    // track the state changes of the request
    xhr.onreadystatechange = function() {
        var DONE = 4;
        var OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                // if comment deleted successfully
                // call getComments to refresh the page
                console.log(xhr.responseText);
                getComments()
            } else {
                console.log('Error: ' + xhr.status); // an error occurred during the request.
            }
        }
    };
    xhr.send(null);
}