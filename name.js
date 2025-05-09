export class Name{

    constructor(color, radius){

        this.color = color;
        this.radius = radius;
        this.startTime = null;
    }

    resize(stageWidth, stageHeight){

        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
    }

    // 이차 베지어 곡선 위의 점을 계산하는 메서드
    getQuadraticBezierPoint(t, P0, P1, P2) {
        const x = Math.pow(1 - t, 2) * P0.x +
                    2 * (1 - t) * t * P1.x +
                    Math.pow(t, 2) * P2.x;
        const y = Math.pow(1 - t, 2) * P0.y +
                    2 * (1 - t) * t * P1.y +
                    Math.pow(t, 2) * P2.y;
        return { x, y };
    }

    // 곡선 위에 랜덤한 점들을 생성하는 메서드
    generateRandomPoints(numPoints, P0, P1, P2) {
        const points = [];
        for (let i = 0; i < numPoints; i++) {
            const t = Math.random(); // 0과 1 사이의 랜덤한 t 값
            const point = this.getQuadraticBezierPoint(t, P0, P1, P2);
            points.push(point);
        }
        return points;
    }

    draw(ctx, t){
        // 시작점, 제어점, 종료점 정의
        const P0 = { x: this.stageWidth / 2, y: (this.stageHeight / 2) - 50 };
        const P1 = { x: 90, y: 160 };
        const P2 = { x: this.stageWidth / 2, y: 650 };

        // 배치할 원의 개수
        const numberOfCircles = 3;

        // 곡선 위에 랜덤한 점들 생성
        const randomPoints = this.generateRandomPoints(numberOfCircles, P0, P1, P2);

        // 랜덤한 점들에 원 그리기
        randomPoints.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        });

        // 디버깅용으로 곡선을 시각화하고 싶다면 아래 코드 주석 해제
        
         /* ctx.beginPath();
        ctx.moveTo(P0.x, P0.y);
        ctx.quadraticCurveTo(P1.x, P1.y, P2.x, P2.y);
        ctx.strokeStyle = 'rgba(0,0,0,0.1)'; // 곡선을 연하게 표시
        ctx.stroke();  */
        
    }

    draw2(ctx, t){
        // 시작점, 제어점, 종료점 정의
        const P0 = { x: this.stageWidth / 2, y: (this.stageHeight / 2) - 50 };
        const P1 = { x: this.stageWidth - 90, y: 160 };
        const P2 = { x: this.stageWidth / 2, y: 650 };

        // 배치할 원의 개수
        const numberOfCircles = 3;

        // 곡선 위에 랜덤한 점들 생성
        const randomPoints = this.generateRandomPoints(numberOfCircles, P0, P1, P2);

        // 랜덤한 점들에 원 그리기
        randomPoints.forEach(point => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        });

        // 디버깅용으로 곡선을 시각화하고 싶다면 아래 코드 주석 해제
        
         /* ctx.beginPath();
        ctx.moveTo(P0.x, P0.y);
        ctx.quadraticCurveTo(P1.x, P1.y, P2.x, P2.y);
        ctx.strokeStyle = 'rgba(0,0,0,0.1)'; // 곡선을 연하게 표시
        ctx.stroke();  */
        
    }
}