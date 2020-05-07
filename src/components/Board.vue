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

import firebase from "@/firebaseinit";

export default {
  name: "board",
  props: {
    id: String,
    userId: Number
  },
  data() {return {
    start: false,
    title: 'Untitled',
    canvas: null,
    ctx: null,
    isPainting: false,
    userStrokeStyle: '#EE92C2',
    guestStrokeStyle: '#F0C987',
    line: [],
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

      if (this.line.length > 0) {
        this.sendPaintData()
      }
    },
    paint(prevPos, currPos, colour) {
      const {offsetX, offsetY} = currPos
      const {offsetX: x, offsetY: y} = prevPos

      this.ctx.beginPath()
      this.ctx.strokeStyle = colour
      this.ctx.moveTo(x, y)
      this.ctx.lineTo(offsetX, offsetY)
      this.ctx.stroke()
      this.prevPos = {offsetX, offsetY}
    },
    async sendPaintData() {
      const body = {
        userId: this.$props.userId,
        line: this.line,
        created: Date.now(),
        colour: this.userStrokeStyle,
      }
      const drawingRef = firebase.database().ref('drawings/' + this.$props.id)
      const res = await drawingRef.push(body)
      this.line = []
    },
    saveImage() {
      let link = document.createElement('a');
      link.setAttribute('download', this.title+'.png');
      link.setAttribute('href', this.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
      link.click();
    },
    onSnapShot(snapshot) {
      if (!snapshot.val()) return
      const s = snapshot.val()

      for (var key in s) {
        const { userId, line = [], colour } = s[key]
        if (userId == this.$props.userId) continue
        line.forEach(function(segment) {
          this.paint(segment.start, segment.stop, colour)
        }.bind(this))
      }
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

    var drawingRef = firebase.database().ref('drawings/' + this.$props.id);
    drawingRef.on('value', this.onSnapShot)
  }
};
</script>