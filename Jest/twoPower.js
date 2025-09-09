/**
 * This function will calculate the power of two of a given number.
 *
 * @param {number} n - power argument
 *
 * @returns {number} result of 2^n
 */

/* function twoPower(n) {
let result = 1;
for (let i = 1; i <= n; i++) {
    result *= 2;
}
return result;
} */
function twoPower(n) {
    return Math.pow(2, n);
}
export default twoPower;