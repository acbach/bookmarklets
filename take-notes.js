javascript: (async function () {
  const text = prompt("Insert your document text here");
  console.log("text", text);
  const chunks = text.match(/.{1,10000}/gs);
  console.log(chunks);
  function isGenerating() {
    return document.querySelectorAll(".absolute.p-1")[0].innerHTML.indexOf('<div class="text-2xl"><span') > -1;
  }
  function sleep(milliseconds) {
    if (typeof milliseconds === "undefined") {
      milliseconds = 10000;
    }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, milliseconds);
    });
  }
  for (let index = 0; index < chunks.length; index++) {
    let generating = isGenerating();
    while (generating) {
      await sleep();
      generating = isGenerating();
    }
    const promptForChatGPT = "Create notes for the following paper using a bulletlist.\nText section from paper: " + chunks[index].replace(/(\r\n|\n|\r)/gm, " ");
    const element = document.querySelectorAll(".resize-none")[0];
    await sleep(1000);
    element.value = promptForChatGPT;
    await sleep(1000);
    document.querySelectorAll(".absolute.p-1")[0].click();
    await sleep(1000);
  }
})();
