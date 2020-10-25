var a = 1;
var b = 2;

function sum(a, b) {
    return a + b;
}

if (typeof (a) === "number" && typeof (b) === "number") {
    var sumFunction = sum(a, b);

    console.log(sumFunction);
}
else if (typeof (a) !== "number") {
    console.log("Uno de los parámetros tiene error y es " + a);
} else {
    console.log("Uno de los parámetros tiene error y es " + b);
}