document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.getAttribute('data-value');
            handleInput(value);
        });
    });

    document.addEventListener('keydown', (event) => {
        const key = event.key;
        if (isFinite(key) || "+-*/.".includes(key)) {
            handleInput(key);
        } else if (key === 'Enter') {
            handleInput('=');
        } else if (key === 'Backspace') {
            handleInput('C');
        }
    });

    function handleInput(value) {
        if (value === 'C') {
            display.textContent = '';
        } else if (value === '=') {
            try {
                display.textContent = eval(display.textContent);
            } catch {
                display.textContent = 'Error';
            }
        } else {
            display.textContent += value;
        }
    }
});
