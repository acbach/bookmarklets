javascript: (async function () {
    const div = document.getElementById("segments-container");
    if (div) {
        alert("See console for transcription");
        console.log(div.textContent.replace(/\n/g, ''));
    } else {
        alert('Transcription not found 😊. Go to description -> click show transcription');
    }
})();
