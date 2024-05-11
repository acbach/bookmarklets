javascript: (async function () {
    const elements = document.getElementsByClassName("segment-text");
    if (elements.length > 0) {
        let text = "";
        for (var i = 0; i < elements.length; i++) {
            text += elements[i].textContent.replace(/\n/g, '') + " ";
        }

        const chunkSize = 25000*3;
        for (let start = 0; start < text.length; start += chunkSize) {
            console.log(text.substring(start, start + chunkSize));

            console.log("------------------------------------------------");
            console.log("------------------------------------------------");
            console.log("------------------------------------------------");
            console.log("------------------------------------------------");
            console.log("------------------------------------------------");
            console.log("------------------------------------------------");
        }

    } else {
        alert('Transcription not found 😊. Go to description -> click show transcription');
    }
})();
