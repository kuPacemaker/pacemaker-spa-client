export const startUpperCase = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const removeTag = (string) => string.replace(/<(.|\n)*\/.*>/g, '');

export const excludeNonASCII = (string, extended = false) =>
  string.replace(extended ? /[^\x00-\xFF]/g : /[^\x00-\x7F]/g, '');

export const checkIsASCII = (string, extended = false) =>
  (extended ? /^[\x00-\xFF]*$/ : /^[\x00-\x7F]*$/).test(string);

export const regularizeString = (string) => excludeNonASCII(removeTag(string));
