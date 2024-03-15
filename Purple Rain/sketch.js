let drops = []

function setup() {
    createCanvas(400, 400)
    for (let i = 0; i <500; i+= 1){
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