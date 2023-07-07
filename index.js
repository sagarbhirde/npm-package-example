function isPositiveInteger(n) {
    return n % 1 === 0 && n > 0;
}

module.exports = isPositiveInteger;