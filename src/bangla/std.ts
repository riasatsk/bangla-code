import { show } from "../main";
import { speakText } from "../main";
export const std = {
  __credits() {
    show("Riasat Sk");
  },
  ইনপুট(str: string) {
    return prompt(str);
  },
  লিখি(str: string) {
    show(str);
  },
  বলো(str: string) {
    speakText(str);
  },
};
