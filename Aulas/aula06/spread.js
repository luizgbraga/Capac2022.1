// spread é um jeito de reaproveitar arrays

let arr = [1, 2, 3, 4, 5];

let arr2 = [...arr, 6]; // arr.push(6);

let arr3 = [...arr, 7]; // arr.push(7);

let arr4 = [0, ...arr]; // arr.unshift(0);

console.log(arr2, arr3, arr4);

// ...arr 'copia' a array arr