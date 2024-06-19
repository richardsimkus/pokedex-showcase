const toSentenceCase = (string) =>
  string.toLowerCase().charAt(0).toUpperCase() + string.toLowerCase().slice(1);

export default toSentenceCase;
