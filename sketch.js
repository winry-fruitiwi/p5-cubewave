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
let font
// let cam

function preload() {
    font = loadFont('data/Meiryo-01.ttf')
}

function setup() {
    createCanvas(640, 360)
    colorMode(HSB, 360, 100, 100, 100)

    // cam = new Dw.EasyCam(this._renderer, {distance:300})
}

function draw() {
    background(209, 80, 30)
    
    background(234, 34, 24)
}