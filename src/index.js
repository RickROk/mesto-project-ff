import './pages/index.css';
import {initialCards} from './components/cards';
import {openPopup, closeModal} from './components/modal';
import {createCard, deleteCard} from './components/card';

const nameInput = document.querySelector('#name');
const linkInput = document.querySelector('#link');
const profilePopup = document.querySelector('.profile-popup');
const popupImgPic = document.querySelector('.popup__image');
const popupImgText = document.querySelector('.popup__caption');
const handleImageClick = (evt) => {
  popupImgPic.src = evt.target.src;
  popupImgText.textContent = evt.target.alt;
  openPopup(imageModal);
} 

// function handleCardImageClick(evt) {
//   handleImageClick(evt);
// }

const cardsContainer = document.querySelector('.places__list');
const profileName = document.getElementById('name'); 
const profileJob = document.getElementById('job');
const inputName = document.getElementById('inputName'); 
const inputJob = document.getElementById('inputJob');
const formElement = profilePopup.querySelector('.popup__form'); 

//modals
const editModal = document.querySelector('.popup_type_edit'); 
const addCardModal = document.querySelector('.popup_type_new-card');
const imageModal = document.querySelector('.popup_type_image');

//open modal buttons 
const openEditModalButton= document.querySelector('.profile__edit-button');
const openAddCardModalButton= document.querySelector('.profile__add-button'); 
const formElementAdd = document.querySelector('#popup-add__form'); 

initialCards.forEach((item) => {
  const cardData = createCard(item, deleteCard, openCardImage);
  addCard(cardData);
})

formElement.addEventListener('submit', function(evt) { 
  evt.preventDefault(); 
  closeModal(editModal); 
  profileName.textContent = inputName.value; 
  profileJob.textContent = inputJob.value; 
  formElement.reset(); 
});  

// добавления карточек 

formElementAdd.addEventListener('submit', function(ev) { 
  ev.preventDefault(); 
  closeModal(addCardModal);  
  
  const cardData = createCard({name: nameInput.value, link: linkInput.value, alt: linkInput.alt}, deleteCard);
  addCard(cardData);
  formElementAdd.reset(); 
});

const popupList = Array.from(document.querySelectorAll('.popup')); 

popupList.forEach((popup) => { 
  popup.addEventListener('mouseup', (event) => { 
    const targetClassList = event.target.classList; 
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close')) { 
      closeModal(popup);
    }
  })
})

//профиль
openEditModalButton.addEventListener('click', () => { 
  inputName.value = profileName.textContent; 
  inputJob.value = profileJob.textContent; 
  openPopup(editModal); 
}) 

// добавления карточек 
openAddCardModalButton.addEventListener('click', () => { 
  openPopup(addCardModal); 
})

function addCard(cardData) {
  cardsContainer.prepend(cardData);
}

// функция popup для карточек в index.js???
const cardTemplate = document.querySelector('#card-template').content;
const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
const cardImage = cardElement.querySelector('.popup__image');
const cardType = cardElement.querySelector('.popup_type_image');

function openCardImage(data){
  cardType.src = data.link;  
  cardImage.alt = data.name;  
  cardDiscription.textContent = data.name;
    
  openModal(cardType);
}

export{cardsContainer};