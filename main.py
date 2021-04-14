basic.show_leds("""
. . . # #
. . . # #
# . . # #
. . . # #
. . . # #
""")

y = 2
def on_button_pressed_a():
    global y
    led.plot(0, y-1)
    if y > 0:
        led.unplot(0, y)
        y -= 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global y
    led.plot(0, y+1)
    if y < 4:
        led.unplot(0, y)
        y += 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_button_pressed_ab():
    remove()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def remove():
    global y
    if led.point(3, y):
        shoot(3)
        led.unplot(3, y)
    else:
        shoot(4)
        led.unplot(4, y)

def shoot(n):
    global y
    for i in range(1, n):
        led.plot(i, y)
        basic.pause(150)
        led.unplot(i, y)
        basic.pause(150)