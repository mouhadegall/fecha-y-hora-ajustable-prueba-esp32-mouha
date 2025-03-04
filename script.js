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
    startButton.addEventListener('click', function() {
        const year = document.getElementById('year').value;
        const month = document.getElementById('month').value;
        const day = document.getElementById('day').value;
        const hour = document.getElementById('hour').value;
        const minute = document.getElementById('minute').value;
        const second = document.getElementById('second').value;

        const targetTime = new Date(year, month - 1, day, hour, minute, second);
        setInterval(function() {
            const now = new Date();
            if (now >= targetTime) {
                alert('¡El tiempo ha comenzado!');
            }
        }, 1000);
    });
});
