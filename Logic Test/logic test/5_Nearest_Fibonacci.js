const nearestFibonacci = (array) => {
    const total = array.reduce((acc, v) => acc + v);

    let fibo = [0, 1];
    do {
        fibo = [...fibo, fibo[fibo.length - 1] + fibo[fibo.length - 2]];
    } while (fibo[fibo.length - 1] < total);

    const afterTotal = fibo[fibo.length - 1];
    const beforeTotal = fibo[fibo.length - 2];

    const next = afterTotal - total;
    const prev = total - beforeTotal;
    return next < prev ? next : prev;
};

console.log("hasil dari Nearst fibonaccinya adalah ", nearestFibonacci([15, 1, 3]));