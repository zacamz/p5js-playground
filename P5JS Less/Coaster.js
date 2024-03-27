let legend = {
    D: "dummy",
    U: "notWall",
    W: "wall",
    S: "space",
}

let coasters =
    [[["D", "U", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"]],

    [["D", "U", "D", "U", "D"],
    ["U", "S", "U", "S", "U"],
    ["D", "U", "D", "W", "D"],
    ["U", "S", "W", "S", "U"],
    ["D", "U", "D", "U", "D"]],

    [["D", "U", "D", "U", "D"],
    ["U", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"],
    ["U", "S", "W", "S", "U"],
    ["D", "W", "D", "U", "D"]],

    [["D", "U", "D", "U", "D"],
    ["U", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"],
    ["U", "S", "W", "S", "U"],
    ["D", "U", "D", "W", "D"]],

    [["D", "U", "D", "U", "D"],
    ["U", "S", "W", "S", "U"],
    ["D", "U", "D", "W", "D"],
    ["U", "S", "U", "S", "W"],
    ["D", "U", "D", "U", "D"]],

    [["D", "U", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "W", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"]],

    [["D", "U", "D", "U", "D"],
    ["W", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"],
    ["U", "S", "U", "S", "U"],
    ["D", "U", "D", "U", "D"]],]

    class Coaster {
        constructor(){
                this.coasterSize = min(width,height) * 0.8, 
        this.coasterx = (width - this.coasterSize)/2, 
        this.coastery= (height - this.coasterSize)/2
        }
        buildCoaster(){
            let coaster = square(this.coasterx,this.coastery,this.coasterSize,50)
            let spotSize = this.coasterSize / 2
            for (let i =0; i < 2; i++){
                for (let j =0; j < 2; j++){
                
                }
            }
           console.log("working")
        }
        renderBoard(){
    
        }
    }