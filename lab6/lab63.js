//Exercise 3: Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.
function printNumbers(from, to) {

    for (let o = from; o < to; o++) {
        setTimeout(() => { console.log(o); }, o * 1000);
        //timerId = setInterval(()=> {o++; console.log(o);}, 1000);
    }
}

//timerId = setInterval(()=> {++counter; console.log(counter);}, 1000);
printNumbers(0, 181)


//setInterval((x, y) => {
//   console.log(x);
//}, 1000, 1, 180);
