//Tile class

class Tile {
    constructor(x, y, size, c, r, bgCol, imList, num, numrow) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.bgCol = bgCol;
        this.win = false;
        this.imageList = imList;
        this.imgNum = num;
        this.indexC = c;
        this.indexR = r;
        this.itsRed = false;
        this.itsBlack = false;
        this.gameOver = false;

    }

    //changes to the red room if the person is on the tile and the character is on the switch frame
    changeRoom1() {
        if ((hero.xTile) == this.indexC && (hero.yTile) == this.indexR && hero.curF == hero.transTab[3][1]) {
            this.itsRed = true;
            this.win = true;
            console.log("picture this as red");

        }
    }

    //changes to the black room if the room is on red and the person is not on the tile
    changeRoom2() {
        if (this.itsRed == true && ((hero.xTile) != this.indexC || (hero.yTile) != this.indexR)) {
            this.itsRed = false;
            this.itsBlack = true;
            console.log("picture this as black");

        }
    }

    //checks to see if the person goes onto a tile while it's black - causes it to activate game over
    checkGameOver() {
        if (this.itsBlack == true && (hero.xTile) == this.indexC && (hero.yTile) == this.indexR) {
            console.log("the game is over");
            this.gameOver = true;
        }
    }


    //tells the sketch what to display in each tile
    update() {
        image(this.imageList[this.imgNum], this.x, this.y, this.size, this.size);
        this.changeRoom1();
        this.changeRoom2();
        this.checkGameOver();
        if (this.itsRed == true) {
            fill('rgba(255,0,0, .5)');
            noStroke();
            rect(this.x + 10, this.y + 8, this.size - 19, this.size - 16);

        }
        if (this.itsBlack == true) {
            fill('rgba(0,30,0, .75)');
            noStroke();
            rect(this.x + 10, this.y + 8, this.size - 19, this.size - 16);
        }
    }


}







class Sprite {
    constructor(totalRows, totalCols, tileSize, picture) {
        this.x = 0;
        this.y = 0;
        this.size = tileSize;
        this.cols = totalCols;
        this.rows = totalRows;
        this.row = this.y / this.size;
        this.col = this.x / this.size;
        this.hero = picture;
        this.curF = 0;
        this.nFrms = 5;
        this.stay = false;
        this.xTile = (this.x / this.size);
        this.yTile = (this.y / this.size);
        //        this.deltaX = deltaX;
        //        this.deltaY = deltaY;

        this.transTab = [
            [1, 1],
            [0, 2],
            [3, 3],
            [4, 4],
            [0, 0],
        ]
    }

    //animates the character
    transition() {
        var inputType; // Look for LEFT (0) or RIGHT (1) arrow, 2 for all else

        if (keyIsDown(ENTER)) {
            inputType = 1;
            console.log("ENTER")
        } else {
            // any other key or no keyPressed
            inputType = 0;
        }
        // Table lookup - No "if" statements needed!
        this.curF = this.transTab[this.curF][inputType]; // Transition to next state
    }

    //make key released boolian to turn back to false

    //moves the character a tile to the left and not offscreen
    moveLeft() {
        if (this.stay == false && this.x > 0) {
            this.x -= this.size;
        }
    }

    //moves the character a tile to the right and not offscreen

    moveRight() {
        if (this.stay == false && this.x < (this.cols * this.size) - this.size) {
            this.x += this.size;
        }

    }

    //moves the character a tile up and not offscreen
    moveUp() {
        if (this.stay == false && this.y > 0) {
            this.y -= this.size;
        }
    }

    //moves the character a tile down and not offscreen
    moveDown() {
        if (this.stay == false && this.y < (this.rows * this.size) - this.size) {
            this.y += this.size;
        }

    }

    //updates the x/y coordinates of the tile the character is on
    //then it tells it to return this.stay as true if the corresponding tile is not set to itsRed, and false if it is set to itsRed
    updateCoords() {
        this.xTile = (this.x / this.size);
        this.yTile = (this.y / this.size);
        if (this.yTile == 0 && this.xTile == 0) {
            if (tiles[this.yTile][this.xTile].itsRed == false) {
                this.stay = false;
            }
        } else if (this.yTile == 1 || this.yTile == 2 || this.yTile == 3 || this.xTile == 1 || this.xTile == 2 || this.xTile == 3) {
            if (tiles[this.yTile][this.xTile].itsRed == false) {
                this.stay = true;
            }
        }
        if (tiles[this.yTile][this.xTile].itsRed == true) {
            this.stay = false;
        }
    }



    //displays the character/updates her
    update() {
        this.updateCoords();
        //        console.log("xTile is set to "+ this.xTile + " indexC is set to "+ tiles[this.xTile][this.yTile].indexC +" yTile is set to "+ this.yTile + " indexR is set to "+ tiles[this.xTile][this.yTile].indexR + " itsRed is set to " + tiles[this.xTile][this.yTile].itsRed + " stay is set to " + this.stay + " x is set to " + this.x);
        image(this.hero[this.curF], this.x, this.y);

    }
}
