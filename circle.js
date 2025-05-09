export class Circle{

    constructor(color, radius){

        this.color = color;
        this.radius = radius;
        
        this.startTime = null;
        this.points = [];
        this.int = -1;
        // -1부터 시작해야 this.int += 1; 이 코드를 실행했을 때
        // this.points = []; 배열에 0번째 인덱스부터 순차적으로 요소가 할당된다.
    }

    resize(stageWidth, stageHeight){

        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    getY(){

        let min = this.stageHeight / 5;
        let max = this.stageHeight - min;
        return min + Math.random() * (max - min);
    }

    draw(ctx, t, arrLength){

        if(!this.startTime) this.startTime = t; // 애니메이션 시작 시간 설정
        // 앱 실행 시 한번만 수행.

        const elapsed = t - this.startTime; // 경과 시간 계산

        this.int += 1;

        if(this.points.length == 1500 * arrLength){

            this.points.length = 0;
            ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
            // this.draw(ctx, t); 삭제하지 않으면 밑의 코드가 실행되기 전에
            // 다시 draw 함수를 호출하기 때문에 무한 반복.
            this.int = 0;
            // 여기서 int를 -1로 초기화하지 않는 이유 = this.int += 1;의 영향을 받지 않기 때문문
            // this.points.length = 0;를 실행하고, this.points.push를 실행하기 때문에
            // int가 -1돼 버리면 ctx.arc() 를 실행할 때 배열을 참조할 수 없게 된다.
        }

        this.points.push({
            x: Math.random() * this.stageWidth,
            //(elapsed / 2.5) % this.stageWidth, // X좌표 간격 조절
            y: this.getY()
        })

        ctx.beginPath();
        ctx.arc(this.points[this.int].x, this.points[this.int].y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}