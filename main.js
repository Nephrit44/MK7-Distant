const getTemplate = document.querySelector("#listRow"); //Найти на странице заготовку
    const getlist = document.querySelector(".list"); //Найти на странице контейне в который грузим
    const searchButton = document.querySelector(".search__button"); //Найти на странице кнопку поиска
    const searchInput = document.querySelector(".search__input"); //Найти на странице тексмтовое поле поиска

    const arrColletion = []; //Коллеция групп и ссылок на них
    arrColletion[0] = {
      groupName: "П-101СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=Y3YK9q6lMAzsRU4kaxqDQ3GHnFcflDloryg=",
      dataGroup: 101,
      groupSecondLink: "https://clck.ru/3PAMTw",
    };
    arrColletion[1] = {
      groupName: "П-102СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=AEhw6sPtX7xBFcmM/_TDOcXJ4_kT_YKG58c=",
      dataGroup: 102,
      groupSecondLink: "https://clck.ru/3PAMiT",
    };
    arrColletion[2] = {
      groupName: "П-103СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=a6n8zH226Aj2iZFLK8m9bJawsk7V52djoeo=",
      dataGroup: 103,
      groupSecondLink: "https://clck.ru/3NyTGk",
    };
    arrColletion[3] = {
      groupName: "П-104СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=hq5UdxsB4F8oVnwuto/3H_HYNEBjcOqqf_A=",
      dataGroup: 104,
      groupSecondLink: "https://clck.ru/3NyTYz",
    };
    arrColletion[4] = {
      groupName: "П-105СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=pzE_/zO19h194_tsp/aCVLpkMEhzKdpjlr4=",
      dataGroup: 105,
      groupSecondLink: "https://clck.ru/3NyTfN",
    };
    arrColletion[5] = {
      groupName: "П-106СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=mNp9fTKFG8g7LufJe_ujQJxpfuB06nC41Ko=",
      dataGroup: 106,
      groupSecondLink: "https://clck.ru/3NyTo4",
    };
    arrColletion[6] = {
      groupName: "П-107СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=1_W_xttNBML2ty3GeF3szSCCM2mFvms5faI=",
      dataGroup: 107,
      groupSecondLink: "https://clck.ru/3NyU3Y",
    };
    arrColletion[7] = {
      groupName: "П-108СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=UlNfXrsEWPsJDM5jQjnvhyCpHi60CpfbUKI=",
      dataGroup: 108,
      groupSecondLink: "https://clck.ru/3NyVZW",
    };
    arrColletion[8] = {
      groupName: "П-109СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=uAwRspqvCaOjDfFoKLMLH30HbiM2MJ9C9VU=",
      dataGroup: 109,
      groupSecondLink: "https://clck.ru/3NyXG4",
    };
    arrColletion[9] = {
      groupName: "П-110СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=Ju9bjUAMZEp_0ThL2oKLYJKmJD4GN/RZpqM=",
      dataGroup: 110,
      groupSecondLink: "https://clck.ru/3NyXPi",
    };
    arrColletion[10] = {
      groupName: "П-111СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=2C1V9dsy62RO9xMwaXP6tqRfMGsd6eaY/b4=",
      dataGroup: 111,
      groupSecondLink: "https://clck.ru/3NyXns",
    };
    arrColletion[11] = {
      groupName: "П-112СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=aggGIo2MVJrkpGlUEDxzyYFqpvZqGAjOpLo=",
      dataGroup: 112,
      groupSecondLink: "https://clck.ru/3NyXuo",
    };
    arrColletion[12] = {
      groupName: "П-113СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=Q4KXWo66PSUsRmgqNiHYNybJR2TluovgqQE=",
      dataGroup: 113,
      groupSecondLink: "https://clck.ru/3NyXyv",
    };
    arrColletion[13] = {
      groupName: "П-114СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=wwRgfyibK3JQIA4gytuqWEIDafbQrHdILpg=",
      dataGroup: 114,
      groupSecondLink: "https://clck.ru/3NyYLX",
    };
    arrColletion[14] = {
      groupName: "П-115СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=pHx/bzfB4tJimTjwtqQ00Awlj/KsG2gf9rE=",
      dataGroup: 115,
      groupSecondLink: "https://clck.ru/3NyYSf",
    };
    arrColletion[15] = {
      groupName: "П-116СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=6YSTNxV_nR0WwY83AhOTO5r2eqqzVMXAWPM=",
      dataGroup: 116,
      groupSecondLink: "https://clck.ru/3NyYzN",
    };
    arrColletion[16] = {
      groupName: "П-117СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=y7fI8Z73u3mso3NJzZIQAwlitLPRRiEunQg=",
      dataGroup: 117,
      groupSecondLink: "https://clck.ru/3NyqnY",
    };
    arrColletion[17] = {
      groupName: "П-118СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=uz5hFmurc7fhtgndlX2PoL1Vm2r8NFTij80=",
      dataGroup: 118,
      groupSecondLink: "https://clck.ru/3Nyr62",
    };
    arrColletion[18] = {
      groupName: "П-119СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=WHs42ter6nwtXHzUPb/qEeRii9ewmeXzJqo=",
      dataGroup: 119,
      groupSecondLink: "https://clck.ru/3NyrAi",
    };
    arrColletion[19] = {
      groupName: "П-120СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=DtBWH_gw4FMdARxlxwB1U4SfueT9PhGUrL4=",
      dataGroup: 120,
      groupSecondLink: "https://clck.ru/3NyrDq",
    };
    arrColletion[20] = {
      groupName: "П-121СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=Bk0nFZbjn2urrxgsjKLT3jdtrAkqbo5xMak=",
      dataGroup: 121,
      groupSecondLink: "https://clck.ru/3NyrH3",
    };
    arrColletion[21] = {
      groupName: "П-122СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=SJR2qLuou7LLvr1cG1FihvvwGKoyvxpIrdA=",
      dataGroup: 122,
      groupSecondLink: "https://clck.ru/3PANun",
    };
    arrColletion[22] = {
      groupName: "П-123СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=dvfvvJS5o1VWcQ3etMhMOkjrs4_4E/6pFgY=",
      dataGroup: 123,
      groupSecondLink: "https://clck.ru/3NyrPu",
    };
    arrColletion[23] = {
      groupName: "П-124СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=WR_sGHnBqpQjdQMmP1Cpwvi_zbPoOXCqwHM=",
      dataGroup: 124,
      groupSecondLink: "https://clck.ru/3NyrSm",
    };
    arrColletion[24] = {
      groupName: "П-125СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=T6Zgn/oXeA9zwpKNHtuYfXu3PNiJwuArgHE=",
      dataGroup: 125,
      groupSecondLink: "https://clck.ru/3NyrWw",
    };
    arrColletion[25] = {
      groupName: "П-126СД",
      groupLink:
        "https://sferum.ru/?p=messages&join=qWNc_K/Oqi9hS1vFVmEWXu1i6PxDym6WAs8=",
      dataGroup: 126,
      groupSecondLink: "https://clck.ru/3NyrYV",
    };

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