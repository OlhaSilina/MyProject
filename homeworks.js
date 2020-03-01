//push

var arr=['tyu', 'tyui', 'uii'];

function action(arr, item) {
    for (var i=1; i < arguments.length; i++) {
        arr[arr.length]=arguments[i]
    }
}

action(arr, 'yui', 'thu', 'hui');
console.log(arr);


//filter

var arr=['tyu', 'tyui', 'uii'];

function action(arr, fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
       if (fn(arr[i], i, arr )) {
        result.push(arr[i])
       }
    }
    return result;
}


//forEach

var arr=['tyu', 'tyui', 'uii'];

function forEach(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr) 
    }
}

// map(arr, fn)

var arr=['tyu', 'tyui', 'uii'];

function map(arr,fn) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i, arr))
    }
    return result;
}

// some(arr, fn)

function some(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
       return fn(arr[i], i, arr)
    }
};

// every(arr, fn)

function every(arr, fn) {
    for (var i = 0; i < arr.length; i++) {
       return fn(arr[i], i, arr)
    }
};



