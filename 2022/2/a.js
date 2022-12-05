const fs = require("fs");
let rpsList = fs.readFileSync("input.txt", "utf8").trim().split("\n");
let ans = 0;
for (let line of rpsList) {


    if (line == "A X") {
       ans += 1+3
    }
    else if (line == "A Y") {
        ans += 2+6
    }
    else if (line == "A Z") {
        ans += 3+0
    }
    if (line == "B X") {
        ans += 1+0
    }
    else if (line == "B Y") {
        ans += 2+3
    }
    else if (line == "B Z") {
        ans += 3+6
    }
    if (line == "C X") {
        ans += 1+6
    }
    else if (line == "C Y") {
        ans += 2+0
    }
    else if (line == "C Z") {
        ans += 3+3;
    }

}
console.log(ans)