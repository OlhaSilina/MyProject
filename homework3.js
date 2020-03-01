//1

var user = {
    name: 'Dima',
    age: '35',
    eyeColor: 'green',
};

function copy(origin) {
    var newObject = {};
    for (var key in origin) {
        newObject[key] = origin[key];
    }

    return newObject;
}

var userCopy = copy(user);

console.log(userCopy);

//2

var user1 = {
    name: 'Dima',
    age: '35',
    eyeColor: 'green',
};

var user2 = {
    name: 'Dima',
    age: '35',
    eyeColor: 'green',
    //weight: '50',
};

function isEqual(object1, object2) {

    if (Object.values(object1).length !== Object.values(object2).length) {
        return false;
    } else {
        var  sumF = 0;
        for (var key in object1) {
            if (object1[key] !== object2[key]) {
                sumF ++;
            }     
        };
        if (sumF > 0)  {
            return false;
        } else {
            return true;    
        };
    };
}

var result = isEqual(user1, user2);

console.log(result);


//3

var user = {
    name: 'Dima',
    age: '35',
    color: 'green',
    weight: 60,
};


function copy(origin, name, age, color) {
    var newObject = {};
    for (var key in origin) {
        newObject[key] = origin[key];
    }
    Object.assign(newObject, { name: name, age: age, color: color });
    return newObject;
}

var userCopy = copy(user, 'Vasya', '28', 'blue');

console.log(userCopy);


function copy(origin, name, age, color) {
    var newObject = {};
    for (var key in origin) {
        if (key === 'name') {
            newObject[key]= name
        } else if (key === 'age') {
            newObject[key]= age
        } else if (key === 'color') {
            newObject[key]= color 
        } else {
        newObject[key] = origin[key];
        }
    }
   return newObject;
}

var userCopy = copy(user, 'Vasya', 28, 'blue');

console.log(userCopy);



//Object assign

function copyObjects(arr) {
    var newObj={};

    for (var i = 0 ; i < arr.length; i++) {
        for (var key in arr[i]) {
            newObj[key]=arr[i][key];
        }
    }
    return newObj;
}

