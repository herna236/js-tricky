function curriedAdd() {
    let total = 0;

    function add(number) {
        if (number === undefined) {
            // Return the total if called without arguments
            return total;
        }
        // Add the number to the total and return a new function
        total += number;
        return add; // Return itself for further chaining
    }

    return add;
}

// Example usage:
//let firstAdder = curriedAdd();
//let secondAdder = curriedAdd();
//let thirdAdder = curriedAdd();

//console.log(firstAdder()); // Outputs: 0
//console.log(secondAdder(1)(2)()); // Outputs: 3
//console.log(thirdAdder(2)(8)(5)(1)()); // Outputs: 16

module.exports = { curriedAdd };
