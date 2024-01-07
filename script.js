document.addEventListener('DOMContentLoaded', function () {
    const counter = document.getElementById('counter');
    const increaseButton = document.getElementById('increase');
    const resetButton = document.getElementById('reset');
    const decreaseButton = document.getElementById('decrease');

    let count = 0;

    increaseButton.addEventListener('click', function () {
        count++;
        updateCounter();
    });

    resetButton.addEventListener('click', function () {
        count = 0;
        updateCounter();
    });

    decreaseButton.addEventListener('click', function () {
        if (count > 0) {
            count--;
            updateCounter();
        }
    });

    function updateCounter() {
        counter.textContent = count;
    }
});
