for (let i = 1; i <= 15015; i++) {
    let output = [];

    if (i % 3 == 0) {
        output.push("Fizz");
    } 

    if (i % 13 == 0) {
        fezz = true;
        output.push("Fezz");
    }

    if (i % 5 == 0) {
        output.push("Buzz");
    } 

    if (i % 7 == 0) {
        output.push("Bang");
    }

    if (i % 11 == 0) {
        for (let j = 0; j < output.length; j++) {
            if (output[j] != "Fezz") {
                output[j] = "";
            } 
        }

        output.push("Bong");
    }

    n = output.length;
    
    if (n > 0) {
        let result = "";
        if (i % 17 == 0) {
            for (let k = n-1; k >= 0; k--) {
                result += output[k];
            }
        } else {
            for (let k = 0; k < n; k++) {
                result += output[k]
            }
        }
        
        console.log(result);
    } else {
        console.log(i);
    }
}