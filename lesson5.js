// var names = ['Dima','Max','Masha','Sasha'];
// var ages = [25, 18, 20, 40];
// var colors = ['green', 'white', 'blue'];
// var copyNames = names.slice(1, 3);
// var secondNames = ['Popov', 'Ivanov'];
// // console.log(names);
// // console.log(ages);
// // console.log(colors);
// // console.log(names[0]);
// // names.push('Masha', 'Lesha');
// // console.log(names);
// // console.log(copyNames);

// // console.log(names.concat(secondNames, ['third value']));

// names.splice(1,1, 'pasted');

// console.log(names);

// var str = '1, 2, 3, 4, 5, 6, 7, 8, 9'
// x=console.log(str.split(','));

// var arr = ['Dima', 'Max', 'Oleg'];

// console.log(arr.join('*(-)*'));


// var arr = [];
// console.log(Array.isArray(arr));

// var arr = ['Dima', 'Max', 'Oleg'];

// for (var i = 0; i< arr.length; i++) {
//     console.log(arr[i]);
// }


//var users = [{name: 'Dima', age: '26'}, {name: 'Max', age: '15'}, {name: 'Oleg', age: '26'}];

// for (var i = 0; i < users.length; i++) {
//     //console.log(users[i].name);
//     if (users[i].age < '16' ) {
//         console.log(users[i].name + ' ' + 'Forbidden');
//     } else {
//         console.log(users[i].name + ' ' + 'Welcome');
//     }
// }


// var arr = ['Dima', 'Max', 'Oleg'];

// arr.forEach(function(item, index, arr) {
//     console.log(arr);
// });


var numbers = [10, 20, 30];
var sum = 0 ;

function getSum(item) {
    sum += item
}

numbers.forEach(getSum);

console.log(sum);




