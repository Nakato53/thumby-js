import Thumby from "./thumby.js";

let thumby = new Thumby(); 


let keys = { up:38, down:40, left:37, right:39 };
let keysStatus = { up:false, down:false, left:false, right:false };

document.body.onkeyup = function(e){
    switch(e.keyCode){
        case keys.up:
            keysStatus.up = false;
            break;
        case keys.down:
            keysStatus.down = false;
            break;
        case keys.left:
            keysStatus.left = false;
            break;
        case keys.right:
            keysStatus.right = false;
            break;                    
    }
};

document.body.onkeydown = function(e){
    switch(e.keyCode){
        case keys.up:
            keysStatus.up = true;
            break;
        case keys.down:
            keysStatus.down = true;
            break;
        case keys.left:
            keysStatus.left = true;
            break;
        case keys.right:
            keysStatus.right = true;
            break;                    
    }
};

let player = { x:5, y:5 }

thumby.onUpdate = function(dt) {
    if(keysStatus.up) player.y--;
    if(keysStatus.down) player.y++;
    if(keysStatus.left) player.x--;
    if(keysStatus.right) player.x++;
}

thumby.onDraw = function(context) {
    thumby.setPixel(player.x, player.y, '#777777');
}


thumby.start();