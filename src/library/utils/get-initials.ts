/** @format */

/**
 * Function, which formats initial letters of words in given string.
 */
export const getInitials = (sentence = ""): string => {
  // When sentence is shorter or equals of 2 symbols.
  if (sentence.length <= 2) {
    return sentence.toUpperCase();
  }
  // When sentence is longer than 3 symbols.
  else if (sentence.length > 3) {
    const words = sentence.split(" ");
    if (words.length >= 2) {
      return words.map((word) => word.slice(0, 1).toUpperCase()).join("");
    }
    return words.map((word) => word.slice(0, 2).toUpperCase()).join("");
  }
  return "";
};
