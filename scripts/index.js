// @todo: Темплейт карточки
const places = document.querySelector('.places');
const placeList = places.querySelector('.places__list');
const cardTemplate = document.querySelector("#card-template").content;
const deleteCard = (nodeElement) => nodeElement.remove();

const createCard = ({ name, link, deleteCard }) => {  
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardImageElement = cardElement.querySelector(".card__image");  
  cardElement.querySelector(".card__title").textContent = name;
  cardImageElement.src = link;
  cardImageElement.alt = `Фото ${name}`;

  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardDeleteButton.addEventListener("click", () => deleteCard(cardElement));

  return cardElement;
};

initialCards.forEach(({name, link}) =>
  placeList.append(createCard({deleteCard, name, link}))
);

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу
