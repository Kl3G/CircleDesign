import {Circle} from './circle.js';
import {Name} from './name.js';

class App {

    constructor() {

        // canvas와 ctx를 app의 속성으로 등록.
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');

        // body에 canvas 요소 추가.
        document.body.appendChild(this.canvas);

        this.circle = [

            new Circle('#48A6A7', 12),
            new Circle('#2973B2', 10),
            new Circle('#F2EFE7', 8)
        ];

        this.name = new Name('#DC9597', 10);

        // 이벤트 리스너를 호출하는 객체가 이벤트 핸들러의 this가 되기 때문에,
        // bind로 묶어 주지 않으면 resize 메서드의 this가 window를 가리킨다.
        window.addEventListener('resize', this.resize.bind(this), false);

        this.resize();

        // 다음 프레임에 animate 메서드 호출 예약.
        requestAnimationFrame(this.animate.bind(this));
    }

    resize() {

        // body의 논리 픽셀 가져오기.
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        // 레티나 디스플레이 대응 픽셀 수 증가
        // 실제 픽셀 수.
        const ratio = window.devicePixelRatio || 1;
        this.canvas.width = this.stageWidth * ratio * 2;
        this.canvas.height = this.stageHeight * ratio * 2;
        /* canvas 요소의 width 또는 height 속성을 변경하면, 
        브라우저는 캔버스를 즉시 초기화. */

        this.ctx.scale(ratio * 2, ratio * 2);

        for(let i = 0; i < this.circle.length; i++){
        
            this.circle[i].resize(this.stageWidth, this.stageHeight);
        }

        this.name.resize(this.stageWidth, this.stageHeight);
    }

    animate(t) {

        // 다음 프레임에 animete 메서드 호출 예약.
        requestAnimationFrame(this.animate.bind(this));

        for(let i = 0; i < this.circle.length; i++){

            this.circle[i].draw(this.ctx, t, this.circle.length);
        }

        this.name.draw(this.ctx, t);
        this.name.draw2(this.ctx, t);
    }
}

// 페이지 다 로드된 직후 App 생성.
window.onload = () => {

    new App();
};