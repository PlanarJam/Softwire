for (let i = 1; i <= 15015; i++) {
    let output = "";
    let fezz = false;

    if (i % 3 == 0) {
        output = "Fizz";
    } 

    if (i % 13 == 0) {
        fezz = true;
        output += "Fezz";
    }

    if (i % 5 == 0) {
        output += "Buzz";
    } 

    if (i % 7 == 0) {
        output += "Bang";
    }

    if (i % 11 == 0) {
        output = fezz ? "FezzBong" : "Bong";
    }

    let n = output.length;

    if (n > 0) {
        if (i % 17 == 0) {
            reversed = ""
            for (let i = n; i > 0; i -= 4) {
                reversed += output.slice(i - 4, i);
            }

            console.log(reversed);
        } else {
            console.log(output);
        }
    } else {
        console.log(i);
    }
}
