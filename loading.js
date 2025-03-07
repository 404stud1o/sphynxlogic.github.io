// Create a splat element with random properties simulating “jizz” that sticks then slides down.
function createSplat() {
    const splat = document.createElement('div');
    splat.className = 'splat';
    const size = Math.random() * 40 + 20; // size between 20px and 60px
    splat.style.width = size + 'px';
    splat.style.height = size + 'px';
    // Set a random starting position within the viewport.
    const startX = Math.random() * (window.innerWidth - size);
    const startY = Math.random() * (window.innerHeight - size);
    splat.style.left = startX + 'px';
    splat.style.top = startY + 'px';
    // Set a random slide distance (simulate how far the jizz runs down the glass)
    const slideDistance = Math.floor(Math.random() * 150 + 50) + 'px'; // 50px to 200px downward
    splat.style.setProperty('--slideDistance', slideDistance);
    // Randomize a slight delay so not all splats start at once.
    splat.style.animationDelay = Math.random() * 1 + 's';
    return splat;
}

    // Trigger the splat animations.
function triggerSplats() {
    const splatContainer = document.getElementById('splat-container');
    const splatCount = 30; // Number of splats to generate.
    for (let i = 0; i < splatCount; i++) {
        const splat = createSplat();
        splatContainer.appendChild(splat);
    }
    // Optionally, you can keep the splats on screen or remove them after a long duration.
    // remove after 10 seconds:
    setTimeout(() => {
        splatContainer.innerHTML = '';
    }, 10000);
}

    // Animate the loading progress bar.
let progress = 0;
const progressBar = document.querySelector('.loading-progress');
const progressInterval = setInterval(() => {
    progress += 1;
    progressBar.style.width = progress + '%';
    if (progress >= 100) {
        clearInterval(progressInterval);
    }
}, 30);

    // Simulate loading: After 15 seconds, hide the loading screen and trigger the splat effect.
setTimeout(() => {
    document.querySelector('.loading-container').style.display = 'none';
    document.querySelector('#glass-surface').style.display = 'none';
    document.querySelector('.title').style.display = 'block';
    // triggerSplats();
    // AnimationEffect(FadeOut, 1000);
}, 15000);