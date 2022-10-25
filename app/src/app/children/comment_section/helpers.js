import { LinkLikeText } from "../shared";

export const charCounter = (word, char) => {
  const charToFind = new RegExp(char, "g");
  return (word.match(charToFind) || []).length;
};

export const getHashtagText = (textToConvert) => {
  const newText = textToConvert.replaceAll("\n", " \n ");
  const textAsArray = newText.split(" ");
  return textAsArray.map((word) => {
    if (word.startsWith("#") && charCounter(word, "#") === 1) {
      return (
        <>
          <LinkLikeText>{word}</LinkLikeText>{" "}
        </>
      );
    }
    if (word.startsWith("@") && charCounter(word, "@") === 1) {
      return (
        <>
          <LinkLikeText>{word}</LinkLikeText>{" "}
        </>
      );
    }
    if (word === "\n") {
      return <br />;
    }
    return <>{word} </>;
  });
};
