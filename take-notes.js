javascript: (function () {
  const text = prompt("Insert your document text here");
  console.log("text", text);
  const chunks = text.match(/.{1,1000}/gs);
  console.log(chunks);

  function isGenerating() {
    return document.querySelectorAll(".absolute.p-1")[0].innerHTML.indexOf('<div class="text-2xl"><span') > -1;
  }

  for (let index = 0; index < array.length; index++) {
    const promptForChatGPT = "Create notes for the following text using a bulletlist. Text:" + chunks[0];
    const element = document.querySelectorAll(".resize-none")[0];
    element.value = promptForChatGPT;
    element.dispatchEvent(new Event("input", { bubbles: true }));
    document.querySelectorAll(".absolute.p-1")[0].click();

    let running = running();

    while (running) {
      setTimeout(() => {
        running = isGenerating();
      }, 1000);
    }
  }
})();
