const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(function(key) {
//   return key.;
// });

// const titleCased = tutorials.map(key => key.titleCased);

function wordCapitalizer(word) {
  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.slice(1);
  return firstLetter + restOfWord
}

function sentenceCapitalizer(sentence){
  return sentence.split(" ").map(wordCapitalizer).join(" ")
//  const arr = sentence.split(" ").map(wordCapitalizer);
//  return arr.join(" ")
}

function titleCased(){
  const arrayCapitalizer = tutorials.map(sentenceCapitalizer);
  return arrayCapitalizer
}