const getTemplate = document.querySelector("#listRow"); //Найти на странице заготовку
    const getlist = document.querySelector(".list"); //Найти на странице контейне в который грузим
    const searchButton = document.querySelector(".search__button"); //Найти на странице кнопку поиска
    const searchInput = document.querySelector(".search__input"); //Найти на странице тексмтовое поле поиска

    //Загрузка списка коллекции
    arrColletion.forEach((element) => {
      let newElement = getTemplate.content.cloneNode(true); //Содаю клон шаблона
      newElement.querySelector(".listRow__title").textContent =
        element.groupName; //Ищу заголовок и дабавляю ему данные из коллекции
      newElement.querySelector(".listRow__link").href = element.groupLink; //Добавление основной ссылки
      newElement.querySelector(".listRow__secondLink").href =
        element.groupSecondLink; //Добавление запасной ссылки
      generateQRCode(
        newElement.querySelector(".QRCode"),
        element.groupSecondLink
      );
      newElement.querySelector(".listRow__item").dataset.group =
        element.dataGroup;
      getlist.append(newElement);
    });

    function generateQRCode(placeElement, urlLink) {
      const qrcode = new QRCode(placeElement, {
        text: urlLink,
        width: 256,
        height: 256,
        colorDark: "#000",
        colorLight: "#fff",
        correctLevel: QRCode.CorrectLevel.H,
      });
    }

    searchInput.addEventListener("input", function () {
      console.log(searchInput.value);
      //Если значение не пусто, показать эту строку, остальные спрятать
      if (searchInput.value !== "") {
        hideAll(searchInput.value);
      } else {
        showAll();
      }
    });

    //Функция поиска указанной группы
    function hideAll(userValue) {
      const allRowCollection = document.querySelectorAll(".listRow__item"); //Список всех строк
      allRowCollection.forEach((element) => {
        if (element.dataset.group !== userValue) {
          element.classList.add("visible");
        } else {
          element.classList.remove("visible");
        }
      });
    }

    function showAll() {
      const allRowCollection = document.querySelectorAll(".listRow__item"); //Список всех строк
      allRowCollection.forEach((element) => {
        element.classList.remove("visible");
      });
    }