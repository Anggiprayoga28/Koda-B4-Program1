const Timer = require('./timer');

class CookingService {
    constructor() {
        this.dishes = {
            'nasi': { name: 'Nasi', time: 3 },
            'sayur': { name: 'Sayur', time: 2},
            'teh': { name: 'Teh', time: 1},
            'ayam': { name: 'Ayam Goreng', time: 4},
            'ikan': { name: 'Ikan Bakar', time: 3},
            'sup': { name: 'Sup', time: 2}
        };
    }

    async cookRice() {
        return await this.cookDish('nasi');
    }

    async cookVegetables() {
        return await this.cookDish('sayur');
    }

    async makeTea() {
        return await this.cookDish('teh');
    }

    async cookDish(dishKey) {
        const dish = this.dishes[dishKey];
        
        if (!dish) {
            throw new Error(`Masakan '${dishKey}' tidak dikenal!`);
        }

        console.log(`Mulai memasak ${dish.name}...`);
        
        await Timer.delay(dish.time);
        
        console.log(`${dish.name} sudah matang!`);
        
        return dish.name;
    }

    getAllDishes() {
        return Object.keys(this.dishes).map(key => ({
            key,
            ...this.dishes[key]
        }));
    }

    getDish(key) {
        return this.dishes[key];
    }
}

module.exports = CookingService;