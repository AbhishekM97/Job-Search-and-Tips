
// var firebaseConfig = {
//     apiKey: "AIzaSyBrVihpxCSnZEAR8gWi2T7kgMJXjEPTy8M",
//     authDomain: "caskjobdb.firebaseapp.com",
//     databaseURL: "https://caskjobdb.firebaseio.com",
//     projectId: "caskjobdb",
//     storageBucket: "",
//     messagingSenderId: "679758582398",
//     appId: "1:679758582398:web:39be9599762523d9"
// };
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();
var city;
var searchstring;

//grabbing the users first and last names
$("#submit").on("click", function (event) {
    event.preventDefault();

    firstname = $("#first_name").val().trim();//"city"
    lastname = $("#last_name").val().trim();//"search string"

    sessionStorage.setItem("firstname", firstname);
    sessionStorage.setItem("lastname", lastname);

});
city = "seattle";
searchstring = "dog";

//may come back to this later, but for now I will just implement session storage, and sign in with
//first and last name
// firebase.auth().createUserWithEmailAndPassword(firstname, lastname).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ...
// });

var queryURL = "https://en.wikipedia.org/w/api.php?action=query&prop=info&pageids=18630637&inprop=url&format=json&prop=images&gsrlimit=15&generator=search&origin=*&gsrsearch=elephant";
var wikiURL = "http://http://en.wikipedia.org/w/api.php?action=query&format=json";
var craigslistURL = "http://" + city + ".craigslist.org/search/sss?format=rss&query=" + searchstring;


$.ajax({
    url: craigslistURL,
    method: "GET"

})
    .then(function (response) {
        // 
        console.log(response);
    });



