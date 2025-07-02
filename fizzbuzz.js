for (let i = 1; i <= 100; i++) {
    let output = ""
    let flag = false
    if (i % 3 == 0) {
        output += "Fizz";
        flag = true
    } 
    if (i % 5 == 0) {
        output += "Buzz"
        flag = true
    } 
    if (i % 7 == 0) {
        output += "Bang"
        flag = true
    }
    if (flag) {
        console.log(output);
    } else {
        console.log(i);
    }
}
