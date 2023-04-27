
// Получение формы авторизации
const loginForm = document.getElementById("login-form");

// Обработка отправки формы
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = loginForm["email"].value;
  const password = loginForm["password"].value;

  // Авторизация пользователя в Firebase
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Получение User uid авторизованного пользователя
      const user = userCredential.user;
      console.log("Пользователь авторизован: ", user.uid);
      // Сохранение User uid в localStorage
      localStorage.setItem("userUid", user.uid);
      // Перенаправление на следующую страницу
      console.log(localStorage.getItem("userUid"));
      window.location.href = "../usercabinet/index.html";
    })
    .catch((error) => {
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = error.message;
      errorMessage.style.display = "block";
    });
});


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