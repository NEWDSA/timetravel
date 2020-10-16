export function printColor() {
    class Circle {
        constructor(color, radius, v, angle, x, y) {
          this.color = color;
          this.radius = radius;
          this.v = v;
          this.angle = angle;
          this.x = x;
          this.y = y;
        }
        draw(ctx) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
          ctx.closePath();
          ctx.fillStyle = this.color;
          ctx.fill();
        }
      }
      function rColor() {
        const r = 255 * Math.random();
        const g = 255 * Math.random();
        const b = 255 * Math.random();
        const o = Math.random();
        return "rgba(" + r + "," + g + "," + b + "," + o + ")";
      }

      function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < NUM; i++) {
          arr[i].x += arr[i].v * Math.cos(arr[i].angle);
          arr[i].y += arr[i].v * Math.sin(arr[i].angle);
          arr[i].draw(ctx);
        }
        setTimeout(draw, 50);
        // setInterval(draw,50);
      }
      const arr = [];
      const NUM = 1000;
      let centerX, centerY;
      const canvas = document.querySelector("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      centerX = canvas.width / 2;
      centerY = canvas.height / 2;
      for (let i = 0; i < NUM; i++) {
        arr.push(
          new Circle(
            rColor(),
            10 * Math.random() + 1,
            5 * Math.random() + 1,
            360 * Math.random(),
            centerX,
            centerY
          )
        );
      }
      draw();
}