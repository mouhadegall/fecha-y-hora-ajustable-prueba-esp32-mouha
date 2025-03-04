document.addEventListener('DOMContentLoaded', function() {
    function populateSelect(selector, start, end) {
        const select = document.getElementById(selector);
        for (let i = start; i <= end; i++) {
            let option = document.createElement('option');
            option.value = i;
            option.textContent = i;
            select.appendChild(option);
        }
    }

    populateSelect('year', 1900, 2100);
    populateSelect('month', 1, 12);
    populateSelect('day', 1, 31);
    populateSelect('hour', 0, 23);
    populateSelect('minute', 0, 59);
    populateSelect('second', 0, 59);

    const startButton = document.getElementById('start-button');
    let interval;
    startButton.addEventListener('click', function() {
        if (interval) {
            clearInterval(interval);
        }

        const year = document.getElementById('year').value;
        const month = document.getElementById('month').value - 1; // Month index is 0-based in JavaScript
        const day = document.getElementById('day').value;
        const hour = document.getElementById('hour').value;
        const minute = document.getElementById('minute').value;
        const second = document.getElementById('second').value;

        let currentTime = new Date(year, month, day, hour, minute, second);
        interval = setInterval(function() {
            currentTime.setSeconds(currentTime.getSeconds() + 1);
            document.getElementById('current-time').textContent = currentTime.toLocaleString();
        }, 1000);
    });
});
