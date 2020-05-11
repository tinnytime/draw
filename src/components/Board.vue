<template><div>
  <div class="container buttons are-small">
    <button class="button" @click="saveImage()">Save</button>
    <button :class="['button', {'is-primary is-active': isActiveSelect}]" @click="toggleSelect()">Select</button>
    <button class="button" @click="addText()">Add text</button>
    <button :class="['button', {'is-primary is-active': isActivePencil}]" @click="togglePencil()">Pencil</button>
    <button class="button" @click="deleteSelected()">Delete selected</button>
    <button class="button" @click="clearCanvas()">Clear</button>
  </div>
  <div class="container buttons are-small">
    <h2>Background</h2>
    <button :class="['button', {'is-primary is-active': this.bg == '#fff'}]" @click="bg = '#fff'">None</button>
    <button :class="['button', {'is-primary is-active': this.bg == '#2b519b'}]" @click="bg = '#2b519b'">Blue</button>
    <button :class="['button', {'is-primary is-active': this.bg == '#000'}]" @click="bg = '#000'">Black</button>
    <button :class="['button', {'is-primary is-active': this.bg == 'grid'}]" @click="bg = 'grid'">Grid</button>
  </div>
  <div class="container buttons are-small">
    <h2>Shapes</h2>
    <button class="button" @click="addRect()">Add rectangle</button>
    <button class="button" @click="addCircle()">Add circle</button>
    <button class="button" @click="addTriangle()">Add triangle</button>
    <button class="button" @click="addLine()">Add line</button>
    <button class="button" @click="addArrow()">Add arrow</button>
  </div>
  <div class="container buttons are-small">
    <h2>Colour</h2>
    <button :class="['button', {'is-primary is-active': this.color == 'red'}]" @click="color = 'red'">Red</button>
    <button :class="['button', {'is-primary is-active': this.color == 'green'}]" @click="color = 'green'">Green</button>
    <button :class="['button', {'is-primary is-active': this.color == 'blue'}]" @click="color = 'blue'">Blue</button>
    <button :class="['button', {'is-primary is-active': this.color == 'yellow'}]" @click="color = 'yellow'">Yellow</button>
    <button :class="['button', {'is-primary is-active': this.color == 'pink'}]" @click="color = 'pink'">Pink</button>
    <button :class="['button', {'is-primary is-active': this.color == 'white'}]" @click="color = 'white'">White</button>
    <button :class="['button', {'is-primary is-active': this.color == 'black'}]" @click="color = 'black'">Black</button>
    <button :class="['button', {'is-primary is-active': this.color == ''}]" @click="color = ''">None</button>
  </div>
  <div class="container buttons are-small">
    <h2>Fill</h2>
    <button :class="['button', {'is-primary is-active': this.fill == 'red'}]" @click="fill = 'red'">Red</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'green'}]" @click="fill = 'green'">Green</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'blue'}]" @click="fill = 'blue'">Blue</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'yellow'}]" @click="fill = 'yellow'">Yellow</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'pink'}]" @click="fill = 'pink'">Pink</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'white'}]" @click="fill = 'white'">White</button>
    <button :class="['button', {'is-primary is-active': this.fill == 'black'}]" @click="fill = 'black'">Black</button>
    <button :class="['button', {'is-primary is-active': this.fill == ''}]" @click="fill = ''">None</button>
  </div>
  <div class="container buttons are-small">
    <h2>Shape style</h2>
    <button :class="['button', {'is-primary is-active': width == 2}]" @click="width = 2">width 2</button>
    <button :class="['button', {'is-primary is-active': width == 5}]" @click="width = 5">width 5</button>
    <button :class="['button', {'is-primary is-active': width == 8}]" @click="width = 8">width 8</button>
    <button :class="['button', {'is-primary is-active': width == 11}]" @click="width = 11">width 11</button>
  </div>
  <div class="container buttons are-small">
    <h2>Text style</h2>
    <button :class="['button', {'is-primary is-active': fontFamily == 'Arial'}]" @click="fontFamily = 'Arial'">Font Arial</button>
    <button :class="['button', {'is-primary is-active': fontFamily == 'Courier New'}]" @click="fontFamily = 'Courier New'">Font Courier New</button>
    <button :class="['button', {'is-primary is-active': fontFamily == 'Lucida Console'}]" @click="fontFamily = 'Lucida Console'">Font Lucida Console</button>
    <button :class="['button', {'is-primary is-active': fontFamily == 'Comic Sans MS'}]" @click="fontFamily = 'Comic Sans MS'">Font Comic Sans</button>
    <button :class="['button', {'is-primary is-active': fontItalic == true}]" @click="fontItalic = !fontItalic">Font Italic</button>
    <button :class="['button', {'is-primary is-active': fontBold == true}]" @click="fontBold = !fontBold">Font Bold</button>
    <button :class="['button', {'is-primary is-active': fontUnderline == true}]" @click="fontUnderline =
    !fontUnderline">Font Underline</button>
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
    bg: '#fff',
    isActivePencil: false,
    isActiveSelect: true,
    color: 'blue',
    fill: '',
    width: 2,
    fontFamily: 'Arial',
    fontItalic: false,
    fontBold: false,
    fontUnderline: false,
  }),
  methods: {
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
      elements.forEach(e => {
        this.patchShape(e)
        this.canvas.add(e)
      })
      this.canvas.renderAll()
    },
    updateElements(elements) {
      elements.forEach(e => {
        this.patchShape(e)
        this.getFabricElementById(e.id).set(e)
      })
      this.canvas.renderAll()
    },
    patchShape(el) {
      if (!el.hasOwnProperty('typePatched') || el.typePatched !== 'line') return

      el.setControlsVisibility({
        'bl': false, 'br': false, 'mb': false, 'mt': false, 'tl': false, 'tr': false,
        'ml': true, 'mr': true,
      })
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
    getWidth() {
      return this.width || 2
    },
    addRect() {
      const id = firebase.database().ref(this.$props.refId).push().key
      const rect = new fabric.Rect({
        id: id, fill: this.fill, stroke: this.color, strokeWidth: this.getWidth(), height: 40, width: 40, top: Math.floor(Math.random()*400), left: Math.floor(Math.random()*400)
      })
      const data = { data: rect.toJSON(['id']) }

      firebase.database().ref(this.$props.refId + '/' + id).update(data)

      this.toggleSelect()
    },
    addCircle() {
      const id = firebase.database().ref(this.$props.refId).push().key
      const el = new fabric.Circle({
        id: id, fill: this.fill, stroke: this.color, strokeWidth: this.getWidth(), radius: 20, top: Math.floor(Math.random()*400), left: Math.floor(Math.random()*400)
      })
      const data = { data: el.toJSON(['id']) }

      firebase.database().ref(this.$props.refId + '/' + id).update(data)

      this.toggleSelect()
    },
    addTriangle() {
      const id = firebase.database().ref(this.$props.refId).push().key
      const rect = new fabric.Polygon([{x: 0, y: 0}, {x: -40, y: 60}, {x: 40, y: 60}], {
        id: id, fill: this.fill, stroke: this.color, strokeWidth: this.getWidth(), height: 100, width: 100, top: Math.floor(Math.random()*400), left: Math.floor(Math.random()*400)
      })
      const data = { data: rect.toJSON(['id']) }

      firebase.database().ref(this.$props.refId + '/' + id).update(data)

      this.toggleSelect()
    },
    addLine() {
      const id = firebase.database().ref(this.$props.refId).push().key
      // Use a rectangle because fabric.Line() has issues...
      const rect = new fabric.Rect({
        id: id, fill: this.color, typePatched: 'line', stroke: this.color, strokeWidth: this.getWidth(), height: 5, width: 200, top: Math.floor(Math.random()*400), left: Math.floor(Math.random()*400)
      })
      const data = { data: rect.toJSON(['id', 'typePatched']) }

      firebase.database().ref(this.$props.refId + '/' + id).update(data)

      this.toggleSelect()
    },
    addArrow() {
      const id = firebase.database().ref(this.$props.refId).push().key
      const rect = new fabric.Polygon([{x:0, y:0}, {x:0, y:-10}, {x:80, y:-10}, {x:80, y:-20}, {x:100, y:-5}, {x:80, y:10},
      {x:80, y:0}], {
        id: id, fill: this.fill, typePatched: 'line', stroke: this.color, strokeWidth: this.getWidth(), height: 100, width: 100, top: Math.floor(Math.random()*400), left: Math.floor(Math.random()*400)
      })
      const data = { data: rect.toJSON(['id', 'typePatched']) }

      firebase.database().ref(this.$props.refId + '/' + id).update(data)

      this.toggleSelect()
    },
    addText() {
      const id = firebase.database().ref(this.$props.refId).push().key
      const el = new fabric.IText('Text', {
        id: id, stroke: this.color, fill: this.color, fontSize: 32, fontFamily: this.fontFamily, textBackgroundColor: this.fill, top: 50, left: 50
      })
      el.fontWeight = this.fontBold ? 'bold' : 'normal'
      el.fontStyle = this.fontItalic ? 'italic' : 'normal'
      el.underline = this.fontUnderline
      const data = { data: el.toJSON(['id']) }

      firebase.database().ref(this.$props.refId + '/' + id).update(data)

      this.toggleSelect()
    },
    togglePencil(e) {
      this.isActiveSelect = false
      this.isActivePencil = true
      this.canvas.isDrawingMode = true
      this.canvas.freeDrawingBrush.color = this.color
      this.canvas.freeDrawingBrush.width = this.getWidth()
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
    },
    onElementSelected(element) {
      const el = element.target

      if (el.type === 'i-text') {
        this.color = el.stroke
        this.fill = el.textBackgroundColor
        this.canvas.freeDrawingBrush.color = el.stroke
        this.width = ''
        this.fontFamily = el.fontFamily
        this.fontBold = el.fontWeight === 'bold'
        this.fontItalic = el.fontStyle === 'italic'
        this.fontUnderline = el.underline
        return
      }

      if (el.hasOwnProperty('fill')) this.fill = el.fill
      if (el.hasOwnProperty('stroke')) {
        this.color = el.stroke
        this.canvas.freeDrawingBrush.color = el.stroke
      }
      if (el.hasOwnProperty('strokeWidth')) {
        this.width = el.strokeWidth
        this.canvas.freeDrawingBrush.width = el.strokeWidth
      }
    }
  },
  watch: {
    bg(val) {
      if (val === 'grid') {
        const dots = 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI2IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHdpZHRoPSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48cmVjdCBmaWxsPSIjRkZGIiBoZWlnaHQ9IjI2IiB3aWR0aD0iMjYiLz48ZyBmaWxsPSIjREFEQURBIj48Y2lyY2xlIGN4PSIxMyIgY3k9IjEzIiByPSIxIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIxMyIgcj0iMSIvPjxjaXJjbGUgY3g9IjciIGN5PSIxMyIgcj0iMSIvPjxjaXJjbGUgY3g9IjEiIGN5PSIxMyIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMTMiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMyIgY3k9IjE5IiByPSIxIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIxOSIgcj0iMSIvPjxjaXJjbGUgY3g9IjciIGN5PSIxOSIgcj0iMSIvPjxjaXJjbGUgY3g9IjEiIGN5PSIxOSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMTkiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMyIgY3k9IjI1IiByPSIxIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjciIGN5PSIyNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjEiIGN5PSIyNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMjUiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMyIgY3k9IjciIHI9IjEiLz48Y2lyY2xlIGN4PSIyNSIgY3k9IjciIHI9IjEiLz48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPjxjaXJjbGUgY3g9IjEiIGN5PSI3IiByPSIxIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSI3IiByPSIxIi8+PGNpcmNsZSBjeD0iMTMiIGN5PSIxIiByPSIxIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIxIiByPSIxIi8+PGNpcmNsZSBjeD0iNyIgY3k9IjEiIHI9IjEiLz48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+'
        this.canvas.setBackgroundColor({source: dots, repeat: 'repeat'}, this.canvas.renderAll.bind(this.canvas))
      } else {
        this.canvas.setBackgroundColor(val, this.canvas.renderAll.bind(this.canvas))
      }
    },
    color(val) {
      this.canvas.freeDrawingBrush.color = val
      this.canvas.getActiveObjects().forEach(el => {
        if (el.hasOwnProperty('stroke')) el.set('stroke', val)
        if (el.type === 'i-text') el.set('fill', val)
      })
      this.canvas.renderAll()
    },
    fill(val) {
      this.canvas.getActiveObjects().forEach(el => {
        if (el.type === 'i-text') el.set('textBackgroundColor', val)
        else if (el.hasOwnProperty('fill')) el.set('fill', val)
      })
      this.canvas.renderAll()
    },
    width(val) {
      this.canvas.freeDrawingBrush.width = val
      this.canvas.getActiveObjects().forEach(el => {
        if (el.hasOwnProperty('strokeWidth') && el.type !== 'i-text') el.set('strokeWidth', val)
      })
      this.canvas.renderAll()
    },
    fontFamily(val) {
      this.canvas.getActiveObjects().forEach(el => { (el.type === 'i-text') ? el.fontFamily = val : ''})
      this.canvas.renderAll()
    },
    fontBold(val) {
      this.canvas.getActiveObjects().forEach(el => {
        if (el.type !== 'i-text') return
        el.fontWeight = val ? 'bold' : 'normal'
      })
      this.canvas.renderAll()
    },
    fontItalic(val) {
      this.canvas.getActiveObjects().forEach(el => {
        if (el.type !== 'i-text') return
        el.fontStyle = val ? 'italic' : 'normal'
      })
      this.canvas.renderAll()
    },
    fontUnderline(val) {
      this.canvas.getActiveObjects().forEach(el => {
        if (el.type !== 'i-text') return
        el.underline = val
        el.dirty = true
      })
      this.canvas.renderAll()
    }
  },
  mounted() {
    const canvasRef = this.$refs.board

    this.canvas = new fabric.Canvas(canvasRef, {
      height: 500, width: 900, backgroundColor: this.bg, isDrawingMode: false
    })

    this.canvas.on('selection:cleared', options => { if (!options.hasOwnProperty('deselected')) return
      options.deselected.forEach(el => {
        const data = { data: el.toJSON(['id', 'typePatched']) }
        firebase.database().ref(this.$props.refId + '/' + el.id).update(data)
      })
    })

    this.canvas.on({ 'selection:created': this.onElementSelected, 'selection:updated': this.onElementSelected })

    this.canvas.on('object:added', options => { if (!options.target) return
      const el = options.target

      if (el.type !== 'path') return
      if (el.hasOwnProperty('id') && el.id.length > 0) return

      const id = firebase.database().ref(this.$props.refId).push().key
      el.id = id
      el.fill = el.fill === null ? '' : el.fill

      const data = { data: el.toJSON(['id', 'typePatched']) }
      firebase.database().ref(this.$props.refId + '/' + id).update(data)
    })

    this.canvas.on('object:removed', options => { if (!options.target) return
      firebase.database().ref(this.$props.refId + '/' + options.target.id).remove()
    })

    this.canvas.on('object:modified', options => { if (!options.target) return
      if (options.target.type === 'activeSelection') return

      const data = { data: options.target.toJSON(['id', 'typePatched']) }
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