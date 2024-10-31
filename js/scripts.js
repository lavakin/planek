function showFloor(floorNumber) {
    const floor1 = document.getElementById('floor1');
    const floor2 = document.getElementById('floor2');

    if (floorNumber === "1") {
        floor1.style.display = 'inline-block';
        floor2.style.display = 'none';
    } else if (floorNumber === "2") {
        floor1.style.display = 'none';
        floor2.style.display = 'inline-block';
    }
}

function showImage(imageSrc) {
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');

    if (popup && popupImage) {
        popupImage.src = imageSrc;
        popup.style.display = 'block';
    }
}

function closePopup() {
    const popup = document.getElementById('imagePopup');
    if (popup) popup.style.display = 'none';
}
