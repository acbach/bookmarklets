javascript: (async function () {
    const elements = document.getElementsByClassName("segment-text");
    if (elements.length>0) {
        alert("See console for transcription");
        let text = "";
        for(var i = 0; i<elements.length-1; i++){
            text = text + elements[i].textContent.replace(/\n/g, '') + " ";
        }
        console.log(text);
    } else {
        alert('Transcription not found 😊. Go to description -> click show transcription');
    }
})();
