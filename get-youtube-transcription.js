javascript: (async function () {
    // Select the div by ID
    const div = document.getElementById("segments-container");

    // Check if the div exists
    if (div) {
        // Retrieve the text content of the div, replace newlines with an empty string, and return the result
        alert("See console for transcription");
        console.log(div.textContent.replace(/\n/g, ''));
    } else {
        // Return a message if the div does not exist
        alert('Transcription not found 😊');
    }
})();
