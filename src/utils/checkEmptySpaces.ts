export const checkEmptySpaces = (text: string) => {
  return text.replace(/\s/g, '').length;
};
