let i;
let fib = [0, 1]; // menginisialisasi array

for (i = 2; i <= 10; i++) {
    // numbe fibonacci = previous + one before previous
    // menerapkan ke js = sebelumnya + satu sebelumnya
    fib[i] = fib[i - 2] + fib[i - 1];
    console.log(fib[i]);
}
console.log(fib[15, 1, 3]); // masukan nilai yang di cari