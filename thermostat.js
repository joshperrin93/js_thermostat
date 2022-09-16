class Thermostat {

    constructor() {
        this.temperature = 20
        this.powerSavingMode = true
    }

    getTemperature() {
        return this.temperature
    }

    up() {
        this.temperature += 1
        if ((this.temperature > 25) && (this.powerSavingMode === true)) {
            this.temperature = 25
            return this.temperature
        } else if ((this.temperature > 32) && (this.powerSavingMode === false)){
            this.temperature = 32
            return this.temperature
        } else {
            return this.temperature
        }
    }

    down() {
        this.temperature -= 1
        if (this.temperature < 10) {
            this.temperature = 10
            return this.temperature
        } else {
            return this.temperature
        }
    }

    setPowerSavingMode(boolean) {
        if ((boolean === true) && (this.temperature > 25)) {
            this.powerSavingMode = true
            this.temperature = 25
        } else if (boolean === true) {
            this.powerSavingMode = true
        } else if (boolean === false) {
            this.powerSavingMode = false
        } else {
            this.powerSavingMode
        }
    }

    reset() {
        this.temperature = 20
    }

    currentEnergyUsage() {
        if (this.temperature < 18) {
            return 'low-usage'
        } else if (this.temperature <= 25) {
            return 'medium-usage'
        } else {
            return 'high-usage'
        }
    }

}

module.exports = Thermostat