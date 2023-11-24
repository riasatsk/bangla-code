import { show } from "../main";
import { speakText } from "../main";
export const std = {
  ইনপুট(str: string) {
    prompt(str);
  },
  লিখি(str: string) {
    show(str);
  },
  বলো(str: string) {
    speakText(str);
  },
};
