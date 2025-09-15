const Display = require('./display');
const UserInput = require('./inputUser');
const CookingManager = require('./cookingManage');

class KitchenApp {
    constructor() {
        this.display = new Display();
        this.userInput = new UserInput();
        this.cookingManager = new CookingManager();
        this.isRunning = true;
    }

    async run() {
        this.display.showWelcome();
        
        while (this.isRunning) {
            try {
                await this.showMainMenu();
            } catch (error) {
                console.log("Terjadi kesalahan:", error.message);
                await this.userInput.waitForEnter();
            }
        }
        
        this.display.showGoodbye();
        this.userInput.close();
    }

    async showMainMenu() {
        const choice = await this.userInput.getMenuChoice();
        
        switch (choice) {
            case '1':
                await this.executeSequentialCooking();
                break;
            case '2':
                await this.executeParallelCooking();
                break;
            case '3':
                await this.executeCustomCooking();
                break;
            case '4':
                this.isRunning = false;
                return;
            default:
                console.log("Pilihan tidak valid! Silakan pilih 1-4.");
        }
        
        if (this.isRunning) {
            await this.userInput.waitForEnter();
        }
    }

    async executeSequentialCooking() {
        console.log("\nMode: Sequential Cooking");
        
        const startTime = Date.now();
        
        const results = await this.cookingManager.cookSequential();
        
        const totalTime = Math.round((Date.now() - startTime) / 1000);
        this.display.showResults(results, totalTime, 'sequential');
    }

    async executeParallelCooking() {
        console.log("\n⚡ Mode: Parallel Cooking");
        
        const startTime = Date.now();
        
        const results = await this.cookingManager.cookParallel();
        
        const totalTime = Math.round((Date.now() - startTime) / 1000);
        this.display.showResults(results, totalTime, 'parallel');
    }

    async executeCustomCooking() {
        console.log("\nMode: Custom Cooking");
        
        const selectedDishes = await this.userInput.selectDishes();
        
        if (selectedDishes.length === 0) {
            console.log("Tidak ada masakan yang dipilih!");
            return;
        }

        const mode = await this.userInput.selectCookingMode();
        const startTime = Date.now();
        
        let results;
        if (mode === 'parallel') {
            results = await this.cookingManager.cookCustomParallel(selectedDishes);
        } else {
            results = await this.cookingManager.cookCustomSequential(selectedDishes);
        }
        
        const totalTime = Math.round((Date.now() - startTime) / 1000);
        this.display.showResults(results, totalTime, mode);
    }
}

module.exports = KitchenApp;
