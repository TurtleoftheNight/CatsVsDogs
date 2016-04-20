Game = {
  // Initialize and start our game
  start: function() {
    // Start crafty and set a background color so that we can see it's working
Crafty.init(600, 300);
Crafty.background('#FFFFFF url(http://eskipaper.com/images/grass-background-28.jpg) no-repeat center center');
//Paddles
Crafty.e("Paddle, 2D, DOM, Color, Multiway")
    .color('rgb(127,0,0)')
    .attr({ x: 20, y: 100, w: 10, h: 100 })
    .multiway(
        100,
        { W: -90, S: 90 }
    );
Crafty.e("2D, DOM, Image, Multiway")                            .image("http://41.media.tumblr.com/f44c309f3cd3c2562fb990659605559a/tumblr_inline_nwbv3bsO251tx16pf_400.png")
 .attr({ x: 300, y: 0})
    .multiway(
        100 ,
        { UP_ARROW: -90, DOWN_ARROW: 90 }
    );
      
//Ball
Crafty.e("2D, DOM, Color, Collision")
    .color('rgb(0,0,255)')
    .attr({ x: 300, y: 150, w: 10, h: 10,
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