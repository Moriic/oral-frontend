<template>
  <div class="panzoom-container">
    <p>Hold Shift To Zoom</p>
    <div class="panzoom-element" ref="panzoom-element">
      <slot ref="panzoom-element"></slot>
      <img src="../../assets/nii/slice_x/slice_x_230.png" />
    </div>
    <div class="controls">
      <button type="button" @click="zoomIn">Zoom In +</button>
      <button type="button" @click="zoomOut">Zoom Out -</button>
      <div>
        <button type="button" @click="move('up')">Up</button>
        <button type="button" @click="move('right')">Right</button>
        <button type="button" @click="move('down')">Down</button>
        <button type="button" @click="move('left')">Left</button>
      </div>
    </div>
  </div>
</template>

<script>
import Panzoom from '@panzoom/panzoom'

export default {
  name: 'Panzoom',
  data() {
    return {
      panzoom: null // this will be our panzoom instance
    }
  },
  methods: {
    zoomIn() {
      this.panzoom.zoomIn() // the amount of zoom can be set in the options
    },
    zoomOut() {
      this.panzoom.zoomOut() // the amount of zoom can be set in the options
    },
    move(direction) {
      switch (direction) {
        case 'up':
          this.panzoom.pan(0, -10, { relative: true, animate: true }) // x/y move
          break
        case 'right':
          this.panzoom.pan(10, 0, { relative: true, animate: true }) // x/y move
          break
        case 'down':
          this.panzoom.pan(0, 10, { relative: true, animate: true }) // x/y move
          break
        case 'left':
          this.panzoom.pan(-10, 0, { relative: true, animate: true }) // x/y move
          break
      }
    }
  },
  mounted() {
    // Get the element we want to panzoom using vue refs
    const elem = this.$refs['panzoom-element']

    // if it exists set it up
    if (elem) {
      // give panzoom the element to bind too along with options.
      // maxScale prevents you from zooming too far in or out
      this.panzoom = Panzoom(elem, { maxScale: 2 })

      // On mouse wheel scroll pass the event to panzoom's handler for it, but only if shift is held (magic happens)
      elem.parentElement.addEventListener('wheel', (event) => {
        if (!event.shiftKey) {
          return
        }
        this.panzoom.zoomWithWheel(event)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.panzoom-container {
  width: 100%;
  height: 100%; // probably want to set a real height here
  min-height: 600px;
  border: 1px solid #000000;
  position: relative;

  .controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    //height: 40px;
    background: gray;
    padding: 10px;
  }
}

.panzoom-element {
  display: inline-block;
}
</style>
