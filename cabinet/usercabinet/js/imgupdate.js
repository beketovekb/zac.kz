// Получение ссылки на хранилище в Firebase
const storageRef = firebase.storage().ref();

// Обработка отправки формы
imageForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Получение выбранного файла
  const file = imageInput.files[0];
  // Создание пути к файлу в хранилище
  const user = localStorage.getItem("userUid");
  const imagesRef = storageRef.child(`imagesUser/${user}/${file.name}`);
  // Загрузка файла в хранилище
  imagesRef.put(file)
    .then((snapshot) => {
      // Получение ссылки на загруженный файл
      return snapshot.ref.getDownloadURL();
    })
    .then((url) => {
      alert("Файл успешно загружен");
      // Переименование файла в хранилище с использованием UID пользователя
    });
});