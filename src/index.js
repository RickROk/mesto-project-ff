import './pages/index.css';
import {initialCards} from './components/cards';
import {openPopup, closeModal} from './components/modal';
import {createCard, deleteCard} from './components/card';

const showEditProfile = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.profile-popup');




const popupImgPic = document.querySelector('.popup__image');
const popupImgText = document.querySelector('.popup__caption');

const handleImageClick = (evt) => {
  popupImgPic.src = evt.target.src;
  popupImgText.textContent = evt.target.alt;
  openPopup(imageModal);
} 

function handleCardImageClick(evt) {
  handleImageClick(evt);
}



const popupEdit = document.querySelector('.popup_type_edit'); 
const popupAddCard = document.querySelector('.popup_type_new-card'); 
const popupImage = document.querySelector('.popup_type_image'); 

const popupClose = document.querySelector('.popup__close'); 
const cardsContainer = document.querySelector('.places__list');
const profileName = document.getElementById('name'); 
const profileJob = document.getElementById('job');

const inputName = document.getElementById('inputName'); 
const inputJob = document.getElementById('inputJob'); 
const popup = document.querySelector('.popup');
const formElement = profilePopup.querySelector('.popup__form'); 

//modals
const editModal = document.querySelector('.popup_type_edit'); 
const addCardModal = document.querySelector('.popup_type_new-card');
const imageModal = document.querySelector('.popup_type_image');

//open modal buttons 
const openEditModalButton= document.querySelector('.profile__edit-button');
const openAddCardModalButton= document.querySelector('.profile__add-button');

//modal buttons 
const closeEditModalButton= editModal.querySelector('.popup__close');
const closeAddCardModalButton= addCardModal.querySelector('.popup__close');
const closeImageModalButton= imageModal.querySelector('.popup__close');

//popup добавления фоток 
const popupAdd = document.querySelector('.popup-add'); 
const formElementAdd = document.querySelector('#popup-add__form'); 
const showImageAdd = document.querySelector('.profile__add'); 





initialCards.forEach((item) => {
  const cardData = createCard(item, deleteCard);
  addCard(cardData);
})


// редактирование профиля 

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
 
  const nameInput = document.querySelector('#name');
  const linkInput = document.querySelector('#link');
  const cardData = createCard({name: nameInput.value, link: linkInput.value, alt: linkInput.alt}, deleteCard);
  addCard(cardData);
  formElementAdd.reset(); 
});

const popupList = Array.from(document.querySelectorAll('.popup')); // найдем все попапы на странице

popupList.forEach((popup) => { // итерируем массив. объявляя каждый попап в переменную popup
  popup.addEventListener('mouseup', (event) => { // на каждый попап устанавливаем слушателя события
    const targetClassList = event.target.classList; // запишем в переменную класс элемента, на котором произошло событие
    if (targetClassList.contains('popup') || targetClassList.contains('popup__close')) { // проверяем наличие класса попапа ИЛИ кнопки закрытия
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

export{cardsContainer, handleCardImageClick};