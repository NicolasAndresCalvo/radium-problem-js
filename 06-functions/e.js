var a = "1";
var b = 2;

function validate(a, b) {
    if (typeof (a) === "number" && typeof (b) === "number") {
        return true;
    }
    else if (typeof (a) !== "number") {
        console.log("Uno de los parámetros tiene error y es " + a);
    } else {
        console.log("Uno de los parámetros tiene error y es " + b);
    }
}

function sum(a, b) {
    if (validate(a, b)) {
        return a + b;
    }
}

console.log(sum(a, b));