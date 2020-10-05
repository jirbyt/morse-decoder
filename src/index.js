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
   let decodeStr = expr;
let arrRes=[];
let arrWord = [];
let countWord = expr.length/10;

for (let i=0; i<countWord; i++){
arrWord[i]=decodeStr.slice(0,10);
decodeStr=decodeStr.slice(10)
}
for(let j=0; j<arrWord.length; j++){

	if (arrWord[j]==='**********'){
	arrRes[j]= ' ';
	}

	else{
		let wordRes = '';
		let wordTemp = '';
		let word = arrWord[j];
		for(let k=0; k<5; k++){
		wordTemp = word.slice(0,2);
		if(wordTemp ==='11'){wordRes+='-'}
		else if (wordTemp ==='10'){wordRes+='.'}
		else {wordRes+=''};
		word = word.slice(2);	
		}
	arrRes[j] =MORSE_TABLE[wordRes];
	}
}

return arrRes.join('');
}

module.exports = {
    decode
}