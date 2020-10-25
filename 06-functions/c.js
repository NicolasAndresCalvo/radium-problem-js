var a = 1;

function validate(a) {
    if (Number.isInteger(a)) {
        return true
    } else {
        return false
    }
}

console.log(validate(a));