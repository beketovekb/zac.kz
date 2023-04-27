// Проверка, авторизован ли пользователь
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // Если пользователь авторизован, перенаправление на следующую страницу
      //window.location.href = "../usercabinet/index.html";
    }
  });