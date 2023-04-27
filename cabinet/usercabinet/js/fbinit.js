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

function userDate() {
	userUid = localStorage.getItem("userUid");
	//alert(userUid);
	var docRef = firebase.firestore().collection("users").doc(userUid);

	// Получить данные документа
	docRef.get().then(function(doc) {
	  if (doc.exists) {
		console.log("Document data:", doc.data());
	  } else {
		console.log("No such document!");
	  }
	}).catch(function(error) {
	  console.log("Error getting document:", error);
	});
		// var database = firebase.database();
		// var name = document.getElementById("name").value;
		// var age = document.getElementById("age").value;
		// database.ref('users/'+userUid+'/').push({
		// 	name: name,
		// 	age: age
		// });
		// alert("Data has been written to Firebase");
}

function checkAuth() {
	userUid = localStorage.getItem("userUid");
	//alert(userUid);
	var docRef = firebase.firestore().collection("users").doc(userUid);

	// Получить данные документа
	docRef.get().then(function(doc) {
	  if (doc.exists) {
		console.log("Document data:", doc.data());
		document.getElementById("email").value = doc.data().email;
		document.getElementById("nameuser").value = doc.data().name;
		document.getElementById("userphone").value = doc.data().phone;
	  } else {
		console.log("No such document!");
	  }
	}).catch(function(error) {
	  console.log("Error getting document:", error);
	});
}

function exi() {
	firebase.auth().signOut().then(function () {
		// Выход выполнен успешно.
		window.location.href = "../login/auth.html";
	}).catch(function (error) {
		// Произошла ошибка при выходе.
	});

}
