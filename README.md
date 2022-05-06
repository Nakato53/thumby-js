# Create Thumby like games in 72x40 px resolution
```
//to create a new Thumby instance
let thumby = new Thumby(); 

// can change scale and background color
let thumby = new Thumby(5, "#000000"); 



// update event, receive deltatime
thumby.onUpdate = function(dt) {
}

// draw event , receive canvas context
thumby.onDraw = function(context) {
  
}

// to start
thumby.start();
```
