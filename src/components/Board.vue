<template><div>
  <div class="container buttons are-small">
    <button class="button" @click="saveImage()">Save</button>
    <button :class="['button', {'is-primary is-active': isActiveSelect}]" @click="toggleSelect()">Select</button>
    <button class="button" @click="addRect()">Add rectangle</button>
    <button class="button" @click="addText()">Add text</button>
    <button :class="['button', {'is-primary is-active': isActivePencil}]" @click="togglePencil()">Pencil</button>
    <button class="button" @click="deleteSelected()">Delete selected</button>
    <button class="button" @click="clearCanvas()">Clear</button>
  </div>
  <div class="container buttons are-small">
    <h2>Colour</h2>
    <button :class="['button', {'is-primary is-active': this.color == 'red'}]" @click="chooseColor('red')">Red</button>
    <button :class="['button', {'is-primary is-active': this.color == 'green'}]" @click="chooseColor('green')">Green</button>
    <button :class="['button', {'is-primary is-active': this.color == 'blue'}]" @click="chooseColor('blue')">Blue</button>
    <button :class="['button', {'is-primary is-active': this.color == 'yellow'}]" @click="chooseColor('yellow')">Yellow</button>
    <button :class="['button', {'is-primary is-active': this.color == 'pink'}]" @click="chooseColor('pink')">Pink</button>
    <button :class="['button', {'is-primary is-active': this.color == 'white'}]" @click="chooseColor('white')">White</button>
    <button :class="['button', {'is-primary is-active': this.color == 'black'}]" @click="chooseColor('black')">Black</button>
  </div>
  <div class="container buttons are-small">
    <h2>Fill</h2>
    <button :class="['button', {'is-primary is-active': this.fill == 'red'}]" @click="chooseFill('red')">Red</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'green'}]" @click="chooseFill('green')">Green</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'blue'}]" @click="chooseFill('blue')">Blue</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'yellow'}]" @click="chooseFill('yellow')">Yellow</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'pink'}]" @click="chooseFill('pink')">Pink</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'white'}]" @click="chooseFill('white')">White</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'black'}]" @click="chooseFill('black')">Black</button>
  </div>
  <div class="container buttons are-small">
    <h2>Style</h2>
    <button :class="['button', {'is-primary is-active': width == 2}]" @click="width = 2">width 2</button>
    <button :class="['button', {'is-primary is-active': width == 5}]" @click="width = 5">width 5</button>
    <button :class="['button', {'is-primary is-active': width == 8}]" @click="width = 8">width 8</button>
    <button :class="['button', {'is-primary is-active': width == 11}]" @click="width = 11">width 11</button>
  </div>
  <div class="container">
    <canvas ref="board" />
  </div>
</div></template>

<script>

import firebase from "@/firebaseinit"
import { fabric } from '@/fabric'

export default {
  name: "board",
  props: {
    refId: String,
    userId: Number
  },
  data: () => ({
    title: 'Untitled',
    canvas: null,
    isActivePencil: false,
    isActiveSelect: true,
    color: 'blue',
    fill: '',
    width: 2,
  }),
  methods: {
    chooseColor(color) {
      this.color = color
      this.canvas.freeDrawingBrush.color = this.color
    },
    chooseFill(color) {
      this.fill = color
    },
    saveImage() {
      let link = document.createElement('a')
      link.setAttribute('download', this.title+'.png')
      link.setAttribute('href', this.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
      link.click()

      this.canvas.isDrawingMode = false
      this.isActivePencil = false
      this.isActiveSelect = false
    },
    addElements(elements) {
      elements.forEach(e => this.canvas.add(e))
    },
    updateElements(elements) {
      elements.forEach(e => this.getFabricElementById(e.id).set(e))
      this.canvas.renderAll()
    },
    removeElements(elements) {
      elements.forEach(e => this.canvas.remove(...[this.getFabricElementById(e.id)]))
    },
    toggleSelect() {
      if (!this.isActiveSelect) this.canvas.discardActiveObject().renderAll()

      this.canvas.isDrawingMode = false
      this.isActivePencil = false
      this.isActiveSelect = true
    },
    addRect() {
      const id = firebase.database().ref(this.$props.refId).push().key
      const rect = new fabric.Rect({
        id: id, fill: this.fill, stroke: this.color, strokeWidth: this.width, height: 40, width: 40, top: Math.floor(Math.random()*400), left: Math.floor(Math.random()*400)
      })
      const data = { data: rect.toJSON(['id']) }

      firebase.database().ref(this.$props.refId + '/' + id).update(data)

      this.toggleSelect()
    },
    addText() {
      const id = firebase.database().ref(this.$props.refId).push().key
      const el = new fabric.IText('Text', {
        id: id, stroke: this.color, fill: this.color, textBackgroundColor: this.fill, top: 50, left: 50
      })
      const data = { data: el.toJSON(['id']) }

      firebase.database().ref(this.$props.refId + '/' + id).update(data)

      this.toggleSelect()
    },
    togglePencil(e) {
      this.isActiveSelect = false
      this.isActivePencil = true
      this.canvas.isDrawingMode = true
      this.canvas.freeDrawingBrush.color = this.color
      this.canvas.freeDrawingBrush.width = this.width
    },
    clearCanvas() {
      this.canvas.remove(...this.canvas.getObjects())
      this.toggleSelect()
    },
    deleteSelected() {
      this.canvas.remove(...this.canvas.getActiveObjects())
      this.toggleSelect()
    },
    getFabricElementById(id) {
      return this.canvas.getObjects().filter((item) => { return item.id == id })[0]
    }
  },
  mounted() {
    const canvasRef = this.$refs.board

    this.canvas = new fabric.Canvas(canvasRef, {
      height: 500, width: 900, backgroundColor: 'white', isDrawingMode: false
    })

    this.canvas.on('selection:cleared', options => { if (!options.hasOwnProperty('deselected')) return
      options.deselected.forEach(el => {
        const data = { data: el.toJSON(['id']) }
        firebase.database().ref(this.$props.refId + '/' + el.id).update(data)
      })
    })

    this.canvas.on('object:added', options => { if (!options.target) return
      const el = options.target

      if (el.type !== 'path') return
      if (el.hasOwnProperty('id') && el.id.length > 0) return

      const id = firebase.database().ref(this.$props.refId).push().key
      el.id = id
      el.fill = el.fill === null ? '' : el.fill

      const data = { data: el.toJSON(['id']) }
      firebase.database().ref(this.$props.refId + '/' + id).update(data)
    })

    this.canvas.on('object:removed', options => { if (!options.target) return
      firebase.database().ref(this.$props.refId + '/' + options.target.id).remove()
    })

    this.canvas.on('object:modified', options => { if (!options.target) return
      if (options.target.type === 'activeSelection') return

      const data = { data: options.target.toJSON(['id', options.target.id]) }
      firebase.database().ref(this.$props.refId + '/' + options.target.id).update(data)
    })

    firebase.database().ref(this.$props.refId).on('child_added', snapshot => {
      const { data } = snapshot.val()
      fabric.util.enlivenObjects([data], this.addElements)
    })
    firebase.database().ref(this.$props.refId).on('child_changed', snapshot => {
      const { data } = snapshot.val()
      fabric.util.enlivenObjects([data], this.updateElements)
    })
    firebase.database().ref(this.$props.refId).on('child_removed', snapshot => {
      const { data } = snapshot.val()
      fabric.util.enlivenObjects([data], this.removeElements)
    })
  }
};
</script>