// 1. Есть массив чисел, посчитать сумму всех элементов используя
// for обычный и forEach. Реализовать через функцию, которая на вход принимает
// массив.


var numbers = [30, 50, 60, 67];
var sum = 0;

numbers.forEach( function getSum(item) {
    sum += item
});
console.log(sum);



var numbers = [30, 50, 60, 67];
var sum = 0;

for (var i= 0; i< numbers.length; i ++) {
    sum += numbers[i]
}
console.log(sum);



//   2. Функиция принимает два массива. Возвращает новый массив, где каждый элемент это сумма двух других массив
// var first = [2, 3]
// var second = [3, 2]
// var result = [5, 5];
// Реализовать через forEach и for

var first = [2, 3, 6, 7];
var second = [3, 2, 9, 10];
var result = [];

for (var i=0; i < first.length; i++) {
    result.push(first[i] + second[i])
}

console.log(result);


var first = [2, 3, 6, 7];
var second = [3, 2, 9, 10];
var result = [];

first.forEach(function arr(item, index) {
    result.push(item + second[index])
})

console.log(result);

// 3.  Есть 3 массива, посчитать их общую сумму. На выходе одно число.
//   Должна быть функция, которая принимае эти 3 массива, на выходе возвращает 1 число
// var first = [2, 3]
// var second = [3, 2]
// var result = [5, 5];


var first = [2, 3, 6, 7];
var second = [3, 2, 4, 1];
var third = [3, 2, 1, 1];
var sum = 0;

first.forEach(function allSum(item, index) {
    sum = sum + item + second[index] + third[index]
});

console.log(sum);



var first = [2, 3, 6, 7];
var second = [3, 2, 4, 1];
var third = [3, 2, 1, 1];
var sum = 0;

for (var i=0; i < first.length; i++) {
    sum = sum + first[i] + second[i] + third[i]
}

console.log(sum);


// 4. Есть массив [1, 4, 5, 1, 3, 3] На основе его создать новый массив, где
// будут квардат каждого число, используя for и map


var arr = [1, 4, 5, 1, 3, 3];
var result= [];

for (var i = 0; i < arr.length; i++) {
    result.push(Math.pow(arr[i], 2))
}

console.log(result);



var arr = [1, 4, 5, 1, 3, 3];
var result = [];

arr.map(function newArr(item) {
   result.push(Math.pow(item, 2))
});

console.log(result);



var arr = [1, 4, 5, 1, 3, 3];
var result = arr.map(function (item) {
  Math.pow(item, 2)
});

console.log(result);


// 5. Есть массив имен ['fasf', 'cvser', 'fdsf']. На вход функции
// Создать новый массив на выходе, который вернет имена, которые меньше 4 букв
// Цикл for метод filter

var arr = ['fasf','fa', 'cvser', 'fds', 'faf'];
var result = [];

for (var i = 0; i<arr.length; i++) {
    if (arr[i].length < 4) {
        result.push(arr[i])
    }
};

console.log(result);



var arr = ['fasf','fa', 'cvser', 'fds', 'faf'];
var result = []; 

arr.filter(function compare(item) {
    if (item.length < 4) {
        result.push(item)
    }
});

console.log(result);


var arr = ['fasf', 'fa', 'cvser', 'fds', 'faf'];
var result = arr.filter(function compare(item) {
   item.length < 4
});

console.log(result);

