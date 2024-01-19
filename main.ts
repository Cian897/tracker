input.onGesture(Gesture.Shake, function () {
    steps += 1
})
let steps = 0
let hours = 0
if (steps >= 10000) {
    basic.showString("You hit the recommended daily steps!")
} else if (steps >= 5000) {
    basic.showString("Half way there!")
} else if (steps >= 2500) {
    basic.showString("2500 down")
} else if (steps >= 1000) {
    basic.showString("1000 down")
}
loops.everyInterval(3600000, function () {
    hours += 1
    datalogger.log(datalogger.createCV("steps", steps))
    datalogger.log(datalogger.createCV("time", hours))
})
