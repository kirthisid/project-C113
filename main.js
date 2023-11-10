function setup() {
    canvas = createCanvas(600, 600)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
}
function draw() {
    fill("red")
    background("cyan")
    image(video, 50, 50, 500, 300)
    rect(20,20,580,20)
    circle(300,300,20)
    square(304,240,29)
    
}

function take_snapshot() {
    save("selfie.JPEG")
    }
