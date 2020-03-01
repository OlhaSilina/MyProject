
var x = {
    name: "Dima",
    age: 25,
    isAdmin: false,
    canSpeak: true,
    friendNames: ["Саша", "Дмитрий", "Оля"],
    parents: {
        name: 'Olena',
        age: 50,
    },
  };
  

  var y = {
    name: "Dima",
    age: 25,
    isAdmin: false,
    canSpeak: true,
    friendNames: ["Саша", "Дмитрий", "Оля"],
    parents: {
        name: 'Olena',
        age: 56,
    },
  };

//   a = function ty(a,b) {

//   }

//   b = function ty(a,b) {
// }


function deepEqual(a, b) {
    if (typeof a === 'number' && typeof b === 'number') {
        if (a == b) {
            return true;
        } else {
            return false;
        }
    } else if (typeof a === 'string' && typeof b === 'string') {
        if (a == b ) {
            return true;
        } else {
            return false;
        }
    } else if (typeof a === 'boolean' && typeof b === 'boolean') {
        if (a == b) {
            return true;
        } else {
            return false;
        }
    } else if (typeof a === 'undefined' && typeof b === 'undefined') {
        return true;
    } else if ( (typeof a === 'object' && a != null && !Array.isArray(a)) && (typeof b === 'object' && b !=null && !Array.isArray(a)) ) {
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b);

        if (aKeys.length != bKeys.length) {
            return false;
        } else {
            for(var i = 0; i < aKeys.length; i++) {
                 if(aKeys[i] !== bKeys[i]) {
                    return false;
                 } else if (!deepEqual(a[aKeys[i]], b[bKeys[i]])) {
                    return false; 
                 }                     
            }
            return true; 
        }
    } else if (Array.isArray(a) && Array.isArray(b) ) {
        if (a.length != b.length) {
            return false;
        } else {
        for (var i=0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return false;
            } else if (!deepEqual(a[i],b[i]))  {
                return false;
            }
        }
        return true;
        }
    } else {
        return false;
    }
};

var result = deepEqual(x , y);

console.log(result)

