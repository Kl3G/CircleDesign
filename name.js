export class Name {

    constructor(color, radius){

        this.color = color;
        this.radius = radius;
        this.startTime = null;
        this.centerX = this.stageWidth / 2;
        this.centerY = this.stageHeight / 2;
    }

    resize(stageWidth, stageHeight){

        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    // 이차 베지어 곡선 위의 점을 계산하는 메서드
    getCubicBezierPoint(t, P0, P1, P2, P3) {

    const x = Math.pow(1 - t, 3) * P0.x
            + 3 * Math.pow(1 - t, 2) * t * P1.x
            + 3 * (1 - t) * Math.pow(t, 2) * P2.x
            + Math.pow(t, 3) * P3.x;
    const y = Math.pow(1 - t, 3) * P0.y
            + 3 * Math.pow(1 - t, 2) * t * P1.y
            + 3 * (1 - t) * Math.pow(t, 2) * P2.y
            + Math.pow(t, 3) * P3.y;
    return { x, y };
    }

    // 곡선 위에 랜덤 점들을 생성하는 메서드
    generateRandomPoints(numPoints, P0, P1, P2, P3) {

        const points = [];

        for (let i = 0; i < numPoints; i++) {
            const t = Math.random(); // 0과 1 사이의 랜덤 t 값
            const point = this.getCubicBezierPoint(t, P0, P1, P2, P3);
            points.push(point);
        }

        return points;
    }

    draw(ctx, t){
        // 시작점, 제어점, 종료점 정의
        const P0 = { x: this.stageWidth / 2, y: this.stageHeight / 2.75 };
        const P1 = { x: this.stageWidth / 3.7, y: this.stageHeight / 6.5 };
        const P2 = { x: this.stageWidth / 2, y: this.stageHeight / 1.8 };
        const P3 = { x: this.stageWidth / 2, y: this.stageHeight / 1.5 };

        // 배치할 원의 개수
        const numberOfCircles = 1;

        // 곡선 위에 랜덤한 점들 생성
        const randomPoints = this.generateRandomPoints(numberOfCircles, P0, P1, P2, P3);

        // 랜덤한 점들에 원 그리기
        randomPoints.forEach(point => {

            ctx.beginPath();
            ctx.arc(point.x, point.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        });

        // 디버깅용으로 곡선을 시각화하고 싶다면 아래 코드 주석 해제
        
        // ctx.beginPath();
        // ctx.moveTo(P0.x, P0.y);
        // //ctx.quadraticCurveTo(P1.x, P1.y, P2.x, P2.y);
        // ctx.bezierCurveTo(P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
        // ctx.strokeStyle = 'rgba(0,0,0,0.1)'; // 곡선을 연하게 표시
        // ctx.stroke();

        // P1, P2 모두 시각화
        // [P1, P2].forEach(point => {
        //     ctx.beginPath();
        //     ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
        //     ctx.fillStyle = "#FF0000";
        //     ctx.fill();
        //     ctx.lineWidth = 2;
        //     ctx.strokeStyle = "#FF0000";
        //     ctx.stroke();
        // });
    }

    draw2(ctx, t){
        // 시작점, 제어점, 종료점 정의
        const P0 = { x: this.stageWidth / 2, y: this.stageHeight / 2.75 };
        const P1 = { x: this.stageWidth - (this.stageWidth / 3.7), y: this.stageHeight / 6.5 };
        const P2 = { x: this.stageWidth / 2, y: this.stageHeight / 1.8 };
        const P3 = { x: this.stageWidth / 2, y: this.stageHeight / 1.5 };

        ctx.font = '60px "Dancing Script", cursive'; // 원하는 폰트와 크기 지정
        ctx.fillStyle = '#DC9597';       // 원하는 색상 지정
        ctx.textAlign = 'center';     // 가운데 정렬
        ctx.fillText('Whatever happens', P3.x, P3.y + 70); // +40은 하트 밑 여백(조정 가능)

        // 배치할 원의 개수
        const numberOfCircles = 1;

        // 곡선 위에 랜덤한 점들 생성
        const randomPoints = this.generateRandomPoints(numberOfCircles, P0, P1, P2, P3);

        // 랜덤한 점들에 원 그리기
        randomPoints.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        });

        // 디버깅용으로 곡선을 시각화하고 싶다면 아래 코드 주석 해제
        
        // ctx.beginPath();
        // ctx.moveTo(P0.x, P0.y);
        // ctx.bezierCurveTo(P1.x, P1.y, P2.x, P2.y, P3.x, P3.y);
        // ctx.strokeStyle = 'rgba(0,0,0,0.1)'; // 곡선을 연하게 표시
        // ctx.stroke();

        // P1, P2 모두 시각화
        // [P1, P2].forEach(point => {
        //     ctx.beginPath();
        //     ctx.arc(point.x, point.y, 8, 0, Math.PI * 2);
        //     ctx.fillStyle = "#FF0000";
        //     ctx.fill();
        //     ctx.lineWidth = 2;
        //     ctx.strokeStyle = "#FF0000";
        //     ctx.stroke();
        // });
    }
}