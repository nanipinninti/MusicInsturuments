const drumSounds = {
    65: './src/audio/BassDrum.mp3',
    83: './src/audio/HiHat.mp3',
    68: './src/audio/SnareDrum.mp3',
    70: './src/audio/TomTom.mp3',
    71: 'sounds/tom2.wav',
};

function playSound(keyCode) {
    const audio = new Audio(drumSounds[keyCode]);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

function addEffect(keyCode) {
    const button = document.querySelector(`.drum[data-key="${keyCode}"]`);
    if (button) {
        button.classList.add('active');
        setTimeout(() => button.classList.remove('active'), 100);
    }
}

window.addEventListener('keydown', (e) => {
    playSound(e.keyCode);
    addEffect(e.keyCode);
});

document.querySelectorAll('.drum').forEach(button => {
    button.addEventListener('click', () => {
        const keyCode = button.getAttribute('data-key');
        playSound(keyCode);
        addEffect(keyCode);
    });
});
