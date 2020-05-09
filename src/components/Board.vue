<template>
  <div class="hero is-info is-fullheight-with-navbar">
    <div class="columns">
      <div class="column is-one-fifth">
        <button @click="saveImage()">Save</button>
        <button @click="addRect()">Add rectangle</button>
        <button @click="deleteSelected()">Delete selected</button>
        <button @click="clearCanvas()">Clear</button>
      </div>
      <div class="column">
        <div class="hero-body">
          <canvas ref="board" />
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
  data: () => ({
    title: 'Untitled',
    canvas: null,
  }),
  methods: {
    saveImage() {
      let link = document.createElement('a');
      link.setAttribute('download', this.title+'.png');
      link.setAttribute('href', this.canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream'));
      link.click();
    },
    addElements(elements) {
      elements.forEach(e => this.canvas.add(e))
    },
    updateElements(elements) {
      elements.forEach(e => {
        const el = this.getFabricElementById(e.id)
        el.set(e.toObject())
      })
      this.canvas.renderAll()
    },
    removeElements(elements) {
      elements.forEach(e => {
        const el = this.getFabricElementById(e.id)
        this.canvas.remove(...[el])
      })
    },
    addRect() {
      const id = firebase.database().ref(this.$props.refId).push().key;
      const rect = new fabric.Rect({
        id: id,
        fill: 'red',
        height: 40,
        width: 40,
        top: Math.floor(Math.random()*400),
        left: Math.floor(Math.random()*400)
      })
      const data = {
        uid: this.$props.userId,
        created: Date.now(),
        data: rect.toJSON(['id', id]),
      }
      firebase.database().ref(this.$props.refId + '/' + id).update(data);
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
    const canvasRef = this.$refs.board;

    this.canvas = new fabric.Canvas(canvasRef, {
        height: 500,
        width: 800,
        backgroundColor: 'white',
    });

    this.canvas.on('selection:cleared', options => {
      if (!options.deselected.length) return

      options.deselected.forEach(el => {
        const data = {
          uid: this.$props.userId,
          created: Date.now(),
          data: el.toJSON(['id', el.id]),
        }
        firebase.database().ref(this.$props.refId + '/' + el.id).update(data)
      })
    })

    this.canvas.on('object:removed', options => {
      if (!options.target) return
      firebase.database().ref(this.$props.refId + '/' + options.target.id).remove()
    })

    this.canvas.on('object:modified', options => {
      if (!options.target) return
      if (options.target.type === 'activeSelection') return

      const data = {
        uid: this.$props.userId,
        created: Date.now(),
        data: options.target.toJSON(['id', options.target.id]),
      }
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