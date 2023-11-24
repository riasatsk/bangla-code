import { syntaxMap } from "./syntax.js";

export function convertToJS(code: string) {
  for (let syntax in syntaxMap) {
    let wordToReplace = syntax;
    let replacementWord = syntaxMap[syntax];

    // Using a regular expression with a capturing group to match the word outside quotes
    let regex = new RegExp(`([^"]|^)${wordToReplace}([^"]|$)`, "g");
    code = code.replace(regex, `$1${replacementWord}$2`);
  }
  return code;
}
