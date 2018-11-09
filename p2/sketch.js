// grid demo
// igme-101


let tiles = [];
//let rooms = [];
let images = [];
let tempImages;
let randomImages = [];
let anim = [];
let tileSize = 100;
let rows = 4;
let cols = 4;
let hero;
var animationRate = 10;
var imgCounter = 0;
var starting = true;
var noInstructions = false;

//loads up all the photos
function preload() {
    //    for (var i = 0; i < 16; i++) {
    //        images.push(loadImage("../images/rooms/" + i + ".jpg"))
    //        images.push(loadImage("../images/rooms/" + i + "a.jpg"))
    //        images.push(loadImage("../images/rooms/" + i + "b.jpg"));
    //    }

    for (var i = 0; i < 16; i++) {
        images[i] = loadImage("images/rooms/" + i + ".jpg");
    }

    console.log(images[0]);

    anim[0] = loadImage("images/idle1.png");
    anim[1] = loadImage("images/idle2.png");
    anim[2] = loadImage("images/active1.png");
    anim[3] = loadImage("images/active2.png");
    anim[4] = loadImage("images/active3.png");
}



function setup() {
    var canvas = createCanvas(cols * tileSize, rows * tileSize);
    canvas.parent('jsgame');
//    var x = (windowWidth - width) / 2;
//    var y = (windowHeight - height) / 2;
//    canvas.position(x, y);
    background(180);
    tileSize = width / cols;

    //this randomizes the sequence of the room images per tile
    let tempImages = images.slice();
    randomImages.push(tempImages[0]);
    tempImages.splice(0, 1)
    for (let i = 0; i < images.length; i++) {
        let ran = floor(random(tempImages.length));
        randomImages.push(tempImages[ran]);
        tempImages.splice(ran, 1);
    }


    //creates the tile classes
    for (let r = 0; r < rows; r++) {

        let tempArray = [];
        for (let c = 0; c < cols; c++) {
            tempArray.push(new Tile(
                c * tileSize,
                r * tileSize,
                tileSize,
                c,
                r,
                "#046",
                randomImages,
                imgCounter));
            imgCounter++;
        }
        tiles.push(tempArray);
    }

    //creates the hero class
    hero = new Sprite(rows, cols, tileSize, anim);
}

function draw() {
    background(130);

    //displayes the tiles
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            tiles[r][c].update();
        }
    }

    fill('rgba(0,0,0,0)');
    stroke("#344c50")
    strokeWeight(20);
    rect(0, 0, width, height);
    noStroke();
    fill("#00e726")
    rect(0, 35, 10, 30);
    fill("#ff1212")
    rect(width - 10, 335, 10, 30);

    //animates the character
    if (frameCount % animationRate == 0) {
        hero.transition(); // Advance the animation to the next frame
    }

    //displays the animated character
    hero.update(); // Display the frame



    //there's probably a loop to make this else if make more sense, but I'm not getting it right now...... anyway, this is meant to show the instructions at start or show the game over screen or show the game won screen
    if (starting == true) {
        instructions();
    } else if (tiles[0][0].gameOver == true || tiles[0][1].gameOver == true || tiles[0][2].gameOver == true || tiles[0][3].gameOver == true || tiles[1][0].gameOver == true || tiles[1][1].gameOver == true || tiles[1][2].gameOver == true || tiles[1][3].gameOver == true || tiles[2][0].gameOver == true || tiles[2][1].gameOver == true || tiles[2][2].gameOver == true || tiles[2][3].gameOver == true || tiles[3][0].gameOver == true || tiles[3][1].gameOver == true || tiles[3][2].gameOver == true || tiles[3][3].gameOver == true) {
        gameOver();
        noInstructions = true;
    } else if (tiles[3][3].win == true && tiles[0][1].itsBlack == true && tiles[0][2].itsBlack == true && tiles[0][3].itsBlack == true && tiles[1][0].itsBlack == true && tiles[1][1].itsBlack == true && tiles[1][2].itsBlack == true && tiles[1][3].itsBlack == true && tiles[2][0].itsBlack == true && tiles[2][1].itsBlack == true && tiles[2][2].itsBlack == true && tiles[2][3].itsBlack == true && tiles[3][0].itsBlack == true && tiles[3][1].itsBlack == true && tiles[3][2].itsBlack == true) {
        gameWon();
        noInstructions = true;
    }

}

//this displays the instructions
function instructions() {
    fill("#000000");
    rect(0, 0, width, height);
    fill("#ffffff")
    textSize(12);
    textAlign(CENTER);
    text("An earthquake hits your lab and breaks all the sample vials that contain a dangerous virus. Soon the vents will open and release the plague into the world. The virus has been released in every room except the sterile entrance room. You must enter each room and pull the switch to seal it in. You can't exit a contaminated room until you pull the switch. If you re-enter the room after the switch is pulled you will die of exposure", 25, 10, 350, 500);
    textSize(22);
    fill("#ff0000")
    text("How can you seal the virus into every contaminated room and survive to tell the story?", 20, 120, 350, 200);
    textSize(15);
    fill("#ffffff")
    text("1 - You must enter the building through the entrance (top left) and leave through the exit (bottom right)", 20, 210, 360, 100);
    text("2 - every room except the entrance is contaminated", 20, 258, 360, 100);
    text("3 - once you enter a contaminated room, you must pull the switch (hold enter key to pull the switch)", 20, 285, 360, 100);
    text("4 - you will die if you return to a room once its switch has been activated", 20, 330, 360, 100);
    textSize(11);
    fill("#ff0000")
    text("click to start the game / bring back instructions after you've started", 40, 378, 330, 100);
}

//this displays the  game over screen
function gameOver() {
    fill("#ff0000");
    rect(0, 0, width, height);
    fill("#ffffff")
    textSize(30);
    textAlign(CENTER);
    text("YOU LOST", 100, 80, 200, 100);
    textSize(15);
    textAlign(CENTER, CENTER);
    text("You released the plague into the world and everyone died (but you died first)", 100, 100, 200, 200);
    textSize(12);
    textAlign(CENTER);
    text("to play again, refresh the page", 100, 300, 200, 100);
    text("This game wan inspired by Lisa Winer's Virus Riddle for TedEd", 30, 330, 340, 100)


}

//this displays the game won screen
function gameWon() {
    fill("#00ff00");
    rect(0, 0, width, height);
    fill("#ffffff")
    textSize(30);
    textAlign(CENTER);
    text("YOU WON!", 100, 80, 200, 100);
    textSize(15);
    textAlign(CENTER, CENTER);
    text("You saved the world and allowed the plague to be studied, resulting in the creation of hundreds of new powerful antibiotics!", 100, 100, 200, 200);
    textSize(12);
    textAlign(CENTER);
    text("to play again, refresh the page", 100, 300, 200, 100);
    text("This game wan inspired by Lisa Winer's Virus Riddle for TedEd", 30, 330, 340, 100)


}

//this hides or brings back the instructions
function mousePressed() {
    if (noInstructions == true) {
        starting = false;
    } else {
        if (starting) {
            starting = false;
        } else {
            starting = true;
        }
    }
}

//tells the character how to move
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        hero.moveLeft();
    } else if (keyCode === RIGHT_ARROW) {
        hero.moveRight();
    } else if (keyCode === UP_ARROW) {
        hero.moveUp();
    } else if (keyCode === DOWN_ARROW) {
        hero.moveDown();
    }
}
