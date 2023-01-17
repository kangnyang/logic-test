str = prompt("Masukan kata : ");

function reverse(str) {
    var words = [];
    words = str.match(/\S+/g);
    var result = "";
    for (var i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join('') + " ";
    }
    return result
}
alert(reverse(str));