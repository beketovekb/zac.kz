(function($) {

	"use strict";

	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	$(".toggle-password").click(function() {

	  $(this).toggleClass("fa-eye fa-eye-slash");
	  var input = $($(this).attr("toggle"));
	  if (input.attr("type") == "password") {
	    input.attr("type", "text");
	  } else {
	    input.attr("type", "password");
	  }
	});

})(jQuery);




// Получение формы регистрации
const registrationForm = document.getElementById("registration-form");

// Обработка отправки формы
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = registrationForm["email"].value;
  const password = registrationForm["password"].value;
  const confirmPassword = registrationForm["confirm-password"].value;
  const name = registrationForm["name"].value;
  const phone = registrationForm["phone-number"].value;

  // Проверка соответствия пароля и его подтверждения
  if (password !== confirmPassword) {
    const errorMessage = document.getElementById("error-message");
    errorMessage.textContent = "Пароль и подтверждение пароля не совпадают.";
    errorMessage.style.display = "block";
  } else {
    // Регистрация пользователя в Firebase
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Сохранение информации о пользователе в Firestore
        const user = userCredential.user;
        firebase
          .firestore()
          .collection("users")
          .doc(user.uid)
          .set({
            name: name,
            email: email,
            phone: phone,
          })
          .then(() => {
            console.log("Информация о пользователе сохранена в Firestore.");
            // Сохранение User uid в localStorage
            localStorage.setItem("userUid", user.uid);
            // Перенаправление на следующую страницу
            window.location.href = "auth.html";
          })
          .catch((error) => {
            console.error("Ошибка при сохранении информации о пользователе: ", error);
          });
      })
      .catch((error) => {
        const errorMessage = document.getElementById("error-message");
        errorMessage.textContent = error.message;
        errorMessage.style.display = "block";
      });
  }
});