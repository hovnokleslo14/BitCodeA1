input.onButtonPressed(Button.A, function () {
    music.stopAllSounds()
    basic.clearScreen()
    basic.showString("KDO BYL PRVNI PREZIDENT?")
    music.ringTone(988)
    music.stopAllSounds()
    basic.showString("A : VACLAV KLAUS")
    basic.clearScreen()
    basic.showString("OBAMA")
    basic.clearScreen()
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
    basic.clearScreen()
    basic.showString("" + input.buttonIsPressed(Button.B))
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    music.play(music.stringPlayable("C5 C D F G E F F ", 120), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("F G F E G A G G ", 120), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    basic.showString("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLll")
})
music.setVolume(49)
music.play(music.stringPlayable("C5 - C5 - C5 - C5 - ", 305), music.PlaybackMode.UntilDone)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # . .
    `)
basic.clearScreen()
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    `)
basic.clearScreen()
basic.showLeds(`
    . . # . .
    . # . # .
    . # # # .
    # . . . #
    # . . . #
    `)
basic.clearScreen()
basic.showLeds(`
    # # . . .
    # . # . .
    # . # . .
    # . # . .
    # # . . .
    `)
basic.clearScreen()
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.clearScreen()
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.clearScreen()
basic.showLeds(`
    . # # # .
    # . . . .
    # . # # .
    # . . # .
    . # # # .
    `)
basic.clearScreen()
music.play(music.tonePlayable(247, music.beat(BeatFraction.Breve)), music.PlaybackMode.UntilDone)
basic.showString("WELCOME IN PAT OS 1.0")
music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . # . #
        # . # . #
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.clearScreen()
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
basic.clearScreen()
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
basic.clearScreen()
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.clearScreen()
basic.showLeds(`
    . # # # .
    . # . . .
    . # # # .
    . . . # .
    . # # # .
    `)
basic.clearScreen()
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.clearScreen()
basic.showLeds(`
    # # # . .
    # . . . .
    # # # . .
    # . . . .
    # # # . .
    `)
basic.clearScreen()
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
basic.clearScreen()
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # . .
    `)
basic.clearScreen()
basic.showLeds(`
    . . # . .
    . # . # .
    . # . # .
    . # . # .
    . . # . .
    `)
basic.clearScreen()
basic.showLeds(`
    . . # . .
    . # . # .
    . # # # .
    # . . . #
    # . . . #
    `)
basic.clearScreen()
basic.showLeds(`
    # # . . .
    # . # . .
    # . # . .
    # . # . .
    # # . . .
    `)
basic.clearScreen()
basic.showLeds(`
    . . # . .
    . . . . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.clearScreen()
basic.showLeds(`
    # . . . #
    # # . . #
    # . # . #
    # . . # #
    # . . . #
    `)
basic.clearScreen()
basic.showLeds(`
    . # # # .
    # . . . .
    # . # # .
    # . . # .
    . # # # .
    `)
basic.clearScreen()
music.play(music.stringPlayable("A G A G A G A G ", 214), music.PlaybackMode.LoopingInBackground)
music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 500), music.PlaybackMode.UntilDone)
basic.showString("FATAL ERROR")
music.stopAllSounds()
basic.clearScreen()
for (let index = 0; index < 5; index++) {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.clearScreen()
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.clearScreen()
    music.play(music.tonePlayable(988, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
}
for (let index = 0; index < 4; index++) {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 0, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.LoopingInBackground)
}
