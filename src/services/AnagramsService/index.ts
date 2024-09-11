type LettersMap = {
  [key: string]: string[] | undefined
};

export enum ApiVersion {
  V1 = 1,
  V2 = 2
};

const processWordList = (wordList: string, apiVersion: number): Array<Array<string>> => {
  let words: string[] = (wordList as string).split(',');

  if (apiVersion === ApiVersion.V1) {
    words = words.map(word => word.toLowerCase());
  }

  const anagrams: Array<Array<string>> = groupAnagrams(words);

  return anagrams;
};

const groupAnagrams = (words: string[]): Array<Array<string>> => {
  let lettersMap: LettersMap = {};

  words.forEach((word: string) => {
    const letters: string = word.split('').sort().join('');

    if (!lettersMap[letters]) {
      lettersMap[letters] = [];
      lettersMap[letters].push(word);
      return;
    }

    lettersMap[letters].push(word);
  })

  return Object.values(lettersMap as object);
}

export default processWordList;