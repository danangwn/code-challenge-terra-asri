const emojiDictionary = {
  '🥷🏼': {
    start: 'Keep it secret',
    default: 'secret',
  },
  '🎊': {
    start: 'Party',
    default: 'celebration',
  },
  '☄️': {
    start: 'Boom',
    default: 'blast off',
  },
  '🎉': 'celebration',
  '💡': 'idea',
  '🚀': 'rocket',
};

function decodeEmojiMessage(message, dictionary) {
  let words = message.split(' ');
  return words
    .map((word, index) => {
      if (words[index].match(/[\.\!\?]\s*$/)) {
        var tempWord = words[index].replace(/[\.\!\?]/g, '');
        if (dictionary[tempWord]) {
          word = tempWord;
        }
      }

      if (dictionary[word]) {
        let context = 'default';
        if (index === 0 || words[index - 1].match(/[\.\!\?]\s*$/)) {
          context = 'start';
        }
        return emojiDictionary[word][context] || emojiDictionary[word].default;
      }
      return word;
    })
    .join(' ');
}

let encodedMessage =
  '🥷🏼! 🎊 for the 🥷🏼 birthday surprise! ☄️ to the party place!';
let decodedMessage = decodeEmojiMessage(encodedMessage, emojiDictionary);

console.log('Decoded Message:', decodedMessage);
