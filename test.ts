// tests go here; this will not be compiled when this package is used as an extension.
let i = 0
for(let i=0; i<25; ++i){
    screenMagic.plottingLED(i)
    basic.pause(100)
    i++
}