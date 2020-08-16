def on_notified_incoming_call():
    basic.show_icon(IconNames.SMALL_DIAMOND)
    music.play_tone(262, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.DIAMOND)
    music.play_tone(294, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.SMALL_DIAMOND)
    music.play_tone(262, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(200)
    music.play_tone(294, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.SMALL_DIAMOND)
    music.play_tone(262, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.DIAMOND)
    music.play_tone(294, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.pause(400)
    music.play_tone(262, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.DIAMOND)
    music.play_tone(294, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.SMALL_DIAMOND)
    music.play_tone(262, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.DIAMOND)
    basic.pause(200)
    music.play_tone(294, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.SMALL_DIAMOND)
    music.play_tone(262, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.DIAMOND)
    music.play_tone(294, music.beat(BeatFraction.DOUBLE))
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.show_icon(IconNames.DIAMOND)
    basic.show_icon(IconNames.SMALL_DIAMOND)
    basic.show_icon(IconNames.DIAMOND)
devices.on_notified(MesDeviceInfo.INCOMING_CALL, on_notified_incoming_call)

def on_bluetooth_connected():
    basic.show_leds("""
        . . # # .
        # . # . #
        . # # # .
        # . # . #
        . . # # .
        """)
    basic.clear_screen()
bluetooth.on_bluetooth_connected(on_bluetooth_connected)

def on_bluetooth_disconnected():
    global BT_Dissconnections
    if True:
        BT_Dissconnections += 1
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
    basic.clear_screen()
bluetooth.on_bluetooth_disconnected(on_bluetooth_disconnected)

def on_button_pressed_a():
    basic.show_string("" + str(StepCounter))
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_string("" + str(BT_Dissconnections))
    basic.clear_screen()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    if input.compass_heading() == 0:
        basic.show_string("N")
    elif input.compass_heading() == 90:
        basic.show_string("E")
    elif input.compass_heading() == 180:
        basic.show_string("S")
    elif input.compass_heading() == 270:
        basic.show_string("W")
    elif input.compass_heading() == 360:
        basic.show_string("?")
        music.play_tone(262, music.beat(BeatFraction.DOUBLE))
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global StepCounter
    StepCounter += 1
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_notified_incoming_message():
    basic.show_leds("""
        . # # # .
        # # # # #
        # # # # #
        . # # # .
        # . . . .
        """)
    music.play_tone(262, music.beat(BeatFraction.DOUBLE))
    music.play_tone(262, music.beat(BeatFraction.DOUBLE))
devices.on_notified(MesDeviceInfo.INCOMING_MESSAGE, on_notified_incoming_message)

BT_Dissconnections = 0
StepCounter = 0
StepCounter = 0