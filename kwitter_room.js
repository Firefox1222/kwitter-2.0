
var firebaseConfig = {
      apiKey: "AIzaSyC5WCRalACrNdBATlY3h5BHKByHZ8_SLVs",
      authDomain: "kwitter-87bb2.firebaseapp.com",
      databaseURL: "https://kwitter-87bb2-default-rtdb.firebaseio.com",
      projectId: "kwitter-87bb2",
      storageBucket: "kwitter-87bb2.appspot.com",
      messagingSenderId: "70771544658",
      appId: "1:70771544658:web:0bb043fe1d5997c480c58b"
    };
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name")
    room_name=localStorage.getItem("room_name")
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
