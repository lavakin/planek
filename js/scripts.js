// Function to show the selected floor
function showFloor(floorId) {
    // Hide all floor plans
    document.querySelectorAll('.floor-plan').forEach(floor => floor.style.display = 'none');
    
    // Show the selected floor based on the dropdown value
    const selectedFloor = document.getElementById(floorId);
    if (selectedFloor) {
        selectedFloor.style.display = 'inline-block';
    }
}

// Function to show the image in the popup
function showImage(imageSrc) {
    const popup = document.getElementById('imagePopup');
    const popupImage = document.getElementById('popupImage');

    if (popup && popupImage) {
        popupImage.src = imageSrc;
        popup.style.display = 'flex';
    }
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('imagePopup');
    if (popup) popup.style.display = 'none';
}


window.onload = function() {
    showFloor('floor1');  // Ensure the first floor is displayed initially
    document.getElementById('floorSelect').value = 'floor1';  // Set dropdown to First Floor
};