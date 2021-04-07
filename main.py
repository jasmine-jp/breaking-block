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
    remove(y)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global y
    led.plot(0, y+1)
    if y < 4:
        led.unplot(0, y)
        y += 1
    remove(y)
input.on_button_pressed(Button.B, on_button_pressed_b)

def remove(int: y):
    if led.point(3, y):
        led.unplot(3, y)
    else:
        led.unplot(4, y)