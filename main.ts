bluetooth.onBluetoothConnected(function () {
    basic.showLeds(`
        . . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .
        `)
    basic.clearScreen()
})
bluetooth.onBluetoothDisconnected(function () {
    if (true) {
        BT_Dissconnections += 1
    }
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (StepCounter))
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (BT_Dissconnections))
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    StepCounter += 1
})
let BT_Dissconnections = 0
let StepCounter = 0
StepCounter = 0
