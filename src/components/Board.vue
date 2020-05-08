<template>
  <div class="hero is-info is-fullheight-with-navbar">
    <div class="columns">
      <div class="column is-one-fifth">
        <button @click="saveImage()">Save</button>
        <button @click="addRect()">Add rectangle</button>
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
  data() {return {
    title: 'Untitled',
    canvas: null,
    elements: [],
  }},
  methods: {
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