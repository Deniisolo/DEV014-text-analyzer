const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.split(" ");
    //no tener en cuenta el " "
    // Test comment
    let count = 0;
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] !== "") {
        count++;
      }
    }
    return count;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    //contar caracteres excluyendo Espacios y signos puntuación . , ; :  ¿? ! " " - () [] /
    const punctuation = [
      ".",
      ",",
      ";",
      ":",
      "¿",
      "?",
      "!",
      '"',
      "(",
      ")",
      "[",
      "]",
      "/",
      "-",
    ];
    let cleanText = "";
    for (let i = 0; i < text.length; i++) {
      if (!punctuation.includes(text[i]) && text[i] !== " ") {
        cleanText += text[i];
      }
    }
    let characterCount = cleanText.length;
    return characterCount;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cuántos números se encuentran en el parámetro `text` de tipo `string`.
    let total = 0;
    for (let i = 0; i < text.length; i++) {
      if (!isNaN(text[i]) && text[i] !== " ") {
        total++;
      }
    }
    return total;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let sum = 0;
    for(let i = 0; i < text.length; i++){
      if (!isNaN(text[i]) && text[i] !== ' ' ) {
        sum += parseInt(text[i]);
    }
    }
    return sum;
  },
};

export default analyzer;
