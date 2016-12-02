var n = 1;
var f = "fizz"
var b = "buzz"
var fb = "fizzbuzz"

while (n <= 100) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log(fb);
    } else if (n % 3 === 0) {
        console.log(f);
    } else if (n % 5 === 0) {
        console.log(b);
    } else {
        console.log(n);
    }
    n = n + 1;
}
