
  var x = {
    name: "Dima",
    age: 25,
    isAdmin: false,
    canSpeak: true,
    get: function(a, b) {
      return a + b;
    },
    friendNames: ["Саша", "Дмитрий", "Оля"],
    parents: {
      mother: {
        name: "Катя",
        hobbies: ["Пляж", "Фото", "Море"],
        friends: [
          {
            name: "Петр",
            age: 40
          }
        ]
      },
  
      father: {
        name: "Виктор",
        hobbies: ["Бег", "Солнце", "Туризм"],
        friends: [
          {
            name: "Алексей",
            age: 50
          }
        ]
      }
    }
  };

  var y = {
    name: "Dima",
    age: 25,
    isAdmin: false,
    canSpeak: true,
    get: function(a, b) {
      return a + b;
    },
    friendNames: ["Саша", "Дмитрий", "Оля"],
    parents: {
      mother: {
        name: "Катя",
        hobbies: ["Пляж", "Фото", "Море"],
        friends: [
          {
            name: "Петр",
            age: 40
          }
        ]
      },
  
      father: {
        name: "Виктор",
        hobbies: ["Бег", "Солнце", "Туризм"],
        friends: [
          {
            name: "Алексей",
            age: 50
          }
        ]
      }
    }
  };

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
    } else if  ((typeof a === 'object' && a != null) && (typeof b === 'object' && b !=null)) {

        if (Object.keys(a).length !== Object.keys(b).length) {
			if (Object.keys(a) !== Object.keys(b) && Object.values(a) !== Object.values(b)) {
				return false;
			}
			return false;
		} else {
        
            for (var key in a) {
			if (typeof a[key] === 'function' && typeof b[key] === 'function') {
				if (a[key].toString() !== b[key].toString()) {
					return false;
				}
				return true;
			}

			if (typeof a[key] !== 'object' && typeof b[key] !== 'object') {
				if (a[key] !== b[key]) {
					return false;
				}
			}

			if (!deepEqual(a[key], b[key])) {
				return false;
			}
		}
        return true;
        }
       
    } else {
        return false;
    }
}
    
var result = deepEqual(x , y);

console.log(result)


