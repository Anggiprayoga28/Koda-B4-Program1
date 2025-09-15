class Timer {
    static delay(seconds) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve();
            }, seconds * 1000);
        });
    }

    static getCurrentTime() {
        return Date.now();
    }

    static formatDuration(milliseconds) {
        return Math.round(milliseconds / 1000);
    }

    static async measureTime(asyncOperation) {
        const start = this.getCurrentTime();
        const result = await asyncOperation();
        const duration = this.formatDuration(this.getCurrentTime() - start);
        
        return { result, duration };
    }
}

module.exports = Timer;
