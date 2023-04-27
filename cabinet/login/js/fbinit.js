var firebaseConfig = {
	apiKey: "AIzaSyChfFZLbcrg9u17c3oapRCxdARE4jQEGNA",
	authDomain: "zackz-91c91.firebaseapp.com",
	projectId: "zackz-91c91",
	storageBucket: "zackz-91c91.appspot.com",
	messagingSenderId: "288742465451",
	appId: "1:288742465451:web:512139c8deb3a1bb15fcee",
	measurementId: "G-HM8FE14QVS"
  };

  firebase.initializeApp(firebaseConfig);

  function forgotPassword() {
	var email = document.getElementById("email").value;
	firebase.auth().sendPasswordResetEmail(email).then(function() {
	  alert("Password reset email sent!");
	}).catch(function(error) {
	  // Произошла ошибка при отправке email.
	  alert(error.message);
	});
  }