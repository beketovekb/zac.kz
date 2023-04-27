

// Получение ссылки на базу данных Realtime Database
var database = firebase.database();

// Получение элементов формы и кнопки отправки
var form = document.getElementById("reviewForm");
var topicInput = document.getElementById("topic");
var ratingInput = document.getElementsByName("rating");
var descriptionInput = document.getElementById("description");
var submitBtn = document.getElementById("submit-btn");

// Обработка отправки формы
form.addEventListener("submit", function(event) {
	event.preventDefault();

	// Получение значения выбранного рейтинга
	var rating = "";
	for (var i = 0; i < ratingInput.length; i++) {
		if (ratingInput[i].checked) {
			rating = ratingInput[i].value;
			break;
		}
	}

	// Генерация случайного идентификатора записи
	var commentId = database.ref().child("comment").push().key;

	// Запись данных в базу данных
	var updates = {};
	updates["/comment/" + commentId] = {
		topic: topicInput.value,
		rating: rating,
		description: descriptionInput.value,
	};
	database.ref().update(updates);

	// Очистка формы и сообщения об успешной отправке
	form.reset();
	alert("Отзыв успешно отправлен!");
});
