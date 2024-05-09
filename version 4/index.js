document.addEventListener('DOMContentLoaded', function() {
    // Function to display a welcome message based on the time of day
    function displayWelcomeMessage() {
        var date = new Date();
        var hour = date.getHours();
        var welcomeMessage;

        if (hour >= 5 && hour < 12) {
            welcomeMessage = "Good morning!";
        } else if (hour >= 12 && hour < 18) {
            welcomeMessage = "Good afternoon!";
        } else {
            welcomeMessage = "Good evening!";
        }

        var welcomeElement = document.createElement('p');
        welcomeElement.textContent = welcomeMessage;

        var heroSection = document.querySelector('.hero');
        heroSection.insertBefore(welcomeElement, heroSection.firstChild);
    }

    // Call the function to display the welcome message
    displayWelcomeMessage();

    // Function to handle click event on the "Log In" button
    function handleLoginButtonClick(event) {
        event.preventDefault(); // Prevent the default action of the link

        console.log("Log In button clicked!"); // Log a message to the console
    }

    // Get a reference to the "Log In" button
    var loginButton = document.querySelector('.btn');

    // Add event listener to the "Log In" button
    loginButton.addEventListener('click', handleLoginButtonClick);
});
