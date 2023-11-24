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
  try {
    execute(editor.innerText);
  } catch (error: any) {
    show(error.message);
  }
});

export function show(str: any) {
  const div = document.createElement("div");
  div.innerText = typeof str === "object" ? JSON.stringify(str) : str;
  terminal.appendChild(div);
}

clearTerminal.addEventListener("click", () => {
  terminal.innerHTML = "";
});
clearButton.addEventListener("click", () => {
  editor.textContent = "";
});
