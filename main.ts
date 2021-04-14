input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    led.plot(0, y - 1)
    if (y > 0) {
        led.unplot(0, y)
        y += 0 - 1
    }
    
})
function shoot(n: number) {
    for (let i = 1; i < n; i++) {
        led.plot(i, y)
        basic.pause(150)
        led.unplot(i, y)
        basic.pause(150)
    }
}

input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    remove()
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    led.plot(0, y + 1)
    if (y < 4) {
        led.unplot(0, y)
        y += 1
    }
    
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

let y = 0
basic.showLeds(`
    . . . # #
    . . . # #
    # . . # #
    . . . # #
    . . . # #
    `)
y = 2
forever(function on_forever() {
    let flag = true
    for (let j = 0; j < 5; j++) {
        if (led.point(j, 4)) {
            flag = false
        }
        
    }
    if (flag) {
        basic.showString("GAME OVER")
        control.reset()
    }
    
})
