import {handleImageClick} from './modal';

const cardTemplate = document.querySelector('#card-template').content;
const cardsContainer = document.querySelector('.places__list');

function createCard(cardData, onDelete) {
  function handleLikeButtonClick(evt) {
    evt.target.classList.toggle('card__like-button_is-active');
  }

  function handleCardImageClick(evt) {
    handleImageClick(evt);
  }

  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

  cardElement.querySelector('.card__title').textContent = cardData.name;
  const cardImage = cardElement.querySelector('.card__image');
  cardImage.alt = `Фотография места ${cardData.name};`
  cardImage.src = cardData.link;

  const deleteButton = cardElement.querySelector('.card__delete-button');
  deleteButton.addEventListener('click', onDelete);

  const listItemLike = cardElement.querySelector('.card__like-button');
  listItemLike.addEventListener('click', handleLikeButtonClick);

  cardImage.addEventListener('click', handleCardImageClick);

  return cardElement;
}

function deleteCard(event) {
  const cardListItem = event.target.closest('.card');
  cardListItem.remove();
}

function addCard(cardData) {
  cardsContainer.prepend(cardData);
}

export {createCard, deleteCard, addCard};