function setBackgroundImageByTime() {
    const now = new Date();
    const hour = now.getHours();
    let imageUrl;

    // 0600 - 1800, Day
    if (hour >= 6 && hour < 18) {
        imageUrl = 'url("/Assets/SHILLING-day-bg.jpg")'; 
    } 
    // 1800 - 0600 and all other occasions, Night
    else if (hour >= 18 && hour < 23) {
        imageUrl = 'url("/Assets/SHILLING-night-bg.jpg")'; 
    } 
    else if (hour >= 0 && hour < 6) {
        imageUrl = 'url("/Assets/SHILLING-night-bg.jpg")'; 
    }
    else {
        imageUrl = 'url("/Assets/SHILLING-night-bg.jpg")'; 
    }

    // Apply the background image to the header background
    const element = document.body;
    element.style.backgroundImage = imageUrl;
}

// Call the function when the page loads
window.onload = setBackgroundImageByTime;

// Update the background image every second
setInterval(setBackgroundImageByTime, 6000);