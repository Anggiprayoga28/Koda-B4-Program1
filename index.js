const KitchenApp = require('./lib/kitchenApp');

async function main() {
    console.log("Memulai Aplikasi Simulasi Dapur\n");
    
    const app = new KitchenApp();
    
    try {
        await app.run();
    } catch (error) {
        console.error("Error:", error.message);
        process.exit(1);
    }
}

main();




