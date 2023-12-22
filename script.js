document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const convertBtn = document.getElementById('convert-btn');

    // Check Web Speech API support
    if ('speechSynthesis' in window) {
        convertBtn.addEventListener('click', () => {
            const textToSpeech = new SpeechSynthesisUtterance(textInput.value);
            speechSynthesis.speak(textToSpeech);
        });
    } else {
        // Web Speech API is not supported
        alert('Web Speech API is not supported in your browser.');
    }
});