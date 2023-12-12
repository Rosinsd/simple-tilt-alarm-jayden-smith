input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Angry)
    music.play(music.stringPlayable("D B C5 G A B C5 - ", 120), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
