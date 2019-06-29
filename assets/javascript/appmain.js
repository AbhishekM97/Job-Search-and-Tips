
var firebaseConfig = {
    apiKey: "AIzaSyBrVihpxCSnZEAR8gWi2T7kgMJXjEPTy8M",
    authDomain: "caskjobdb.firebaseapp.com",
    databaseURL: "https://caskjobdb.firebaseio.com",
    projectId: "caskjobdb",
    storageBucket: "",
    messagingSenderId: "679758582398",
    appId: "1:679758582398:web:39be9599762523d9"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();


//grabbing the users first and last names
$("#submit").on("click", function (event) {

    var firstname = $("#first_name").val().trim();
    var lastname = $("#last_name").val().trim();

});


firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});



//?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats"
// var queryURL = "https://api.indeedassessments.com/v1/";
// var youtubeURL = "https://www.googleapis.com/youtube/v3/channels?api_key=AIzaSyAJqO0e_xPV3v6dOOSCl7U2OUNGXiSvSo0";
//var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&tag=cats";

var queryURL = "https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=18630637&inprop=url&format=json&prop=images&gsrlimit=15&generator=search&origin=*&gsrsearch=elephant";
var wikiURL = "http://http://en.wikipedia.org/w/api.php?action=query&format=json";

$.ajax({
    url: queryURL,
    method: "GET"

})
    .then(function (response) {
        // 
        console.log(response);
    });



