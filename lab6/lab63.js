//Exercise 3: Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function printNumbers(from, to) {

    for (let o = from; o < to; o++) {
        setTimeout(() => { console.log(o); }, o * 1000);
    }
}

printNumbers(0, 181)
