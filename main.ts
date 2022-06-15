namespace screenMagic {
    /**
     * address LEDs linearly row first
     */
    //% blockId=screenmagicplotat
    //% block="plot at $index"
    //% index.min=0 index.max=1000
    export function plottingLED(index: number): void {
        index |= 0
        const x = Math.floor(index % 5)
        const y = Math.floor(index / 5)
        led.plot(x, y)
    }
}
