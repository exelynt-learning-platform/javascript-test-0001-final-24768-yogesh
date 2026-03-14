let n = 5;

// Upper part
for (let i = 1; i <= n; i++) {

    let row = "";

    // spaces before first star
    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }

    // first star
    row += "*";

    // spaces between stars
    if (i > 1) {
        for (let s = 1; s <= 2 * i - 3; s++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}

// Lower part
for (let i = n - 1; i >= 1; i--) {

    let row = "";

    // spaces before first star
    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }

    // first star
    row += "*";

    // spaces between stars
    if (i > 1) {
        for (let s = 1; s <= 2 * i - 3; s++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}