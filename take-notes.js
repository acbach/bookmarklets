javascript: (async function () {
  const text = prompt("Insert your document text here");
  console.log("text", text);
  const chunks = text.match(/.{1,1000}/gs);
  console.log(chunks);
  function isGenerating() {
    return document.querySelectorAll(".absolute.p-1")[0].innerHTML.indexOf('<div class="text-2xl"><span') > -1;
  }
  function isSleeping() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  }
  for (let index = 0; index < chunks.length; index++) {
    let generating = isGenerating();
    while (generating) {
      await isSleeping();
      generating = isGenerating();
    }
    const promptForChatGPT = "Create notes for the following text using a bulletlist. Text:" + chunks[index];
    const element = document.querySelectorAll(".resize-none")[0];
    element.value = promptForChatGPT;
    element.dispatchEvent(new Event("input", { bubbles: true }));
    document.querySelectorAll(".absolute.p-1")[0].click();
  }
})();
