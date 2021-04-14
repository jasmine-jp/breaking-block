basic.showLeds(`
. . . # #
. . . # #
# . . # #
. . . # #
. . . # #
`)
let y = 2
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    led.plot(0, y - 1)
    if (y > 0) {
        led.unplot(0, y)
        y -= 1
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    led.plot(0, y + 1)
    if (y < 4) {
        led.unplot(0, y)
        y += 1
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    remove()
})
function remove() {
    
    if (led.point(3, y)) {
        shoot(3)
        led.unplot(3, y)
    } else {
        shoot(4)
        led.unplot(4, y)
    }
    
}

function shoot(n: number) {
    
    for (let i = 1; i < n; i++) {
        led.plot(i, y)
        basic.pause(150)
        led.unplot(i, y)
        basic.pause(150)
    }
}

