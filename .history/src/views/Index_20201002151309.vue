<template>
  <div class="contanier">
    <div class="dcontent" id="dcontent">{{ date }}</div>
    <canvas class="canvas"></canvas>
  </div>
</template>
<script>
export default {
  data () {
    return {
      date: new Date().toLocaleTimeString('en-GB')
    }
  },
  mounted () {
    const time = this.date.substring(0, 5)
    this.handleSpeak('感谢您的使用现在是北京时间' + time)
    this.sayTo(time)
    class Circle {
      constructor (color, radius, v, angle, x, y) {
        this.color = color
        this.radius = radius
        this.v = v
        this.angle = angle
        this.x = x
        this.y = y
      }

      draw (ctx) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.closePath()
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    function rColor () {
      const r = 255 * Math.random()
      const g = 255 * Math.random()
      const b = 255 * Math.random()
      const o = Math.random()
      return 'rgba(' + r + ',' + g + ',' + b + ',' + o + ')'
    }

    function draw () {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = 0; i < NUM; i++) {
        arr[i].x += arr[i].v * Math.cos(arr[i].angle)
        arr[i].y += arr[i].v * Math.sin(arr[i].angle)
        arr[i].draw(ctx)
      }
      setTimeout(draw, 50)
      // setInterval(draw,50);
    }

    const arr = []
    const NUM = 1000
    let centerX, centerY
    const canvas = document.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    centerX = canvas.width / 2
    centerY = canvas.height / 2
    for (let i = 0; i < NUM; i++) {
      arr.push(new Circle(rColor(), 10 * Math.random() + 1, 5 * Math.random() + 1, 360 * Math.random(), centerX, centerY))
    }

    draw()
    this.timer = setInterval(() => {
      this.date = new Date()
      this.date = this.date.toLocaleTimeString('en-GB')
      const time = this.date.substring(0, 5)
    }, 1000)
  },
  methods: {
  }
}
</script>
// <style lang="scss" scoped>
  
// </style>
<style scoped>
.contanier {
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  color: #3366ff;
}
.clock {
  position: relative;
  color: #ffffff;
  left: 0;
  right: 0;
  font-size: 20rem;
  width: 100%;
  height: 100%;

}

.dcontent {
  position: absolute;
  justify-self: center;
  align-self: center;
  font-size: 20rem;
  color: rgba(255, 255, 255, 0.24);
  -webkit-animation: 4s linear 0s infinite alternate dcontent;
          animation: 4s linear 0s infinite alternate dcontent;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  /* border:1px solid pink; */
}
.dcontent:active{
  color: red;
}
@-webkit-keyframes dcontent { from { margin-left: -25%; } to { margin-left:calc(100% - 153rem) }  }
        @keyframes dcontent { from { margin-left: -25%; } to { margin-left:calc(100% - 153rem) }  }
.canvas{
  position: absolute;
  justify-self: center;
  align-self: center;
  font-size: 20rem;
}

</style>
