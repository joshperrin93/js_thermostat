const Thermostat = require('./thermostat')

describe('Thermostat', () => {
    describe('#Initially', () => {
        it('initially has a starting temperature of 20 degrees', () => {
            const thermostat = new Thermostat
            expect(thermostat.getTemperature()).toEqual(20);
        })
    })

    describe('#Up method', () => {
        it('turns the temparature up by 2 degrees', () => {
            const thermostat = new Thermostat
            thermostat.up(2)
            expect(thermostat.getTemperature()).toEqual(22);
        })

        it('turns the temparature up by 5 degrees', () => {
            const thermostat = new Thermostat
            thermostat.up(5)
            expect(thermostat.getTemperature()).toEqual(25);
        })
    })

    describe('#Down method', () => {
        it('turns the temperature down by 2 degrees', () => {
            const thermostat = new Thermostat
            thermostat.down(2)
            expect(thermostat.getTemperature()).toEqual(18)
        })

        it('turns the temperature down by 5 degrees', () => {
            const thermostat = new Thermostat
            thermostat.down(5)
            expect(thermostat.getTemperature()).toEqual(15)
        })

        it('turns temperature up and then down', () => {
            const thermostat = new Thermostat
            thermostat.up(4)
            thermostat.down(6)
            expect(thermostat.getTemperature()).toEqual(18)
        })
    })

    describe('#MinimumTemperature', () => {
        it('cannot go below a minimum temperature of 10 degrees', () => {
            const thermostat = new Thermostat
            thermostat.down(11)
            expect(thermostat.getTemperature()).toEqual(10)
        })
    })

    describe('#MaximumTemperature', () => {
        it('cannot exceed 25 degrees with power saving mode on', () => {
            const thermostat = new Thermostat
            thermostat.up(6)
            expect(thermostat.getTemperature()).toEqual(25)
        })

        it('cannot exceed 32 degrees with power saving mode on', () => {
            const thermostat = new Thermostat
            thermostat.setPowerSavingMode(false)
            thermostat.up(13)
            expect(thermostat.getTemperature()).toEqual(32)
        })

        it('return temp to 25 degrees when powerSavingMode turned on and temp > 25', () => {
            const thermostat = new Thermostat
            thermostat.setPowerSavingMode(false)
            thermostat.up(8)
            thermostat.setPowerSavingMode(true)
            expect(thermostat.getTemperature()).toEqual(25)
        })
    })

    describe('#reset method', () => {
        it('returns temperature to 20 degrees', () => {
            const thermostat = new Thermostat
            thermostat.up(5)
            thermostat.reset()
            expect(thermostat.getTemperature()).toEqual(20)
        })
    })

    describe('#currentEnergyUsage methd', () => {
        it('returns low-usage if temp below 18 degrees', () => {
            const thermostat = new Thermostat
            thermostat.down(3)
            expect(thermostat.currentEnergyUsage()).toEqual('low-usage')
        })

        it('returns medium-usage if temp below or equal to 25 degrees', () => {
            const thermostat = new Thermostat
            thermostat.up(5)
            expect(thermostat.currentEnergyUsage()).toEqual('medium-usage')
        })

        it('returns jihj-usage if temp below or equal to 25 degrees', () => {
            const thermostat = new Thermostat
            thermostat.setPowerSavingMode(false)
            thermostat.up(7)
            expect(thermostat.currentEnergyUsage()).toEqual('high-usage')
        })
    })
})