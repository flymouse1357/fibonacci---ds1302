function calc (num: number, add: number) {
    text_list = [""]
    for (let i5 = 0; i5 <= 1; i5++) {
        for (let i4 = 0; i4 <= 1; i4++) {
            for (let i3 = 0; i3 <= 1; i3++) {
                for (let i2 = 0; i2 <= 1; i2++) {
                    for (let i1 = 0; i1 <= 1; i1++) {
                        if (num == i1 + (i2 + (i3 * 2 + (i4 * 3 + i5 * 5)))) {
                            text_list.push("" + convertToText(i1) + convertToText(i2) + convertToText(i3) + convertToText(i4) + convertToText(i5))
                        }
                    }
                }
            }
        }
    }
    number = text_list.length
    randomNum = randint(1, number - 1)
    lights = parseFloat(text_list[randomNum])
    for (let index = 0; index <= 4; index++) {
        colors[5 - index] = colors[5 - index] + lights % 10 * add
        lights = Math.idiv(lights, 10)
    }
}
input.onButtonPressed(Button.A, function () {
    control.reset()
})
function showClock () {
    if (colors[1] == 1) {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (colors[1] == 2) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (colors[1] == 3) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.showColor(neopixel.rgb(255, 127, 255))
    }
    if (colors[2] == 1) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (colors[2] == 2) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (colors[2] == 3) {
        strip2.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip2.showColor(neopixel.rgb(255, 127, 255))
    }
    if (colors[3] == 1) {
        strip3.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (colors[3] == 2) {
        strip3.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (colors[3] == 3) {
        strip3.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip3.showColor(neopixel.rgb(255, 127, 255))
    }
    if (colors[4] == 1) {
        strip4.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (colors[4] == 2) {
        strip4.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (colors[4] == 3) {
        strip4.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip4.showColor(neopixel.rgb(255, 127, 255))
    }
    if (colors[5] == 1) {
        strip5.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (colors[5] == 2) {
        strip5.showColor(neopixel.colors(NeoPixelColors.Red))
    } else if (colors[5] == 3) {
        strip5.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip5.showColor(neopixel.rgb(255, 127, 255))
    }
    strip.show()
    strip2.show()
    strip3.show()
    strip4.show()
    strip5.show()
}
let new_hour = 0
let lights = 0
let randomNum = 0
let number = 0
let text_list: string[] = []
let colors: number[] = []
let strip5: neopixel.Strip = null
let strip4: neopixel.Strip = null
let strip3: neopixel.Strip = null
let strip2: neopixel.Strip = null
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB_RGB)
strip2 = neopixel.create(DigitalPin.P2, 1, NeoPixelMode.RGB_RGB)
strip3 = neopixel.create(DigitalPin.P9, 2, NeoPixelMode.RGB_RGB)
strip4 = neopixel.create(DigitalPin.P11, 4, NeoPixelMode.RGB_RGB)
strip5 = neopixel.create(DigitalPin.P12, 8, NeoPixelMode.RGB_RGB)
strip.showColor(neopixel.rgb(255, 127, 255))
strip2.showColor(neopixel.rgb(255, 127, 255))
strip3.showColor(neopixel.rgb(255, 127, 255))
strip4.showColor(neopixel.rgb(255, 127, 255))
strip5.showColor(neopixel.rgb(255, 127, 255))
colors = [
0,
0,
0,
0,
0,
0
]
let ds = DS1302.create(DigitalPin.P13, DigitalPin.P14, DigitalPin.P15)
let hour = ds.getHour()
let minute = ds.getMinute()
ds.start()
calc(hour, 1)
calc(Math.ceil(minute / 5), 2)
showClock()
basic.forever(function () {
    new_hour = ds.getHour()
    if (new_hour > 12) {
        new_hour = new_hour - 12
    }
    if (hour != new_hour || minute != ds.getMinute()) {
        colors = [
        0,
        0,
        0,
        0,
        0,
        0
        ]
        calc(new_hour, 1)
        calc(Math.ceil(ds.getMinute() / 5), 2)
        showClock()
        hour = new_hour
        minute = ds.getMinute()
    }
    basic.showString("" + new_hour + ":" + ds.getMinute() + ":" + ds.getSecond())
})
