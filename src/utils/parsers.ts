export const numberToString = (number: number) => {
  if (number >= 100) return `${number}`;
  if (number >= 10) return `0${number}`;
  return `00${number}`;
};
