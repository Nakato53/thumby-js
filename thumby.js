const THUMBY_WIDTH = 72;
const THUMBY_HEIGHT = 40;

const updateEvent = new Event('onUpdate');
const drawEvent = new Event('onDraw');

const FPS = 60/1000;

export default class Thumby{

    constructor(scale = 10, backgroundColor = '#f3f3f3'){
        this.scale = scale;
        this.canvas = document.createElement("canvas");
        this.canvas.width = THUMBY_WIDTH;
        this.canvas.height = THUMBY_HEIGHT;
        this.canvas.style.width = THUMBY_WIDTH*this.scale + "px";
        this.canvas.style.height = THUMBY_HEIGHT*this.scale + "px";
        this.canvas.style.backgroundColor = backgroundColor;
        this.canvas.style.imageRendering = "pixelated";
        document.body.appendChild(this.canvas);
        this.context = this.canvas.getContext("2d");
        
        this.then = 0;

        this.onDraw = (context) => {};
        this.onUpdate = (dt) => {};


    }

    start(){

        requestAnimationFrame(this.loop.bind(this));
    }

    loop(){

        let now = Date.now();
        let elapsed = now - this.then;
        if (elapsed > FPS) {
            this.then = now - (elapsed % FPS);
            this.onUpdate(elapsed);
            this.context.clearRect(0,0,THUMBY_WIDTH,THUMBY_HEIGHT);
            this.onDraw(this.context);
        }
        requestAnimationFrame(this.loop.bind(this));
    }

    setPixel(x,y,color){
        this.context.fillStyle = color;
        this.context.fillRect(Math.floor(x), Math.floor(y), 1,1);    
    }



}

export {THUMBY_WIDTH, THUMBY_HEIGHT};