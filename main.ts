let son = 0
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    son = envirobit.getNoiseLevel() * 10
    led.setBrightness(son)
})
