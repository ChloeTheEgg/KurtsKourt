input.onPinPressed(TouchPin.P0, function () {
    servos.P0.run(50)
    servos.P1.run(50)
    servos.P2.run(50)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(0 + 0)
})
input.onPinPressed(TouchPin.P1, function () {
    servos.P1.stop()
    servos.P2.stop()
    servos.P0.stop()
})
