document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the saved text from localStorage
    const dynamicText = localStorage.getItem('dynamicText');

    // Update the text in CuteProject.html if it exists
    if (dynamicText) {
        const dynamicTextElement = document.getElementById('dynamicText');
        if (dynamicTextElement) {
            dynamicTextElement.innerText = dynamicText;
        }
    }
});

const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

// Functionality for the "No" button running away
noBtn.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// Make the "Yes" button go to yes.html on click
yesBtn.addEventListener('click', () => {
    window.location.href = 'yes.html';
});
