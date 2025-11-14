const getTemplateCard = document.querySelector('#listRow'); //Найти на странице заготовку
const getlist = document.querySelector('.list'); //Найти на странице контейне в который грузим
const searchButton = document.querySelector('.search__button'); //Найти на странице кнопку поиска
const searchInput = document.querySelector('.search__input'); //Найти на странице тексмтовое поле поиска
const navButton = document.querySelector('.navigation'); //Найти кнопку меню
const navList = document.querySelector('.linkCollection'); //Найти навигационное меню
const decorElement = document.querySelectorAll('.navigation__decor'); //Найти декаративные элементы

const linkCollection = document.querySelector('.linkCollection'); //Ищем контейнер куда будут вставлятся ссылки
const getTemplateLinkCollection = document.querySelector('#linkRow'); //Ищем шаблон со строкой для ссылок

const popup = document.querySelector('#qrCode');
const popupButtonClose = document.querySelector('.popup_button');
const buttonCollectionCreateQRcode = document.querySelectorAll('.button--iconQRcode');
const popupIMG = popup.querySelector('.popup__img');
const popupTitle = popup.querySelector('.popup__title');

showLinkCollection(); //Выводим список в выпадающем меню

//Загрузка списка коллекции
arrColletion.forEach((element) => {
  let newElement = getTemplateCard.content.cloneNode(true); //Создаю клон шаблона карточки
  newElement.querySelector('.listRow__title').textContent =
    element.groupName; //Ищу заголовок и дабавляю ему данные из коллекции
  newElement.querySelector('.link__groupSferum').href = element.sferumGroupLink; //Ссылка на группу сферум
  newElement.querySelector('.link__callSferum').href = element.sferumGroupCall; //Ссылка на звонок сферум

  newElement.querySelector('.link__groupMAX').href = element.maxGroupLink; //Ссылка на группу MAX
  newElement.querySelector('.link__callMAX').href = element.maxGroupCall; //Ссылка на звонок MAX
  newElement.querySelector('.button--iconQRcode').dataset.qrcode = element.sferumGroupLink;

  newElement.querySelector('.listRow__item').dataset.group =
    element.dataGroup;
  getlist.append(newElement);
});

searchInput.addEventListener('input', function () {
  console.log(searchInput.value);
  //Если значение не пусто, показать эту строку, остальные спрятать
  if (searchInput.value !== '') {
    hideAll(searchInput.value);
  } else {
    showAll();
  }
});

//Функция поиска указанной группы
function hideAll(userValue) {
  const allRowCollection = document.querySelectorAll('.listRow__item'); //Список всех строк
  allRowCollection.forEach((element) => {
    if (element.dataset.group !== userValue) {
      element.classList.add('visible');
    } else {
      element.classList.remove('visible');
    }
  });
}

function showAll() {
  const allRowCollection = document.querySelectorAll('.listRow__item'); //Список всех строк
  allRowCollection.forEach((element) => {
    element.classList.remove('visible');
  });
}

//Обработка нажатия на кнопки меню
navButton.addEventListener('click', function () {
  navList.classList.toggle('visible');
  getlist.classList.toggle('visible');
  navButton.classList.toggle('linkCollection-action');
})

//Вывод списка в таблицу выпадающего окна
function showLinkCollection() {
  arrColletion.forEach((element) => {
    let newElement = getTemplateLinkCollection.content.cloneNode(true); //Создаю клон шаблона строки с сылками
    newElement.querySelector('.link__title').textContent = element.groupName;
    newElement.querySelector('.link__content').textContent = element.sferumGroupLink;
    linkCollection.append(newElement);
  });
}

//Обработка нажатия на кнопку открыть QR
document.addEventListener('click', function (e) {
  if (e.target.classList.contains('button--iconQRcode')) {
    popupIMG.innerHTML = "";  
    generateQRCode(
      popupIMG,
      e.target.dataset.qrcode
    );
    popup.classList.remove('visible');
  };
})


popupButtonClose.addEventListener('click', function () {
  popup.classList.add('visible');
})

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