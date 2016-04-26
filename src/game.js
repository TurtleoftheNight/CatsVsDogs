Game = {
  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
Crafty.init(600, 300);
Crafty.background('#FFFFFF url(assets/grass.jpeg) no-repeat center center');
//Paddles
Crafty.e("Paddle, 2D, DOM, Image, Multiway")
    .image("assets/catwithsheild.png")
    .attr({ x: 20, y: 100})
    .multiway(
        300,
        { S: -90, X: 90 }
    );
Crafty.e("Paddle, 2D, DOM, Image, Multiway")                            .image("assets/Dogwithshield.png")
 .attr({ x: 500, y: 100})
    .multiway(
        150 ,
        { K: -90, M: 90 }
    );
      
//Ball
Crafty.e("2D, DOM, Image, Collision")
    .image("assets/Bomb.png")
    .attr({ x: 300, y: 150,
            dX: Crafty.math.randomInt(2, 5),
            dY: Crafty.math.randomInt(2, 5) })
    .bind('EnterFrame', function () {
        //hit floor or roof
        if (this.y <= 0 || this.y >= 290)
            this.dY *= -1;

        if (this.x > 600) {
            this.x = 300;
            Crafty("LeftPoints").each(function () {
                this.text(++this.points + " Points") });
        }
        if (this.x < 10) {
            this.x = 300;
            Crafty("RightPoints").each(function () {
                this.text(++this.points + " Points") });
        }

        this.x += this.dX;
        this.y += this.dY;
    })
    .onHit('Paddle', function () {
    this.dX *= -1;
})

//Score boards
Crafty.e("LeftPoints, DOM, 2D, Text")
    .attr({ x: 20, y: 20, w: 100, h: 20, points: 0 })
    .text("0 Points");
Crafty.e("RightPoints, DOM, 2D, Text")
    .attr({ x: 515, y: 20, w: 100, h: 20, points: 0 })
    .text("0 Points");
  }
}