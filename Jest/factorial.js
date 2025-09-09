/**
 * This function will calculate the factorial of a given number.
 *
 * @param {number} n - factorial argument
 *
 * @returns {number} result of n! = 1 * 2 * 3 * ... * n
 */
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;

}

export default factorial;