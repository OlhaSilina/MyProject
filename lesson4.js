var user = {
    name: 'Dima',
    age: '35',
    eyeColor: 'green',

    run: function() {
        console.log('run')
    },
    back: function() {
        console.log('Back');
    },

    ['name']: 'Popov',
};

//console.log(user);

//user.back();

//user.height = 150;

//console.log(user);

// var prop = 'age';

// console.log(user[prop]);

// if ('name' in user) {
//     console.log(true)
// }

for (var prop in user) {
    console.log(prop);
}


for (var prop in user) {
    console.log(user[prop]);
}


var user = {
    name: 'Dima',
    age: 25,
    eyesColor: 'green',
    isAdmin: false,
    role: 2,
}


function copy(object) {
    let copy = {};
    for (var key in object) {
        copy[key] =object[key]
}
    return copy;
}


var userCopy = copy(user);
console.log(userCopy);




// function isEqual(object1, object2) {
//     let 
//     for (var key ) {
//         object1[key] === object2[key]
//     }

// }



function copy(origin) {
    var newObject = {};
    for (var key in origin) {
        newObject[key] = user[key];
    }

    return newObject;
}

var userCopy = copy (User);


function isEqual(first, second) {

    If (Object.values(first).lenght !== Object.values(second).lenght) {
        return false;
    }

    for (var key in first) {
       if ( first[key] !== second[key]) {
           return false;
       }
    }
}


