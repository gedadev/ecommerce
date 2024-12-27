export const formatWord = (word) =>
  word ? word.charAt(0).toUpperCase() + word.slice(1) : null;

export const formatValue = (value) =>
  value ? value.split(" ").join("-").toLowerCase() : "other";

export const formatText = (value) =>
  value
    ? value
        .split(/[ -]+/)
        .map((word) => formatWord(word))
        .join(" ")
    : "other";
