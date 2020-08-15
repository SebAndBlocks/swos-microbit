devices.onNotified(MesDeviceInfo.IncomingCall, function () {
    basic.showIcon(IconNames.SmallDiamond)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.Diamond)
    music.playTone(294, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.SmallDiamond)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.Diamond)
    basic.pause(200)
    music.playTone(294, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.SmallDiamond)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.Diamond)
    music.playTone(294, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(200)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.Diamond)
    music.playTone(294, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.SmallDiamond)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.Diamond)
    basic.pause(200)
    music.playTone(294, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.SmallDiamond)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.Diamond)
    music.playTone(294, music.beat(BeatFraction.Double))
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
})
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
input.onButtonPressed(Button.B, function () {
    if (input.compassHeading() == 0) {
        basic.showString("N")
    } else if (input.compassHeading() == 90) {
        basic.showString("E")
    } else if (input.compassHeading() == 180) {
        basic.showString("S")
    } else if (input.compassHeading() == 270) {
        basic.showString("W")
    } else {
        basic.showString("?")
        music.playTone(262, music.beat(BeatFraction.Double))
    }
})
input.onGesture(Gesture.Shake, function () {
    StepCounter += 1
})
devices.onNotified(MesDeviceInfo.IncomingMessage, function () {
    basic.showLeds(`
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        # . . . .
        `)
    music.playTone(262, music.beat(BeatFraction.Double))
    music.playTone(262, music.beat(BeatFraction.Double))
})
let BT_Dissconnections = 0
let StepCounter = 0
StepCounter = 0
