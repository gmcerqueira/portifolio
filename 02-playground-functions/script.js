// EN - Verify the return from two booleans
// PT-BR - Verifica retorno de dois valores booleanos
function comparBoolean(param1, param2) {
  return param1.value === 'true' && param2.value === 'true';
}
const booleanInput1 = document.querySelector('#boolean1');
const booleanInput2 = document.querySelector('#boolean2');
const booleanBtn = document.querySelector('#check-boolean');
const booleanResponse = document.querySelector('#boolean-response');
booleanBtn.addEventListener('click', () => {
  booleanResponse.innerHTML = comparBoolean(booleanInput1, booleanInput2);
});

const invalidInput = 'invalid input!';
// EN - Calculates area of any given triangle
// PT-BR - Calcula a área de um triângulo
function calcTriangleArea(tBase, tHeight) {
  const base = parseInt(tBase.value, 10);
  const height = parseInt(tHeight.value, 10);
  if (base && height) return (base * height) / 2;
  return invalidInput;
}
const triangleInput1 = document.querySelector('#triangle-base');
const triangleInput2 = document.querySelector('#triangle-height');
const triangleBtn = document.querySelector('#check-triangle');
const triangleResponse = document.querySelector('#triangle-response');
triangleBtn.addEventListener('click', () => {
  triangleResponse.innerHTML = calcTriangleArea(triangleInput1, triangleInput2);
});

// EN - Separate words in a sentence between spaces
// PT-BR - Dividir a frase nos espaços entre as palavras
function splitSentence(sentence) {
  const trimSentence = sentence.value.trim();
  if (trimSentence) return `[ ${trimSentence.split(' ')} ]`;
  return invalidInput;
}
const sentenceInput = document.querySelector('#sentence');
const sentenceBtn = document.querySelector('#check-sentence');
const sentenceResponse = document.querySelector('#sentence-response');
sentenceBtn.addEventListener('click', () => {
  sentenceResponse.innerHTML = splitSentence(sentenceInput);
});

// EN - Receives array of strings and return a new string with last item and first item from the original array, regardless of the size.
// PT-BR - Receber uma array de strings e retornar uma string com o formato 'ÚLTIMO ITEM, PRIMEIRO ITEM', independente do tamanho da array.
function concatName(names) {
  const arrNames = names.value.split(/,\s*|\s/);
  if (arrNames.length >= 2) return `${arrNames[arrNames.length - 1]}, ${arrNames[0]}`;
  return invalidInput;
}
const namesInput = document.querySelector('#names');
const namesBtn = document.querySelector('#check-names');
const namesResponse = document.querySelector('#names-response');
namesBtn.addEventListener('click', () => {
  namesResponse.innerHTML = concatName(namesInput);
});

// EN - Return points from a team from number of victories(3pts) and ties(1pt)
// PT-BR - Retornar a pontuação de um time a partir do número de vitórias(3pts) e empates(1pt)
function footballPoints(wins, ties) {
  const teamWins = parseInt(wins.value, 10);
  const teamTies = parseInt(ties.value, 10);
  if (teamWins && teamTies) return `${teamWins * 3 + teamTies}`;
  return invalidInput;
}
const victoriesInput = document.querySelector('#victories');
const tiesInput = document.querySelector('#ties');
const pointsBtn = document.querySelector('#check-points');
const pointsResponse = document.querySelector('#points-response');
pointsBtn.addEventListener('click', () => {
  pointsResponse.innerHTML = footballPoints(victoriesInput, tiesInput);
});

// EN - Return the number of times that the highest number from a array appears
// PT-BR - Retornar a quantidades de vezes que o maior número de um array se repete
function highestCount(numbers) {
  let higherNumber = 0;
  let counter = 0;
  const arrNumbers = numbers.value.trim().split(/\s*,\s*|\s/);
  console.log(arrNumbers);
  for (let i = 0; i < arrNumbers.length; i += 1) {
    arrNumbers[i] = parseInt(arrNumbers[i], 10);
    if (arrNumbers[i] > higherNumber) {
      higherNumber = arrNumbers[i];
      counter = 0;
    }
    if (arrNumbers[i] === higherNumber) {
      counter += 1;
    }
  }

  return `number ${higherNumber} appears ${counter} times.`;
}
const numbersInput = document.querySelector('#numbers');
const numbersBtn = document.querySelector('#check-numbers');
const numbersResponse = document.querySelector('#numbers-response');
numbersBtn.addEventListener('click', () => {
  numbersResponse.innerHTML = highestCount(numbersInput);
});

// EN - Return which cat catches the mouse or if the mouse runs away
// PT-BR - Ver qual gato chegará primeiro no rato ou se ele vai fugir
function catAndMouse(cat1, cat2) {
  const dist1 = Math.abs(parseInt(cat1.value, 10));
  const dist2 = Math.abs(parseInt(cat2.value, 10));
  if (!(dist1 && dist2)) return invalidInput;
  if (dist1 < dist2) {
    return 'Salem got it!';
  }
  if (dist1 > dist2) {
    return 'Mr Fluffles got it!';
  }
  return 'Cats bump into each other and the mouse runs away!';
}
const catInput1 = document.querySelector('#cat1');
const catInput2 = document.querySelector('#cat2');
const catsBtn = document.querySelector('#check-cats');
const catsResponse = document.querySelector('#cats-response');
catsBtn.addEventListener('click', () => {
  catsResponse.innerHTML = catAndMouse(catInput1, catInput2);
});

// EN - Checks whether a number is divisible by 3, 5 or both
// PT-BR - Verifica se um número é divisível por 3, 5 ou ambos
function dividedBy(number, divider1 = 3, divider2 = 5) {
  const numberToDivide = parseInt(number.value, 10);
  const both = numberToDivide % divider1 === 0 && numberToDivide % divider2 === 0;
  if (both) return 'Divisible by both 3 and 5!';
  if (numberToDivide % divider1 === 0) return 'Divisible by 3';
  if (numberToDivide % divider2 === 0) return 'Divisible by 5';
  return 'Not divisible by 3 or 5';
}
const divisibleInput = document.querySelector('#divisible');
const divisibleBtn = document.querySelector('#check-divisible');
const divisibleResponse = document.querySelector('#divisible-response');
divisibleBtn.addEventListener('click', () => {
  divisibleResponse.innerHTML = dividedBy(divisibleInput);
});

// EN - Change vowel to number
// PT-BR - Troca vogal por número
function changeLetter(letter) {
  let newLetter = letter;
  const pairs = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  const keys = Object.keys(pairs);

  if (keys.includes(newLetter)) newLetter = pairs[newLetter];

  return newLetter;
}

// EN - Encodes message with changeLetter function
// PT-BR - Codifica mensagem com a função changeLetter
function encode(string) {
  const stringToChange = string.value.toLowerCase().split('');
  for (let char = 0; char < stringToChange.length; char += 1) {
    stringToChange[char] = changeLetter(stringToChange[char]);
  }
  return stringToChange.join('');
}
const encodeInput = document.querySelector('#encode-msg');
const encodeBtn = document.querySelector('#check-encode');
const encodeResponse = document.querySelector('#encode-response');
encodeBtn.addEventListener('click', () => {
  encodeResponse.innerHTML = encode(encodeInput);
});

// EN - Change number to vowel
// PT-BR - Troca número por vogal
function changeNumber(number) {
  let newNumber = number;
  const pairs = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  const keys = Object.keys(pairs);

  if (keys.includes(newNumber)) newNumber = pairs[newNumber];

  return newNumber;
}

// EN - Decodes message with changeNumber function
// PT-BR - Decodifica mensagem com a função changeLetter
function decode(string) {
  const stringToChange = string.value.toLowerCase().split('');
  for (let char = 0; char < stringToChange.length; char += 1) {
    stringToChange[char] = changeNumber(stringToChange[char]);
  }
  return stringToChange.join('');
}
const decodeInput = document.querySelector('#decode-msg');
const decodeBtn = document.querySelector('#check-decode');
const decodeResponse = document.querySelector('#decode-response');
decodeBtn.addEventListener('click', () => {
  decodeResponse.innerHTML = decode(decodeInput);
});

// EN - Receivess a array with technologies and names to create a new array with objects owning properties tech and name. Then sort new array from the tech propriety. If empty array, return "Empty!"
// PT-BR - Receber um array de tecnologias e nomes para criar um novo array com objetos possuindo campos tech e name. Então ordenar novo array a partir do campo tech. Se array vazio retornar 'Empty!'
function techList(techArray, nameArray) {
  if (techArray.length === 0) return 'Empty!';
  techArray = techArray.sort();
  const list = [];
  for (let tech = 0; tech < techArray.length; tech += 1) {
    for (let name = 0; name < nameArray.length; name += 1) {
      list.push({ tech: techArray[tech], name: nameArray[name] });
    }
  }
  return list;
}

// EN - Generate a phone number with the brazilian format
// PT-BR - Gerar número de telefone a partir de array respeitando parênteses, traços e espaços.
function numberCounter(numbers, index) {
  let counter = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === numbers[index]) counter += 1;
  }
  return counter;
}

function validateNumbers(numbers) {
  let msg = '';
  for (let num = 0; num < numbers.length; num += 1) {
    const counter = numberCounter(numbers, num);
    if (numbers[num] < 0 || numbers[num] > 9 || counter >= 3) {
      msg = 'Not possible to create phone number with given numbers.';
    }
  }
  return msg;
}

function writePhoneNumber(numbers) {
  let phone = '(';
  for (let i = 0; i < numbers.length; i += 1) {
    if (i === 2) {
      phone += ') ';
    }
    if (i === 7) phone += '-';
    phone += numbers[i];
  }
  return phone;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array with incorrect size.';
  const msgInvalid = validateNumbers(numbers);
  if (msgInvalid) return msgInvalid;
  return writePhoneNumber(numbers);
}
const phoneInput = document.querySelector('#phone-number');
const phoneBtn = document.querySelector('#check-phone');
const phoneResponse = document.querySelector('#phone-response');
phoneBtn.addEventListener('click', () => {
  phoneResponse.innerHTML = generatePhoneNumber(phoneInput.value);
});

// EN - Verify if lines create a triangle
// PT-BR - Verificar se as linhas formam um triângulo
function triangleCheck(lineA, lineB, lineC) {
  return lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
}

// EN - Receives a string and return a suggestion of how many glasses of water you should drink
// PT-BR - Recebe uma string e retorne a sugestão de quantos copos de água você deve beber
function hydrate(string) {
  const reg = /\d+/g;
  const cups = string.value.trim().match(reg);
  if (!cups) return 'Invalid string.';
  let sum = 0;
  for (let cup = 0; cup < cups.length; cup += 1) {
    sum += parseInt(cups[cup], 10);
  }
  if (sum === 0) return 'None.';
  if (sum === 1) return `${sum} glass of water.`;
  return `${sum} glasses of water.`;
}
const drinksInput = document.querySelector('#drinks');
const drinksBtn = document.querySelector('#check-drinks');
const drinksResponse = document.querySelector('#drinks-response');
drinksBtn.addEventListener('click', () => {
  drinksResponse.innerHTML = hydrate(drinksInput);
});
