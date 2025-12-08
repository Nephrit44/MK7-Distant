const navLinkCollection = document.querySelectorAll('.nav-link'); //Кнопки навигации
const getTemplateCard = document.querySelector('#cardTemplate'); //Заготовки карточек
const getlist = document.querySelector('.card-list'); //Контейнер для карточек групп

//Загрузка списка коллекции
arrColletion.forEach((element) => {
  let newElement = getTemplateCard.content.cloneNode(true); //Создаю клон шаблона карточки
  newElement.querySelector('.card').setAttribute('data-groupid', element.dataGroup);
  newElement.querySelector('.card-title').textContent = element.groupName; //Ищу заголовок и дабавляю ему данные из коллекции
  newElement.querySelector('.card-img-top').src = "./image/" + element.groupIMG;
  //newElement.querySelector('.link__groupSferum').href = element.sferumGroupLink; //Ссылка на группу сферум
  //newElement.querySelector('.link__callSferum').href = element.sferumGroupCall; //Ссылка на звонок сферум

  newElement.querySelector('.link__groupMAX').href = element.maxGroupLink; //Ссылка на группу MAX
  //newElement.querySelector('.link__callMAX').href = element.maxGroupCall; //Ссылка на звонок MAX
  //newElement.querySelector('.button--iconQRcode').dataset.qrcode = element.sferumGroupLink;

  getlist.append(newElement);
});

navLinkCollection.forEach(element => {
  element.addEventListener('click', function () {
    switch (this.getAttribute('data-navBtn')) {
      case 'main': {
        navList.classList.add('visible');
        getlist.classList.remove('visible');
      }
        break;
      case 'navList': {
        navList.classList.remove('visible');
        getlist.classList.add('visible');
      }
        break;
    }
  })
});