const CookingService = require('./cookingService');

class CookingManager {
    constructor() {
        this.cookingService = new CookingService();
    }

    async cookSequential() {
        const results = [];
        
        results.push(await this.cookingService.cookRice());
        results.push(await this.cookingService.cookVegetables());
        results.push(await this.cookingService.makeTea());
        
        return results;
    }

    async cookParallel() {
        return await Promise.all([
            this.cookingService.cookRice(),
            this.cookingService.cookVegetables(),
            this.cookingService.makeTea()
        ]);
    }

    async cookCustomSequential(dishes) {
        const results = [];
        
        for (const dish of dishes) {
            const result = await this.cookingService.cookDish(dish);
            results.push(result);
        }
        
        return results;
    }

    async cookCustomParallel(dishes) {
        const cookingPromises = dishes.map(dish => 
            this.cookingService.cookDish(dish)
        );
        
        return await Promise.all(cookingPromises);
    }
}

module.exports = CookingManager;
