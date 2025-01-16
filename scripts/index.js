function replaceText() {
    const userInput = document.getElementById('userInput').value;

    // Save the user input in localStorage
    localStorage.setItem('dynamicText', userInput);

    // Optionally, update the text on the current page (index.html)
    document.getElementById('textToReplace').innerText = userInput;

    // Redirect to CuteProject.html after saving the text
    window.location.href = 'CuteProject.html';
}
