// nilai array yang dicari
const arr = [12, 20];
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