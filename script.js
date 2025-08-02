const terminalOutput = document.getElementById('terminal-output');
const cursor = document.getElementById('cursor');
const dataDisplay = document.getElementById('data-display');
let commandQueue = [];
let currentIndex = 0;
let interval;

function typeCommand(command) {
    terminalOutput.innerHTML += `<div>${command}</div>`;
    currentIndex++;
    if (currentIndex < commandQueue.length) {
        setTimeout(() => typeCommand(commandQueue[currentIndex]), 1000);
    } else {
        clearInterval(interval);
        cursor.style.display = 'none';
    }
}

function startTyping() {
    cursor.style.display = 'inline';
    commandQueue = [
        'Fetching OSINT data...',
        'Analyzing data...',
        'Building visualizations...',
        'Done!'
    ];
    currentIndex = 0;
    typeCommand(commandQueue[currentIndex]);
}

function updateData() {
    const randomData = Math.floor(Math.random() * 100);
    dataDisplay.innerHTML = `Current Threat Level: ${randomData}%`;
}

function startDataUpdates() {
    updateData();
    setInterval(updateData, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    startTyping();
    startDataUpdates();
    interval = setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === '1' ? '0' : '1';
    }, 500);
});
```

Make sure to have an HTML structure with elements having IDs `terminal-output`, `cursor`, and `data-display` for this code to function correctly.