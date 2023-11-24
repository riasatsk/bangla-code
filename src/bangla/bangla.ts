import { convertToJS } from "./replacer.js";
import { std } from "./std.js";

export function execute(code) {
  const paresedCode = convertToJS(code);
  const main = new Function(`${paresedCode}`);
  const mainWithSTD = main.bind(std);
  mainWithSTD();
}
