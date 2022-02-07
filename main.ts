let win = 0
input.onGesture(Gesture.Shake, function () {
    win = randint(0, 2)
    if (win == 0) {
        basic.showLeds(`
            # # . . #
            # # . # .
            # # # . .
            # # . # .
            # # . . #
            `)
        soundExpression.giggle.playUntilDone()
    } else if (win == 1) {
        basic.showLeds(`
            . . . # #
            . . . # #
            # # # # #
            . . . # #
            . . . # #
            `)
        soundExpression.giggle.play()
    } else {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        soundExpression.sad.play()
    }
})
