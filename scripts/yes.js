// Function to create confetti
function createConfetti() {
    for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * window.innerWidth}px`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random color
        document.body.appendChild(confetti);

        // Animate confetti falling
        setTimeout(() => {
            confetti.style.opacity = '1';
        }, 10);

        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }
}

// Add celebration text
document.addEventListener('DOMContentLoaded', () => {
    const dynamicText = localStorage.getItem('dynamicText');
    if (dynamicText) {
        document.querySelector('.celebrate').innerText = `Yay!!! 🎉 ${dynamicText}`;
    }
    createConfetti();
});
