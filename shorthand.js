//Welcome to shorthand.js!
//Use our shortcuts to increase efficiency and reduce clutter.

//Fundamental Shortcuts

const log = (data) => console.log(data);
const warn = (data) => console.warn(data);

//Array Shortcuts

function max(array) {
    return Math.max.apply(null, array);
}

function min(array) {
    return Math.min.apply(null, array);
}

function sortAscending(array) {
    return array.sort(function(a, b){return a - b});
}

function sortDescending(array) {
    return array.sort(function(a, b){return b -a});
}

function sortRandom(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = array[i];
        array[i] = array[j];
        array[j] = k;
    }
}