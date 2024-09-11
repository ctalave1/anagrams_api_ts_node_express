export var ApiVersion;
(function (ApiVersion) {
    ApiVersion[ApiVersion["V1"] = 1] = "V1";
    ApiVersion[ApiVersion["V2"] = 2] = "V2";
})(ApiVersion || (ApiVersion = {}));
;
const processWordList = (wordList, apiVersion) => {
    let words = wordList.split(',');
    if (apiVersion === ApiVersion.V1) {
        words = words.map(word => word.toLowerCase());
    }
    const anagrams = groupAnagrams(words);
    return anagrams;
};
const groupAnagrams = (words) => {
    let lettersMap = {};
    words.forEach((word) => {
        const letters = word.split('').sort().join('');
        if (!lettersMap[letters]) {
            lettersMap[letters] = [];
            lettersMap[letters].push(word);
            return;
        }
        lettersMap[letters].push(word);
    });
    return Object.values(lettersMap);
};
export default processWordList;
