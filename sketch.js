/*
@author Winry
@date 2021-11-14

code plan:
    initialize WEBGL, draw red cube in center to test
    create grid of rects
    make each grid oscillate their alpha with the red square in middle
    change the oscillations to depth of boxes, and turn red square to cube

    additions:
        remove boxes and simply oscillate y-position
        maybe color rects to make them neon!

 */
let font, w
let cam, angle

function preload() {
    font = loadFont('data/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360, WEBGL)
    colorMode(HSB, 360, 100, 100, 100)

    // initialize a new EasyCam, a fork of the Peasycam repository
    cam = new Dw.EasyCam(this._renderer, {distance:500})

    // width and height of each rectangle or box
    w = 50

    // ensures proper centering of boxes
    rectMode(CENTER)

    angle = 0
}

function draw() {
    background(234, 34, 24)

    // noStroke()

    fill(0, 100, 60, 40)
    rect(0, 0, w)

    // since the height and width are not even, I'll have to hard-code the
    // values
    for (let x = -350; x <= 350; x += w) {
        for (let y = -350; y <= 350; y += w) {
            push()

            translate(x, y)

            // this is the distance from the z axis, and determines the
            // phase of each rectangle drawn.
            let distance = sqrt(x**2 + y**2)

            // the sine wave included in the alpha calculation.
            // generalSineFormula = amplitude * sin(period(x+phase)) + y
            // we want to alter the phase and period, mostly. "What's the
            // x?", you might ask. It's actually frameCount/someModifier!
            let h = sin(TAU/width * (angle + distance))

            // the alpha value of the rectangle
            let a = map(h, -1, 1, 1, 100)

            fill(0, 0, 100, a)
            rect(0, 0, w)

            pop()
        }
    }

    angle += 2
}