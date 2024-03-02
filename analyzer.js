const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const word = text.split(" ");
    //no tener en cuenta el " "
    let count = 0;
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== "") {
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
    const characterCount = cleanText.length;
    return characterCount;
  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    let wordL = text.split(" ");
    wordL = wordL.filter((word) => {
      //función tipo lambda
      return word !== "";
    }); //devuelve todo lo que no esta vacio
    let totalLength = 0;
    for (const word of wordL) {
      totalLength += word.length;
    }
    const averageLength = totalLength / wordL.length;
    return parseFloat(averageLength.toFixed(2)) || 0; // si es NaN se pone en 0
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cuántos números se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      // Verificar si el texto está vacío o contiene solo espacios en blanco
      return 0;
    }
    if (text[text.length - 1] === ".") {
      // el ultimo caracter de mi texto.
      text = text.substring(0, text.length - 1);
    }
    const words = text.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      const numero = parseFloat(words[i]); // Utilizar parseFloat para manejar números decimales
      while (words[i].endsWith("0")) {
        //mientras mi palabra termine en 0 esto va a ser true
        words[i] = words[i].substring(0, words[i].length - 1); //substring retira lo solicitado
      }
      if (!isNaN(numero) && words[i] === numero.toString()) {
        // Verificar si la conversión fue exitosa y no es NaN
        count++;
      }
    }
    return count;
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    if (!text.trim()) {
      // Verificar si el texto está vacío o contiene solo espacios en blanco
      return 0;
    }
    if (text[text.length - 1] === ".") {
      // el ultimo caracter de mi texto.
      text = text.substring(0, text.length - 1);
    }
    const words = text.split(" ");
    let count = 0;
    for (let i = 0; i < words.length; i++) {
      const numero = parseFloat(words[i]); // Utilizar parseFloat para manejar números decimales
      while (words[i].endsWith("0")) {
        //mientras mi palabra termine en 0 esto va a ser true
        words[i] = words[i].substring(0, words[i].length - 1); //substring retira lo solicitado
      }
      if (!isNaN(numero) && words[i] === numero.toString()) {
        // Verificar si la conversión fue exitosa y no es NaN
        count = count + numero;
      }
    }
    return count;
  },
};

export default analyzer;
