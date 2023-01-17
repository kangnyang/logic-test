function findMiddleAplhabet(a, b) {
    const aPos = Alphabet.indexOf(a);
    const bPos = Alphabet.indexOf(b);
    const len = bPos - aPos

    if (len < 2) {
        return '[none]'
    }

    const start = aPos + (len / 2)
    const end = start + 1 + (len % 2)
    return Alphabet.slice(Math.floor(start), end)
}
const Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let a = console.log("Masukan Alfabet Pertama dari A-Z");
let b = console.log("Masukan Alfabet Kedua dari A-Z");
console.log("nilai tengah-tengahnya adalah  " + findMiddleAplhabet(a, b));