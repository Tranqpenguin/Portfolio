
document.addEventListener('DOMContentLoaded', function () {
    // This function runs when the DOM is fully loaded

    // Get all clickable elements
    var clickableElements = document.querySelectorAll('img');

    // Add a mouseover event listener to each clickable element
    clickableElements.forEach(function (element) {
        element.addEventListener('mouseover', function () {
            // Add a glowing effect on mouseover
            element.style.transition = 'box-shadow 0.3s';
            element.style.boxShadow = '0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f';
        });

        // Add a mouseout event listener to each clickable element
        element.addEventListener('mouseout', function () {
            // Remove the glowing effect on mouseout
            element.style.boxShadow = 'none';
        });
    });
});
