// if (!number) {

//     console.log('OK')
// }

//Циклы

// var count = 10;
// var step = 0;

// while (step < count) {
//     console.log(step);
//     step++;
// }

// do {
//     console.log(step);
//     step++;
// } while (step < count);

// for  (var i = 0; i < count; i++) {
//     console.log(i);
// }


// var count = 2000;

// for  (var i = 1503; i < count; i++) {
//     if ( i % 8 === 0) {
//        console.log(i) 
//     }
//     continue;
//     console.log('after continue')
// }



// for  (var i = 1503; i < count; i++) {
//     var b = 10;
//     var c = 5;
//     if ( i % 2 === 0) {
//        console.log(i) 
//        continue;
//     } else {

//     }
//     c += 5
//     console.log('after continue')
// }

//Function declaration

// function getSum(a, b) {
//     console.log(a + b);
// }

// getSum (10,15);


//Fucnction expression - doesn't work with calling of function before function

var getSum = function getSum(a, b) {
    return(a + b);
}


function getSum(a, b) {
     console.log(a + b);
     return(a + b);
}
var result = getSum(34 , 67);
console.log(result);


// Области видимости 

function getSum() {
    var a = 8;
    var b = 7;
}

console.log(a);
console.log(b);



function getSum(a, b) {
    var result = a + b;
    console.log(result);
}

var sum = getSum(1, 4);
console.log(sum);

arguments.length

function () {


}