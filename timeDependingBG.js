function setBackgroundImageByTime() {
    const now = new Date();
    const hour = now.getHours();
    let imageUrl;

    if (hour >= 6 && hour < 18) {
        imageUrl = 'url("/Assets/SHILLING-day-bg.jpg")'; 
    } 
    else if (hour >= 18 && hour < 23) {
        imageUrl = 'url("/Assets/SHILLING-night-bg.jpg")'; 
    } 
    else if (hour >= 0 && hour < 6) {
        imageUrl = 'url("/Assets/SHILLING-night-bg.jpg")'; 
    }
    else {
        imageUrl = 'url("/Assets/SHILLING-night-bg.jpg")'; 
    }

    // Apply the background image to the desired element
    const element = document.body; // Or any other element
    element.style.backgroundImage = imageUrl;
}

// Call the function when the page loads
window.onload = setBackgroundImageByTime;

// Optionally, update the background image every sec
setInterval(setBackgroundImageByTime, 6000);