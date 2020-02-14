let str='adfsdfdsaffasfaaaaasfsfasfdsf';
let sum=0;
let i = 0;

while (i < str.length) {
    if (str[i] == 'a') {
        sum++
    } else {

    }
    i++;
}

console.log(sum);



let str='adfsdfdsaffasfaaaaasfsfasfdsf';
let sum=0;
let i = 0;

do {
    if (str[i] == 'a') {
        sum++
    } else {

    }
    i++;
} while (i < str.length);

console.log(sum);




let str='adfsdfdsaffasfaaaaasfsfasfdsf';
let sum=0;

for (let i = 0; i < str.length; i++) { 
    if (str[i] == 'a') {
        sum++
    } else {
        
    }
}

console.log(sum);



let sum=0;

function sumLetters(str, letter) {
    for (let i = 0; i < str.length; i++) { 
        if (str[i] == letter) {
            sum++
        } else {
            
        }
    continue;
    return sum;
}
}

sumLetters('adfsdfdsaffasfaaaaasfsfasfdsf', 's');

console.log(sum);
