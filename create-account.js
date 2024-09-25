function createAccount(pin, initialDeposit) {
    let balance = initialDeposit;

    return {
        checkBalance: function(inputPin) {
            if (inputPin === pin) {
                return balance;
            } else {
                return "Invalid PIN.";
            }
        },

        deposit: function(inputPin, amount) {
            if (inputPin === pin) {
                if (amount > 0) {
                    balance += amount;
                    return balance;
                } else {
                    return "Deposit amount must be positive.";
                }
            } else {
                return "Invalid PIN.";
            }
        },

        withdraw: function(inputPin, amount) {
            if (inputPin === pin) {
                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                    return balance;
                } else if (amount > balance) {
                    return "Insufficient funds.";
                } else {
                    return "Withdrawal amount must be positive.";
                }
            } else {
                return "Invalid PIN.";
            }
        },

        changePin: function(oldPin, newPin) {
            if (oldPin === pin) {
                pin = newPin;
                return "PIN changed successfully.";
            } else {
                return "Invalid PIN.";
            }
        }
    };
}

module.export = {createAccount};

// Create the first account
//const account1 = createAccount('1234', 100); // PIN: '1234', Initial Deposit: 100

// Create the second account
//const account2 = createAccount('5678', 200); // PIN: '5678', Initial Deposit: 200

// Check balances for both accounts
//console.log(account1.checkBalance('1234')); // Outputs: 100
//console.log(account2.checkBalance('5678')); // Outputs: 200

// Deposit money into the first account
//account1.deposit('1234', 50);
//console.log(account1.checkBalance('1234')); // Outputs: 150

// Deposit money into the second account
//account2.deposit('5678', 100);
//console.log(account2.checkBalance('5678')); // Outputs: 300
