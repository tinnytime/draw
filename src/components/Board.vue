<template>
  <div class="hero is-info is-fullheight-with-navbar">
    <div class="columns">
      <div class="column is-one-fifth">
        <button @click="saveImage()">Save</button>
        <button @click="addRect()">Add rectangle</button>
      </div>
      <div class="column">
        <div class="hero-body">
          <canvas ref="board" @mousedown="mouseDown($event)" @mouseup="endPaint"
          @mousemove="mouseMove($event)" @mouseleave="endPaint" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import firebase from "@/firebaseinit";
import { fabric } from '@/fabric'

export default {
  name: "board",
  props: {
    refId: String,
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
    elements: [],
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
      const s = snapshot.val()

      if (!s) return

      for (var objectId in s) {
        var { data, uid } = s[objectId]

        // Use array diff instead?
        if (this.elements.indexOf(objectId) > -1) continue
        if (uid == this.$props.userId) continue

        const el = this.loadElement(data.type, data)

        if (!el) continue

        this.canvas.add(el)
        this.elements.push(objectId)
      }
    },
    loadElement(type, data) {
      var el = null
      switch(type) {
        case 'rect':
          el = new fabric.Rect(data)
          break;
      }

      return el
    },
    addRect() {
      const id = firebase.database().ref(this.$props.refId).push().key;
      const params = {
        fill: 'red',
        height: 40,
        width: 40,
      }
      const rect = new fabric.Rect(params)
      const data = {
        uid: this.$props.userId,
        created: Date.now(),
        data: rect.toJSON()
      }

      this.elements.push(id)
      this.canvas.add(rect)
      firebase.database().ref(this.$props.refId + '/' + id).update(data);
    },
    onFabricElementAdded(options) {

    }
  },
  mounted() {
    const canvasRef = this.$refs.board;

    this.canvas = new fabric.Canvas(canvasRef, {
        height: 500,
        width: 800,
        backgroundColor: 'white'
    });

    this.canvas.on('object:added', this.onFabricElementAdded)

    firebase.database().ref(this.$props.refId).on('value', this.onSnapShot)
  }
};
</script>