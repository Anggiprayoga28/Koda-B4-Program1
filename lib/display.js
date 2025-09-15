
class Display {
    showWelcome() {
        console.clear();
        console.log(" SIMULASI DAPUR ");
    }

    showResults(results, totalTime, mode) {
        console.log("\nHASIL MEMASAK");
        console.log(`Menu: ${results.join(", ")}`);
        console.log(`Total waktu: ${totalTime} detik`);
        console.log(`Mode: ${mode === 'parallel' ? 'Parallel' : 'Sequential'}`);
        
        if (mode === 'parallel') {
            console.log("Lebih efisien karena semua dimasak bersamaan");
        } else {
            console.log("Membutuhkan waktu lebih lama karena dimasak satu per satu.");
        }
    }
}

module.exports = Display;