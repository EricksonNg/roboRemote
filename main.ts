control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Asleep)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_AB, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    basic.showIcon(IconNames.House)
    radio.sendValue("both", 3)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P3, EventBusValue.MICROBIT_BUTTON_EVT_UP, function () {
    radio.sendNumber(3)
    basic.showIcon(IconNames.Happy)
})
radio.setGroup(158)
