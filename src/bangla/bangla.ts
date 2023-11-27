import { convertToJS } from "./replacer.js";

export function execute(code: string) {
  const paresedCode = convertToJS(code);
  const main = new Function(
    `${paresedCode}
  function লিখি(str) {
  const terminal = document.getElementById("terminal");
  const div = document.createElement("div");
  div.innerText = typeof str === "object" ? JSON.stringify(str) : str;
  terminal.appendChild(div);
}
function বলো(str) {
  speakText(str);
}

function speakText(text) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  } else {
    alert(
      "Text-to-speech not supported in your browser. Please use a different browser."
    );
  }
}
function ইনপুট(str) {
  return prompt(str);
}
function রান্ডম(Max) {
  return Math.ceil(Math.random() * Max);
}
 `
  );
  main();
}

