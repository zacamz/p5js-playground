let drops = []

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0,0)
    canvas.style("z-index","-1")

    for (let i = 0; i <windowWidth; i+= 1){
        drops[i] = new Drop()
    }
};
function draw() {
    
    background(230, 230, 250)
    for ( let i = 0; i < drops.length; i+=1){
        drops[i].fall()
        drops[i].show()
    }
};