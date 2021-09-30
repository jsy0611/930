input.onButtonPressed(Button.A, function () {
    radio.sendString("APPLE")
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "APPLE") {
        pins.analogWritePin(AnalogPin.P1, 1)
    }
})
radio.setGroup(8)
