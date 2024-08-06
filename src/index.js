const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    function decodeMorse(morseCode) {
        return MORSE_TABLE[morseCode] || '';
    }

    const chunks = [];
    for (let i = 0; i < expr.length; i += 10) {
        chunks.push(expr.slice(i, i + 10));
    }

    const decodedChars = chunks.map(chunk => {
        if (chunk === '**********') {
            return ' ';
        }
        let morseCode = '';
        for (let i = 0; i < 10; i += 2) {
            const pair = chunk.slice(i, i + 2);
            if (pair === '10') morseCode += '.';
            else if (pair === '11') morseCode += '-';
        }
        return decodeMorse(morseCode);
    });

    return decodedChars.join('');
}

module.exports = {
    decode
}