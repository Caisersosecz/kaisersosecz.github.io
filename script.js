// script.js for GLUKÓZA app

// Handles form submission and stores glucose readings
const glucoseReadings = [];

// Function to handle submission
function submitReading() {
    const form = document.getElementById('glucoseForm');
    const reading = form.elements['glucoseReading'].value;
    const date = new Date();

    if (reading) {
        const readingEntry = { 
            id: date.getTime(), // unique ID based on time 
            value: reading,
            date: date.toUTCString()
        };
        glucoseReadings.push(readingEntry);
        displayReadings();
        form.reset();
    } else {
        alert('Please enter a valid glucose reading.');
    }
}

// Function to display readings log
function displayReadings() {
    const log = document.getElementById('readingsLog');
    log.innerHTML = '';

    glucoseReadings.forEach(reading => {
        const entry = document.createElement('li');
        entry.textContent = `Reading: ${reading.value}, Date: ${reading.date}`;
        log.appendChild(entry);
    });
}

// Function to clear readings log
function clearReadings() {
    glucoseReadings.length = 0; // clear the array
    displayReadings();
}

// Event listener for form submission
document.getElementById('glucoseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    submitReading();
});

// Event listener for clear button
document.getElementById('clearButton').addEventListener('click', clearReadings);