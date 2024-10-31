function showImage(imageSrc) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('imagePopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('imagePopup').style.display = 'none';
}

