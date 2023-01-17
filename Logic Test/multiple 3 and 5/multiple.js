alert("MULTIPLE 3 AND 5");
let lagi = true;
while (lagi) {
    let number = prompt("Masukan nilai:")

    function setMultiples(number) {
        let sum = 0;
        for (let i = 1; i < number; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i;
            }
        }
        return sum;
    }
    alert("nilai multiple dari " + number + " adalah " + setMultiples(number));
    lagi = confirm("Mau lagi?");
}
alert("Terima kasih");