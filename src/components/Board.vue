<template>
  <div class="hero is-info is-fullheight-with-navbar">
    <div class="columns">
      <div class="column is-one-fifth">
        <button @click="saveImage()">Save</button>
      </div>
      <div class="column">
        <div class="hero-body">
          <canvas style="background: white" ref="board" @mousedown="mouseDown($event)" @mouseup="endPaint"
          @mousemove="mouseMove($event)" @mouseleave="endPaint" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  data() {return {
    title: 'Untitled',
    canvas: null,
    ctx: null,
    isPainting: false,
    userStrokeStyle: '#EE92C2',
    guestStrokeStyle: '#F0C987',
    line: [],
    userId: Math.floor(Math.random() * 100000),
    prevPos: {offsetX: 0, offsetY: 0}
  }},
  methods: {
    mouseDown(event) {
      const {offsetX, offsetY } = event

      this.isPainting = true
      this.prevPos = {offsetX, offsetY}
    },
    mouseMove(event) {
      if (!this.isPainting) return

      const {offsetX, offsetY} = event
      const offSetData = {offsetX, offsetY}
      const positionData = {
        start: {...this.prevPos},
        stop: {...offSetData},
      }

      this.line = this.line.concat(positionData)
      this.paint(this.prevPos, offSetData, this.userStrokeStyle)
    },
    endPaint() {
      if (!this.isPainting) return

      this.isPainting = false
      this.sendPaintData()
    },
    paint(prevPos, currPos, strokeStyle) {
      const {offsetX, offsetY} = currPos
      const {offsetX: x, offsetY: y} = prevPos

      this.ctx.beginPath()
      this.ctx.strokeStyle = strokeStyle
      this.ctx.moveTo(x, y)
      this.ctx.lineTo(offsetX, offsetY)
      this.ctx.stroke()
      this.prevPos = {offsetX, offsetY}
    },
    sendPaintData() {
      console.log('Sending paint data..')
    },
    saveImage() {
      let link = document.createElement('a');
      link.setAttribute('download', this.title+'.png');
      link.setAttribute('href', this.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
      link.click();
    }
  },
  mounted() {
    this.canvas = this.$refs.board;
    this.canvas.height = window.innerHeight * 0.7;
    this.canvas.width = window.innerWidth * 0.7;

    this.ctx = this.canvas.getContext("2d");
    this.ctx.lineJoin = 'round';
    this.ctx.lineCap = 'round';
    this.ctx.lineWidth = 5;
  }
};
</script>