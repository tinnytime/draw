<template><div>
  <div class="container buttons are-small">
    <button class="button" @click="resetAcitve(); saveImage()">Save</button>
    <button :class="['button', {'is-primary is-active': isActiveSelect}]" @click="resetActive('sel'); toggleSelect()">Select</button>
    <button class="button" @click="resetActive(); addRect()">Add rectangle</button>
    <button class="button" @click="resetActive(); addText()">Add text</button>
    <button :class="['button', {'is-primary is-active': isActivePencil}]" @click="resetActive('pen'); togglePencil()">Pencil</button>
    <button class="button" @click="resetActive(); deleteSelected()">Delete selected</button>
    <button class="button" @click="resetActive(); clearCanvas()">Clear</button>
  </div>
  <div class="container">
    <canvas ref="board" />
  </div>
</div></template>

<script>

import firebase from "@/firebaseinit"
import { fabric } from '@/fabric'

fabric.Object.prototype.selectable = false

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
    isActiveSelect: false,
  }),
  methods: {
    resetActive(button = null) {
      this.isActiveSelect = button === 'sel' ? !this.isActiveSelect : false
      this.canvas.selection = button === 'sel' ? !this.canvas.selection : false
      this.isActivePencil = button === 'pen' ? !this.isActivePencil : false
      this.canvas.isDrawingMode = button === 'pen' ? !this.canvas.isDrawingMode : false
      this.canvas.getObjects().forEach(e => e.selectable = this.isActiveSelect)
      this.canvas.renderAll()
    },
    saveImage() {
      let link = document.createElement('a')
      link.setAttribute('download', this.title+'.png')
      link.setAttribute('href', this.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'))
      link.click()
    },
    addElements(elements) {
      elements.forEach(e => this.canvas.add(e))
    },
    updateElements(elements) {
      elements.forEach(e => { this.getFabricElementById(e.id).set(e) })
      this.canvas.renderAll()
    },
    removeElements(elements) {
      elements.forEach(e => { this.canvas.remove(...[this.getFabricElementById(e.id)]) })
    },
    toggleSelect() {
      if (!this.isActiveSelct) this.canvas.discardActiveObject().renderAll()
    },
    addRect() {
      const id = firebase.database().ref(this.$props.refId).push().key
      const rect = new fabric.Rect({
        id: id, fill: 'red', height: 40, width: 40, top: Math.floor(Math.random()*400), left: Math.floor(Math.random()*400)
      })
      const data = { data: rect.toJSON(['id']) }

      firebase.database().ref(this.$props.refId + '/' + id).update(data)
    },
    addText() {
      const id = firebase.database().ref(this.$props.refId).push().key
      const el = new fabric.IText('Text', {
        id: id, top: Math.floor(Math.random()*400), left: Math.floor(Math.random()*400)
      })
      const data = { data: el.toJSON(['id']) }

      firebase.database().ref(this.$props.refId + '/' + id).update(data)
    },
    togglePencil(e) {
      this.canvas.freeDrawingBrush.color = 'red'
      this.canvas.freeDrawingBrush.width = parseInt(2, 10) || 1
    },
    clearCanvas() {
      this.canvas.remove(...this.canvas.getObjects())
    },
    deleteSelected() {
      this.canvas.remove(...this.canvas.getActiveObjects())
    },
    getFabricElementById(id) {
      return this.canvas.getObjects().filter((item) => { return item.id == id })[0]
    }
  },
  mounted() {
    const canvasRef = this.$refs.board

    this.canvas = new fabric.Canvas(canvasRef, {
      height: 500, width: 900, selection: false, backgroundColor: 'white', isDrawingMode: false
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