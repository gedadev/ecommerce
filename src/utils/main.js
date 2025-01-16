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

export const formatDate = (isoDate) => {
  const dateObject = new Date(isoDate);
  const date = dateObject.toLocaleDateString();
  const time = dateObject.toLocaleTimeString();

  return { date, time };
};
