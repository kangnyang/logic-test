const arr = [13, 10, 5, 2, 9]; // nilai array yang dicari
const produckArray = (arr = []) => {

    const product = arr.reduce((acc, val) => acc * val);
    const res = [];

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        res[i] = product / el;
    };
    return res;
};
console.log(produckArray(arr));