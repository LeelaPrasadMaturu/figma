function toggleTextBox() {
    // Select the text box
    const textBox = document.getElementById('getting-know-text');

    // Toggle visibility
    if (textBox.classList.contains('hidden')) {
        textBox.classList.remove('hidden');
        textBox.classList.add('visible');
    } else {
        textBox.classList.remove('visible');
        textBox.classList.add('hidden');
    }
}

