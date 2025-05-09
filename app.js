import{
    Circle
}from './circle.js';

import{
    Name
}from './name.js';

class App{

    constructor(){

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        document.body.appendChild(this.canvas);

        this.circle = [

            new Circle('#48A6A7', 12),
            new Circle('#2973B2', 10),
            new Circle('#F2EFE7', 8),
        ];

        this.name = new Name('#9ACBD0', 10);

        window.addEventListener('resize', this.resize.bind(this), false);

        this.resize();

        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){

        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        /* <canvas> 요소의 width 또는 height 속성을 변경하면, 
        브라우저는 캔버스를 즉시 초기화. */

        this.ctx.scale(2, 2);

        for(let i = 0; i < this.circle.length; i++){
        
            this.circle[i].resize(this.stageWidth, this.stageHeight);
        }

        this.name.resize(this.stageWidth, this.stageHeight);
    }

    animate(t){

        requestAnimationFrame(this.animate.bind(this));

        for(let i = 0; i < this.circle.length; i++){

            this.circle[i].draw(this.ctx, t, this.circle.length);
        }

        this.name.draw(this.ctx, t);
        this.name.draw2(this.ctx, t);
    }
}

window.onload = () => {

    new App();
};