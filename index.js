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

// tutorials.forEach(titleCased)
// const titleCased = () => {
// element  = element.split(" ");

// element.map(capitalize).join(" ")

//   return tutorials
// }

// function capitalize(element){
// element[0].toUpperCase() + element.slice(1).toLowerCase()
// }

const titleCased = () => {
  return tutorials.map(element =>
  {const elements = element.split(" ");
  const elementsCaps = elements.map((element) => element.charAt(0).toUpperCase()
              + element.slice(1));
              const tutorials =elementsCaps.join(" ");
            return tutorials });
}