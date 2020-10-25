var a = 1;
var b = 2.4;

function sum(a, b) {
    return a + b;
}

if (typeof (a) === "number" && typeof (b) === "number") {
    if (Number.isInteger(a) && Number.isInteger(b)) {
        var sumFunction = sum(a, b);
        console.log(sumFunction);
    } else if (Number.isInteger(a)) {
        console.log("Error: " + Math.round(b));
    } else if (Number.isInteger(b)) {
        console.log("Error: " + Math.round(a));
    } else {
        console.log("Error: " + Math.round(a) + " and " + Math.round(b));
    }
}
else if (typeof (a) !== "number") {
    console.log("Uno de los parámetros tiene error y es " + a);
} else {
    console.log("Uno de los parámetros tiene error y es " + b);
}