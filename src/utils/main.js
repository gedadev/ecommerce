export const formatWord = (word) =>
  word ? word.charAt(0).toUpperCase() + word.slice(1) : null;

export const formatValue = (value) => value.split(" ").join("-").toLowerCase();

export const formatText = (value) =>
  value
    .split(/[ -]+/)
    .map((word) => formatWord(word))
    .join(" ");
