// settings.js
document.addEventListener('DOMContentLoaded', function () {
    // Check if background GIF setting exists in local storage
    const storedBackground = localStorage.getItem('backgroundGIF');
    if (storedBackground) {
        document.body.style.backgroundImage = `url(${storedBackground})`;
        document.getElementById('backgroundSelect').value = storedBackground;
    }
});

function changeBackgroundGIF() {
    const selectedBackground = document.getElementById('backgroundSelect').value;
    // Apply selected background GIF to the body background
    document.body.style.backgroundImage = `url(${selectedBackground})`;
    // Store selected background GIF in local storage
    localStorage.setItem('backgroundGIF', selectedBackground);
}
