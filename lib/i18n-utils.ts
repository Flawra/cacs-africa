import { LocalizedText } from "./types";

export function pick(text: LocalizedText, locale: string): string {
  return locale === "en" ? text.en : text.fr;
}
