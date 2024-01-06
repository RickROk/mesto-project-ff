//modals 

function openPopup(modal) { 
    modal.classList.add('popup_is-opened'); 
    document.addEventListener('keyup', handleEsc); 
  } 


  const popupImgPic = document.querySelector('.popup__image');
  const popupImgText = document.querySelector('.popup__caption');
  const imageModal = document.querySelector('.popup_type_image');


  const handleImageClick = (evt) => {
    popupImgPic.src = evt.target.src;
    popupImgText.textContent = evt.target.alt;
    openPopup(imageModal);
  } 


function closeModal(popup) { 
    popup.classList.remove('popup_is-opened'); 
    document.removeEventListener('keyup', handleEsc); 
  } 

function handleEsc (event){ 
  if (event.key === 'Escape'){ 
    const activePopup = document.querySelector('.popup_is-opened'); 
    closeModal(activePopup); 
  } 
}

export {handleImageClick, closeModal, openPopup};