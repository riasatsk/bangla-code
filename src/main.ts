import "./style.css";
import { execute } from "./bangla/bangla";
const editor = document.getElementById("editor") as HTMLDivElement;
const run = document.getElementById("runButton") as HTMLButtonElement;
const terminal = document.getElementById("terminal") as HTMLDivElement;
const clearTerminal = document.getElementById(
  "clearTerminal"
) as HTMLButtonElement;
const clearButton = document.getElementById("clearButton") as HTMLButtonElement;

editor.focus();
run.addEventListener("click", () => {
  execute(editor.innerText);
});

export function show(str: any) {
  const div = document.createElement("div");
  div.innerText = typeof str === "object" ? JSON.stringify(str) : str;
  terminal.appendChild(div);
}

export function speakText(text: string) {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "bn-BD";
    speechSynthesis.speak(utterance);
  } else {
    alert(
      "Text-to-speech not supported in your browser. Please use a different browser."
    );
  }
}

clearTerminal.addEventListener("click", () => {
  terminal.innerHTML = "";
});
clearButton.addEventListener("click", () => {
  editor.textContent = "";
});
