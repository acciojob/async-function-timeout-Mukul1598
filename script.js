//your JS code here. If required.

document.getElementById('btn').addEventListener('click', async function() {
    // Retrieve user input values
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value, 10);
    
    // Check if the delay is a valid number
    if (isNaN(delay) || delay < 0) {
        alert('Please enter a valid delay time.');
        return;
    }
    
    // Function to introduce delay
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    // Async function to handle the delay and display the message
    async function displayMessage() {
        await wait(delay);
        document.getElementById('output').innerText = text;
    }
    
    // Call the async function
    displayMessage();
});
