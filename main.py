def on_button_pressed_a():
    music.stop_all_sounds()
    basic.clear_screen()
    basic.show_string("KDO BYL PRVNI PREZIDENT?")
    music.ring_tone(988)
    music.stop_all_sounds()
    basic.show_string("A : VACLAV KLAUS")
    basic.clear_screen()
    basic.show_string("OBAMA")
    basic.clear_screen()
    basic.clear_screen()
    basic.show_leds("""
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        """)
    basic.clear_screen()
    basic.show_string("" + str(input.button_is_pressed(Button.B)))
    basic.show_leds("""
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        """)
    basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    basic.show_leds("""
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        """)
    music.play(music.string_playable("C5 C D F G E F F ", 120),
        music.PlaybackMode.UNTIL_DONE)
    music.play(music.string_playable("F G F E G A G G ", 120),
        music.PlaybackMode.UNTIL_DONE)
    basic.clear_screen()
    basic.show_string("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLll")
input.on_button_pressed(Button.B, on_button_pressed_b)

music.set_volume(82)
music.play(music.string_playable("C5 - C5 - C5 - C5 - ", 305),
    music.PlaybackMode.UNTIL_DONE)
basic.show_leds("""
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # . .
    """)
basic.clear_screen()
basic.show_leds("""
    . . # . .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    """)
basic.clear_screen()
basic.show_leds("""
    . . # . .
    . # . # .
    . # # # .
    # . . . #
    # . . . #
    """)
basic.clear_screen()
basic.show_leds("""
    # # . . .
    # . # . .
    # . # . .
    # . # . .
    # # . . .
    """)
basic.clear_screen()
basic.show_leds("""
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    """)
basic.clear_screen()
basic.show_leds("""
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    """)
basic.clear_screen()
basic.show_leds("""
    . # # # .
    # . . . .
    # . # # .
    # . . # .
    . # # # .
    """)
basic.clear_screen()
music.play(music.tone_playable(247, music.beat(BeatFraction.BREVE)),
    music.PlaybackMode.UNTIL_DONE)
basic.show_string("WELCOME IN PAT OS 1.0")
music.play(music.string_playable("E B C5 A B G A F ", 120),
    music.PlaybackMode.UNTIL_DONE)
for index in range(4):
    basic.show_leds("""
        # . # . #
        # . # . #
        # # # # #
        . # # # .
        # . # . #
        """)
    basic.clear_screen()
    music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
basic.clear_screen()
basic.show_leds("""
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    """)
basic.clear_screen()
basic.show_leds("""
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    """)
basic.clear_screen()
basic.show_leds("""
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    """)
basic.clear_screen()
basic.show_leds("""
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    """)
basic.clear_screen()
basic.show_leds("""
    # # # . .
    # . . . .
    # # # . .
    # . . . .
    # # # . .
    """)
basic.clear_screen()
basic.show_leds("""
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    """)
basic.clear_screen()
basic.show_leds("""
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # . .
    """)
basic.clear_screen()
basic.show_leds("""
    . . # . .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    """)
basic.clear_screen()
basic.show_leds("""
    . . # . .
    . # . # .
    . # # # .
    # . . . #
    # . . . #
    """)
basic.clear_screen()
basic.show_leds("""
    # # . . .
    # . # . .
    # . # . .
    # . # . .
    # # . . .
    """)
basic.clear_screen()
basic.show_leds("""
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    """)
basic.clear_screen()
basic.show_leds("""
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    """)
basic.clear_screen()
basic.show_leds("""
    . # # # .
    # . . . .
    # . # # .
    # . . # .
    . # # # .
    """)
basic.clear_screen()
music.play(music.string_playable("A G A G A G A G ", 214),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
music.play(music.string_playable("C5 C5 C5 C5 C5 C5 C5 C5 ", 500),
    music.PlaybackMode.UNTIL_DONE)
basic.show_string("FATAL ERROR")
music.stop_all_sounds()
basic.clear_screen()
for index2 in range(5):
    basic.show_leds("""
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        """)
    music.play(music.tone_playable(988, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
    basic.clear_screen()
    basic.show_leds("""
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        """)
    basic.clear_screen()
    music.play(music.tone_playable(988, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.UNTIL_DONE)
basic.show_leds("""
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . # . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . # . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . . # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . #
    . . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . #
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . #
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . # .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . # . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . # . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    """)
basic.show_leds("""
    . . . . .
    # . . . .
    . . . . .
    . . . . .
    . . . . .
    """)