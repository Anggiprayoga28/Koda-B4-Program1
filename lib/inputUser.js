const readline = require('readline');
const CookingService = require('./cookingService');

class UserInput {
    constructor() {
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        this.cookingService = new CookingService();
    }

    async getMenuChoice() {
        return new Promise((resolve) => {
            console.log("\nMENU SIMULASI DAPUR");
            console.log("1. Squential Cooking");
            console.log("2. Parallel Cooking");
            console.log("3. Custpm Cooking");
            console.log("4. Exit")
            
            this.rl.question("\nPilih menu (1-4): ", (answer) => {
                resolve(answer.trim());
            });
        });
    }


    async selectCookingMode() {
        return new Promise((resolve) => {
            console.log("\n  Pilih mode memasak:");
            console.log("1. Sequential");
            console.log("2. Parallel");
            
            this.rl.question("Pilih mode (1/2): ", (answer) => {
                const mode = answer.trim() === '2' ? 'parallel' : 'sequential';
                resolve(mode);
            });
        });
    }

    async waitForEnter() {
        return new Promise((resolve) => {
            console.log("\nTekan Enter untuk melanjutkan");
            this.rl.question("", () => resolve());
        });
    }

    close() {
        this.rl.close();
    }
}

module.exports = UserInput;
