import { sanitize } from "dompurify";

function createMarkup(dirty) {
  return { __html: sanitize(dirty) };
}

export { createMarkup };
