control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Heart)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    radio.sendNumber(3)
    basic.showIcon(IconNames.Angry)
})
radio.setGroup(158)
radio.sendNumber(0)
basic.forever(function () {
	
})
