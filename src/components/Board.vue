<template><div class="wrapper">




<div class="menu-buttons">
  <button class="button hamburger" @click="menuIsHidden = !menuIsHidden">Options
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="icon"><path d="M 22.205078 2 A 1.0001 1.0001 0 0 0 21.21875 2.8378906 L 20.246094 8.7929688 C 19.076509 9.1331971 17.961243 9.5922728 16.910156 10.164062 L 11.996094 6.6542969 A 1.0001 1.0001 0 0 0 10.708984 6.7597656 L 6.8183594 10.646484 A 1.0001 1.0001 0 0 0 6.7070312 11.927734 L 10.164062 16.873047 C 9.583454 17.930271 9.1142098 19.051824 8.765625 20.232422 L 2.8359375 21.21875 A 1.0001 1.0001 0 0 0 2.0019531 22.205078 L 2.0019531 27.705078 A 1.0001 1.0001 0 0 0 2.8261719 28.691406 L 8.7597656 29.742188 C 9.1064607 30.920739 9.5727226 32.043065 10.154297 33.101562 L 6.6542969 37.998047 A 1.0001 1.0001 0 0 0 6.7597656 39.285156 L 10.648438 43.175781 A 1.0001 1.0001 0 0 0 11.927734 43.289062 L 16.882812 39.820312 C 17.936999 40.39548 19.054994 40.857928 20.228516 41.201172 L 21.21875 47.164062 A 1.0001 1.0001 0 0 0 22.205078 48 L 27.705078 48 A 1.0001 1.0001 0 0 0 28.691406 47.173828 L 29.751953 41.1875 C 30.920633 40.838997 32.033372 40.369697 33.082031 39.791016 L 38.070312 43.291016 A 1.0001 1.0001 0 0 0 39.351562 43.179688 L 43.240234 39.287109 A 1.0001 1.0001 0 0 0 43.34375 37.996094 L 39.787109 33.058594 C 40.355783 32.014958 40.813915 30.908875 41.154297 29.748047 L 47.171875 28.693359 A 1.0001 1.0001 0 0 0 47.998047 27.707031 L 47.998047 22.207031 A 1.0001 1.0001 0 0 0 47.160156 21.220703 L 41.152344 20.238281 C 40.80968 19.078827 40.350281 17.974723 39.78125 16.931641 L 43.289062 11.933594 A 1.0001 1.0001 0 0 0 43.177734 10.652344 L 39.287109 6.7636719 A 1.0001 1.0001 0 0 0 37.996094 6.6601562 L 33.072266 10.201172 C 32.023186 9.6248101 30.909713 9.1579916 29.738281 8.8125 L 28.691406 2.828125 A 1.0001 1.0001 0 0 0 27.705078 2 L 22.205078 2 z M 23.056641 4 L 26.865234 4 L 27.861328 9.6855469 A 1.0001 1.0001 0 0 0 28.603516 10.484375 C 30.066026 10.848832 31.439607 11.426549 32.693359 12.185547 A 1.0001 1.0001 0 0 0 33.794922 12.142578 L 38.474609 8.7792969 L 41.167969 11.472656 L 37.835938 16.220703 A 1.0001 1.0001 0 0 0 37.796875 17.310547 C 38.548366 18.561471 39.118333 19.926379 39.482422 21.380859 A 1.0001 1.0001 0 0 0 40.291016 22.125 L 45.998047 23.058594 L 45.998047 26.867188 L 40.279297 27.871094 A 1.0001 1.0001 0 0 0 39.482422 28.617188 C 39.122545 30.069817 38.552234 31.434687 37.800781 32.685547 A 1.0001 1.0001 0 0 0 37.845703 33.785156 L 41.224609 38.474609 L 38.53125 41.169922 L 33.791016 37.84375 A 1.0001 1.0001 0 0 0 32.697266 37.808594 C 31.44975 38.567585 30.074755 39.148028 28.617188 39.517578 A 1.0001 1.0001 0 0 0 27.876953 40.3125 L 26.867188 46 L 23.052734 46 L 22.111328 40.337891 A 1.0001 1.0001 0 0 0 21.365234 39.53125 C 19.90185 39.170557 18.522094 38.59371 17.259766 37.835938 A 1.0001 1.0001 0 0 0 16.171875 37.875 L 11.46875 41.169922 L 8.7734375 38.470703 L 12.097656 33.824219 A 1.0001 1.0001 0 0 0 12.138672 32.724609 C 11.372652 31.458855 10.793319 30.079213 10.427734 28.609375 A 1.0001 1.0001 0 0 0 9.6328125 27.867188 L 4.0019531 26.867188 L 4.0019531 23.052734 L 9.6289062 22.117188 A 1.0001 1.0001 0 0 0 10.435547 21.373047 C 10.804273 19.898143 11.383325 18.518729 12.146484 17.255859 A 1.0001 1.0001 0 0 0 12.111328 16.164062 L 8.8261719 11.46875 L 11.523438 8.7734375 L 16.185547 12.105469 A 1.0001 1.0001 0 0 0 17.28125 12.148438 C 18.536908 11.394293 19.919867 10.822081 21.384766 10.462891 A 1.0001 1.0001 0 0 0 22.132812 9.6523438 L 23.056641 4 z M 25 17 C 20.593567 17 17 20.593567 17 25 C 17 29.406433 20.593567 33 25 33 C 29.406433 33 33 29.406433 33 25 C 33 20.593567 29.406433 17 25 17 z M 25 19 C 28.325553 19 31 21.674447 31 25 C 31 28.325553 28.325553 31 25 31 C 21.674447 31 19 28.325553 19 25 C 19 21.674447 21.674447 19 25 19 z"></path></svg>
  </button>
  <button class="button" @click="closeMenu(); switchOrientation()">Rotate
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="icon"><path d="M 3 3 L 3 40 L 8 40 L 8 38 L 5 38 L 5 5 L 19 5 L 19 15 L 29 15 L 29 17 L 31 17 L 31 13.585938 L 20.414062 3 L 3 3 z M 21 6.4140625 L 27.585938 13 L 21 13 L 21 6.4140625 z M 10 19 L 10 47 L 11 47 L 36.414062 47 L 47 36.414062 L 47 19 L 10 19 z M 12 21 L 45 21 L 45 35 L 35 35 L 35 45 L 12 45 L 12 21 z M 37 37 L 43.585938 37 L 37 43.585938 L 37 37 z"></path></svg>
  </button>
  <button :class="['button', {'is-active': isActiveSelect}]" @click="toggleSelect()">Select
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="icon icon-select"><path d="M 17 3 C 16.0625 3 15.117188 3.3125 14.34375 3.96875 C 13.570313 4.625 13 5.675781 13 6.90625 L 13 28.4375 C 12.558594 28.597656 12.15625 28.644531 11.34375 29.34375 C 10.167969 30.359375 9 32.183594 9 34.90625 C 9 36.878906 9.785156 38.683594 10.09375 39.40625 C 10.09375 39.417969 10.09375 39.425781 10.09375 39.4375 L 12.90625 45.03125 C 12.910156 45.039063 12.902344 45.054688 12.90625 45.0625 C 14.382813 48.105469 17.539063 50 20.90625 50 L 30 50 C 34.945313 50 39 45.945313 39 41 L 39 25 C 39 24.179688 38.871094 23.050781 38.3125 22 C 37.753906 20.949219 36.597656 20 35 20 C 33.90625 20 33.09375 20.375 32.4375 20.875 C 32.328125 20.574219 32.273438 20.238281 32.125 19.96875 C 31.503906 18.847656 30.367188 18 29 18 C 27.882813 18 27.007813 18.40625 26.34375 18.96875 C 25.679688 17.871094 24.558594 17 23 17 C 22.21875 17 21.574219 17.246094 21 17.59375 L 21 7 C 21 5.734375 20.460938 4.675781 19.6875 4 C 18.914063 3.324219 17.9375 3 17 3 Z M 17 5 C 17.460938 5 18 5.175781 18.375 5.5 C 18.75 5.824219 19 6.265625 19 7 L 19 23 L 21 23 L 21 21 C 21 20.125 21.660156 19 23 19 C 24.339844 19 25 20.125 25 21 L 25 22 C 25.007813 22.546875 25.453125 22.984375 26 22.984375 C 26.546875 22.984375 26.992188 22.546875 27 22 C 27 21.464844 27.132813 20.933594 27.40625 20.59375 C 27.679688 20.253906 28.082031 20 29 20 C 29.632813 20 29.996094 20.257813 30.375 20.9375 C 30.753906 21.617188 31 22.71875 31 24 L 33 24 C 33 23.417969 33.105469 22.910156 33.34375 22.59375 C 33.582031 22.277344 33.964844 22 35 22 C 35.902344 22 36.246094 22.339844 36.5625 22.9375 C 36.878906 23.535156 37 24.417969 37 25 L 37 41 C 37 44.855469 33.855469 48 30 48 L 20.90625 48 C 18.285156 48 15.816406 46.5 14.6875 44.15625 L 11.90625 38.59375 C 11.902344 38.585938 11.910156 38.570313 11.90625 38.5625 C 11.613281 37.875 11 36.320313 11 34.90625 C 11 32.726563 11.832031 31.585938 12.65625 30.875 C 13.480469 30.164063 14.25 29.96875 14.25 29.96875 C 14.691406 29.855469 15 29.457031 15 29 L 15 6.90625 C 15 6.238281 15.25 5.820313 15.625 5.5 C 16 5.179688 16.539063 5 17 5 Z M 21.90625 29.96875 C 21.863281 29.976563 21.820313 29.988281 21.78125 30 C 21.316406 30.105469 20.988281 30.523438 21 31 L 21 40 C 20.996094 40.359375 21.183594 40.695313 21.496094 40.878906 C 21.808594 41.058594 22.191406 41.058594 22.503906 40.878906 C 22.816406 40.695313 23.003906 40.359375 23 40 L 23 31 C 23.011719 30.710938 22.894531 30.433594 22.6875 30.238281 C 22.476563 30.039063 22.191406 29.941406 21.90625 29.96875 Z M 26.90625 29.96875 C 26.863281 29.976563 26.820313 29.988281 26.78125 30 C 26.316406 30.105469 25.988281 30.523438 26 31 L 26 40 C 25.996094 40.359375 26.183594 40.695313 26.496094 40.878906 C 26.808594 41.058594 27.191406 41.058594 27.503906 40.878906 C 27.816406 40.695313 28.003906 40.359375 28 40 L 28 31 C 28.011719 30.710938 27.894531 30.433594 27.6875 30.238281 C 27.476563 30.039063 27.191406 29.941406 26.90625 29.96875 Z M 31.90625 29.96875 C 31.863281 29.976563 31.820313 29.988281 31.78125 30 C 31.316406 30.105469 30.988281 30.523438 31 31 L 31 40 C 30.996094 40.359375 31.183594 40.695313 31.496094 40.878906 C 31.808594 41.058594 32.191406 41.058594 32.503906 40.878906 C 32.816406 40.695313 33.003906 40.359375 33 40 L 33 31 C 33.011719 30.710938 32.894531 30.433594 32.6875 30.238281 C 32.476563 30.039063 32.191406 29.941406 31.90625 29.96875 Z"></path></svg>
  </button>
  <button class="button" @click="deleteSelected()">Delete
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="icon icon-delete"><path d="M 6 3 A 1.0001 1.0001 0 0 0 5.1679688 4.5546875 L 18.798828 25 L 5.1679688 45.445312 A 1.0001 1.0001 0 0 0 6 47 L 14.558594 47 A 1.0001 1.0001 0 0 0 15.378906 46.572266 L 25 32.75 L 34.621094 46.572266 A 1.0001 1.0001 0 0 0 35.441406 47 L 44 47 A 1.0001 1.0001 0 0 0 44.832031 45.445312 L 31.201172 25 L 44.832031 4.5546875 A 1.0001 1.0001 0 0 0 44 3 L 35.441406 3 A 1.0001 1.0001 0 0 0 34.621094 3.4277344 L 25 17.25 L 15.378906 3.4277344 A 1.0001 1.0001 0 0 0 14.558594 3 L 6 3 z M 7.8691406 5 L 14.035156 5 L 24.179688 19.572266 A 1.0001 1.0001 0 0 0 25.820312 19.572266 L 35.964844 5 L 42.130859 5 L 29.167969 24.445312 A 1.0001 1.0001 0 0 0 29.167969 25.554688 L 42.130859 45 L 35.964844 45 L 25.820312 30.427734 A 1.0001 1.0001 0 0 0 24.179688 30.427734 L 14.035156 45 L 7.8691406 45 L 20.832031 25.554688 A 1.0001 1.0001 0 0 0 20.832031 24.445312 L 7.8691406 5 z"></path></svg>
  </button>
  <button class="button" @click="clearCanvas()">Clear
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="icon"><path d="M 21 0 C 19.355469 0 18 1.355469 18 3 L 18 5 L 10.1875 5 C 10.0625 4.976563 9.9375 4.976563 9.8125 5 L 8 5 C 7.96875 5 7.9375 5 7.90625 5 C 7.355469 5.027344 6.925781 5.496094 6.953125 6.046875 C 6.980469 6.597656 7.449219 7.027344 8 7 L 9.09375 7 L 12.6875 47.5 C 12.8125 48.898438 14.003906 50 15.40625 50 L 34.59375 50 C 35.996094 50 37.1875 48.898438 37.3125 47.5 L 40.90625 7 L 42 7 C 42.359375 7.003906 42.695313 6.816406 42.878906 6.503906 C 43.058594 6.191406 43.058594 5.808594 42.878906 5.496094 C 42.695313 5.183594 42.359375 4.996094 42 5 L 32 5 L 32 3 C 32 1.355469 30.644531 0 29 0 Z M 21 2 L 29 2 C 29.5625 2 30 2.4375 30 3 L 30 5 L 20 5 L 20 3 C 20 2.4375 20.4375 2 21 2 Z M 11.09375 7 L 38.90625 7 L 35.3125 47.34375 C 35.28125 47.691406 34.910156 48 34.59375 48 L 15.40625 48 C 15.089844 48 14.71875 47.691406 14.6875 47.34375 Z M 18.90625 9.96875 C 18.863281 9.976563 18.820313 9.988281 18.78125 10 C 18.316406 10.105469 17.988281 10.523438 18 11 L 18 44 C 17.996094 44.359375 18.183594 44.695313 18.496094 44.878906 C 18.808594 45.058594 19.191406 45.058594 19.503906 44.878906 C 19.816406 44.695313 20.003906 44.359375 20 44 L 20 11 C 20.011719 10.710938 19.894531 10.433594 19.6875 10.238281 C 19.476563 10.039063 19.191406 9.941406 18.90625 9.96875 Z M 24.90625 9.96875 C 24.863281 9.976563 24.820313 9.988281 24.78125 10 C 24.316406 10.105469 23.988281 10.523438 24 11 L 24 44 C 23.996094 44.359375 24.183594 44.695313 24.496094 44.878906 C 24.808594 45.058594 25.191406 45.058594 25.503906 44.878906 C 25.816406 44.695313 26.003906 44.359375 26 44 L 26 11 C 26.011719 10.710938 25.894531 10.433594 25.6875 10.238281 C 25.476563 10.039063 25.191406 9.941406 24.90625 9.96875 Z M 30.90625 9.96875 C 30.863281 9.976563 30.820313 9.988281 30.78125 10 C 30.316406 10.105469 29.988281 10.523438 30 11 L 30 44 C 29.996094 44.359375 30.183594 44.695313 30.496094 44.878906 C 30.808594 45.058594 31.191406 45.058594 31.503906 44.878906 C 31.816406 44.695313 32.003906 44.359375 32 44 L 32 11 C 32.011719 10.710938 31.894531 10.433594 31.6875 10.238281 C 31.476563 10.039063 31.191406 9.941406 30.90625 9.96875 Z"></path></svg>
  </button>
  <button :class="['button', {'is-active': isActivePencil}]" @click="togglePencil()">Pencil
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="icon icon-pencil"><path d="M 42.90625 2.90625 C 41.851563 2.90625 40.796875 3.296875 40 4.09375 L 39.15625 4.90625 C 38.953125 4.800781 38.722656 4.769531 38.5 4.8125 C 38.308594 4.855469 38.136719 4.953125 38 5.09375 L 6.59375 36.5 C 6.496094 36.597656 6.421875 36.714844 6.375 36.84375 L 3.0625 45.65625 C 2.929688 46.019531 3.019531 46.429688 3.296875 46.703125 C 3.570313 46.980469 3.980469 47.070313 4.34375 46.9375 L 13.15625 43.625 C 13.285156 43.578125 13.402344 43.503906 13.5 43.40625 L 44.90625 12 C 45.242188 11.652344 45.285156 11.113281 45 10.71875 L 45.8125 9.90625 C 47.40625 8.3125 47.40625 5.6875 45.8125 4.09375 C 45.015625 3.296875 43.960938 2.90625 42.90625 2.90625 Z M 42.90625 4.90625 C 43.453125 4.90625 44.003906 5.097656 44.40625 5.5 C 45.214844 6.308594 45.214844 7.691406 44.40625 8.5 L 43.625 9.3125 L 40.625 6.3125 L 41.40625 5.5 C 41.808594 5.097656 42.359375 4.90625 42.90625 4.90625 Z M 38.6875 7.1875 L 42.8125 11.3125 L 40.0625 14.03125 L 35.96875 9.9375 Z M 34.53125 11.34375 L 38.65625 15.46875 L 12.75 41.34375 L 12 40.5625 L 12 39 C 12 38.449219 11.550781 38 11 38 L 9.4375 38 L 8.65625 37.25 Z M 7.65625 39.09375 L 8.28125 39.71875 C 8.472656 39.90625 8.734375 40.007813 9 40 L 10 40 L 10 41 C 9.992188 41.265625 10.09375 41.527344 10.28125 41.71875 L 10.90625 42.34375 L 7.09375 43.78125 L 6.21875 42.90625 Z"></path></svg>
  </button>
</div>









<div :class="['board-buttons', {'hidden': menuIsHidden}]" ref="board_buttons">

  <div class="row row2">
    <fieldset><legend>Colour</legend>
    <button :class="['button', {'is-active': this.color == '#000000'}]" @click="closeMenu(); color = '#000000'">Black
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="icon icon-color"><circle fill="#000000" cx="45" cy="45" r="45"/></svg>
    </button>
    <button :class="['button', {'is-active': this.color == '#FFFFFF'}]" @click="closeMenu(); color = '#FFFFFF'">White
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="icon icon-color"><circle fill="#FFFFFF" cx="45" cy="45" r="45"/></svg>
    </button>
    <button :class="['button', {'is-active': this.color == '#FF6961'}]" @click="closeMenu(); color = '#FF6961'">Red
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="icon icon-color"><circle fill="#FF6961" cx="45" cy="45" r="45"/></svg>
    </button>
    <button :class="['button', {'is-active': this.color == '#77dd77'}]" @click="closeMenu(); color = '#77dd77'">Green
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="icon icon-color"><circle fill="#77dd77" cx="45" cy="45" r="45"/></svg>
    </button>
    <button :class="['button', {'is-active': this.color == '#7DD7E6'}]" @click="closeMenu(); color = '#7DD7E6'">Blue
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="icon icon-color"><circle fill="#7DD7E6" cx="45" cy="45" r="45"/></svg>
    </button>
    <button :class="['button', {'is-active': this.color == '#FDFD96'}]" @click="closeMenu(); color = '#FDFD96'">Yellow
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="icon icon-color"><circle fill="#FDFD96" cx="45" cy="45" r="45"/></svg>
    </button>
    <button :class="['button', {'is-active': this.color == '#FFD1DC'}]" @click="closeMenu(); color = '#FFD1DC'">Pink
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" class="icon icon-color"><circle fill="#FFD1DC" cx="45" cy="45" r="45"/></svg>
    </button>
    </fieldset>
    <fieldset><legend>Background</legend>
    <button :class="['button', {'is-active': this.bg == '#FFFFFF'}]" @click="closeMenu(); bg = '#FFFFFF'">White
      <svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="150" fill="white" /></svg>
    </button>
    <button :class="['button', {'is-active': this.bg == '#2b519b'}]" @click="closeMenu(); bg = '#2b519b'">Blue
      <svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="150" fill="blue" /></svg>
    </button>
    <button :class="['button', {'is-active': this.bg == '#000000'}]" @click="closeMenu(); bg = '#000000'">Black
      <svg viewBox="0 0 220 150" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="150" fill="black" /></svg>
    </button>
    <button :class="['button', {'is-active': this.bg == 'grid'}]" @click="closeMenu(); bg = 'grid'">Grid
      <svg height="26" viewBox="0 0 26 26" width="26" xmlns="http://www.w3.org/2000/svg" class="icon"><g fill="none"><rect fill="#FFF" height="26" width="26"/><g fill="#DADADA"><circle cx="13" cy="13" r="1"/><circle cx="25" cy="13" r="1"/><circle cx="7" cy="13" r="1"/><circle cx="1" cy="13" r="1"/><circle cx="19" cy="13" r="1"/><circle cx="13" cy="19" r="1"/><circle cx="25" cy="19" r="1"/><circle cx="7" cy="19" r="1"/><circle cx="1" cy="19" r="1"/><circle cx="19" cy="19" r="1"/><circle cx="13" cy="25" r="1"/><circle cx="25" cy="25" r="1"/><circle cx="7" cy="25" r="1"/><circle cx="1" cy="25" r="1"/><circle cx="19" cy="25" r="1"/><circle cx="13" cy="7" r="1"/><circle cx="25" cy="7" r="1"/><circle cx="7" cy="7" r="1"/><circle cx="1" cy="7" r="1"/><circle cx="19" cy="7" r="1"/><circle cx="13" cy="1" r="1"/><circle cx="25" cy="1" r="1"/><circle cx="7" cy="1" r="1"/><circle cx="1" cy="1" r="1"/><circle cx="19" cy="1" r="1"/></g></g></svg>
    </button>
    </fieldset>

    <fieldset><legend>File</legend>
    <button class="button" @click="saveImage()">Export
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" class="icon icon-export"><path d="M 0.78125 -0.03125 C 0.300781 0.078125 -0.0390625 0.507813 -0.03125 1 L -0.03125 49 C -0.0273438 49.566406 0.433594 50.027344 1 50.03125 L 31 50.03125 C 31.566406 50.027344 32.027344 49.566406 32.03125 49 L 32.03125 39 L 29.96875 39 L 29.96875 47.96875 L 2.03125 47.96875 L 2.03125 2.03125 L 29.96875 2.03125 L 29.96875 11 L 32.03125 11 L 32.03125 1 C 32.027344 0.433594 31.566406 -0.0273438 31 -0.03125 L 1 -0.03125 C 0.925781 -0.0390625 0.855469 -0.0390625 0.78125 -0.03125 Z M 38.90625 15.09375 C 38.53125 15.160156 38.230469 15.433594 38.125 15.796875 C 38.019531 16.164063 38.128906 16.554688 38.40625 16.8125 L 45.5625 24 L 16 24 C 15.96875 24 15.9375 24 15.90625 24 C 15.355469 24.027344 14.925781 24.496094 14.953125 25.046875 C 14.980469 25.597656 15.449219 26.027344 16 26 L 45.5625 26 L 38.40625 33.1875 C 38.109375 33.429688 37.972656 33.816406 38.058594 34.191406 C 38.144531 34.5625 38.4375 34.855469 38.808594 34.941406 C 39.183594 35.027344 39.570313 34.890625 39.8125 34.59375 L 48.71875 25.71875 L 49.40625 25 L 48.71875 24.28125 L 39.8125 15.40625 C 39.605469 15.183594 39.304688 15.070313 39 15.09375 C 38.96875 15.09375 38.9375 15.09375 38.90625 15.09375 Z"></path></svg>
    </button>
    </fieldset>

  </div>
</div>
<div class="board-container">
  <canvas ref="board" />
</div>
</div></template>

<script>

import firebase, { db } from "@/firebaseinit"
import { fabric } from '@/fabric.min'
import { routeHelpers } from '@/router'

const canvas_horizontal_width = 2200
const canvas_horizontal_height = 1519
const canvas_vertical_width = 769
const canvas_vertical_height = canvas_vertical_width * canvas_horizontal_width / canvas_horizontal_height
let canvas_width = canvas_horizontal_width
let canvas_height = canvas_horizontal_height

export default {
  name: "board",
  data: () => ({
    menuIsHidden: true,
    title: 'Untitled',
    canvas: null,
    bg: '#FFFFFF',
    isActivePencil: true,
    isActiveSelect: false,
    color: '#000000',
    orientation: 'horizontal'
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
    switchOrientation() {
      this.orientation = this.orientation === 'horizontal' ? 'vertical' : 'horizontal'
    },
    closeMenu() {
      this.menuIsHidden = true
    },
    addElements(elements) {
      elements.forEach(el => {
        this.canvas.add(el)
      })
      this.canvas.renderAll()
    },
    updateElements(elements) {
      elements.forEach(el => {
        this.getFabricElementsById(el.id).forEach(o => o.set(el))
      })
      this.canvas.renderAll()
    },
    removeElements(elements) {
      let orig = this.canvas.isDrawingMode
      this.canvas.isDrawingMode = false
      this.canvas.discardActiveObject()
      this.canvas.renderAll()

      elements.forEach(el => this.canvas.remove(...this.getFabricElementsById(el.id)))

      this.canvas.isDrawingMode = orig
      this.canvas.renderAll()
    },
    toggleSelect(el = null) {
      if (el) {
        this.canvas.setActiveObject(el)
        el.setCoords()
      }
      else this.canvas.discardActiveObject()

      this.canvas.renderAll()

      this.canvas.isDrawingMode = false
      this.isActivePencil = false
      this.isActiveSelect = !this.isActiveSelect
    },
    getColour() {
      return this.color || '#000000'
    },
    togglePencil(e, toggle = null) {
      if (toggle === true) {
        this.isActiveSelect = false
        this.isActivePencil = true
        this.canvas.isDrawingMode = true
      } else {
        this.isActiveSelect = false
        this.isActivePencil = !this.isActivePencil
        this.canvas.isDrawingMode = !this.canvas.isDrawingMode
      }

      if (this.canvas.isDrawingMode) {
        if (!this.color) this.color = '#000000'
      }
    },
    clearCanvas() {
      this.canvas.remove(...this.canvas.getObjects())
      this.canvas.discardActiveObject()
      this.canvas.renderAll()
      this.canvas.isDrawingMode = false
      this.canvas.renderAll() // This extra renderAll() is required after settings drawing mode
      this.togglePencil(null, true)
    },
    deleteSelected() {
      this.canvas.remove(...this.canvas.getActiveObjects())
      // this.toggleSelect()
    },
    getFabricElementsById(id) {
      // Return array of multiple because free draw tool contains multiple objects
      return this.canvas.getObjects().filter((item) => { return item.id == id })
    },
    onElementSelected(element) {
      if (element.hasOwnProperty('deselected')) {
        element.deselected.forEach(el => this.canvas.trigger('object:modified', {target: el}))
      }

      const el = element.target

      if (el.hasOwnProperty('stroke')) {
        this.color = el.stroke
        this.canvas.freeDrawingBrush.color = el.stroke
      }
    },
    allowSelect(allow) {
      this.canvas.forEachObject(function(object) {
        object.selectable = allow
        object.evented = allow
      })
      this.canvas.selection = allow
      this.canvas.renderAll()
    },
    onResize() {
      const ratio = canvas_width / canvas_height
      let containerWidth = 0
      let containerHeight = 0

      if (this.orientation === 'horizontal') {
        containerWidth = Math.min(canvas_width, window.innerWidth-(window.innerWidth/10))
        containerHeight = containerWidth / ratio

      } else {
        containerHeight = Math.min(canvas_height, window.innerHeight-(window.innerHeight/10))
        containerWidth = containerHeight * ratio
      }

      const scale = containerWidth / this.canvas.getWidth()
      const zoom  = this.canvas.getZoom() * scale

      this.canvas.setDimensions({width: containerWidth, height: containerHeight})
      this.canvas.setViewportTransform([zoom, 0, 0, zoom, 0, 0])
      this.canvas.renderAll()
    }
  },
  watch: {
    isActiveSelect(val) {
      this.allowSelect(val)
    },
    orientation(val) {
      if (val === 'horizontal') {
        canvas_width = canvas_horizontal_width
        canvas_height = canvas_horizontal_height
      }
      else {
        canvas_width = canvas_vertical_width
        canvas_height = canvas_vertical_height
      }

      this.onResize()
      db.updateDrawingMeta({ orientation: this.orientation })
    },
    bg(val) {
      if (val === 'grid') {
        const dots = 'data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI2IiB2aWV3Qm94PSIwIDAgMjYgMjYiIHdpZHRoPSIyNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIj48cmVjdCBmaWxsPSIjRkZGIiBoZWlnaHQ9IjI2IiB3aWR0aD0iMjYiLz48ZyBmaWxsPSIjREFEQURBIj48Y2lyY2xlIGN4PSIxMyIgY3k9IjEzIiByPSIxIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIxMyIgcj0iMSIvPjxjaXJjbGUgY3g9IjciIGN5PSIxMyIgcj0iMSIvPjxjaXJjbGUgY3g9IjEiIGN5PSIxMyIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMTMiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMyIgY3k9IjE5IiByPSIxIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIxOSIgcj0iMSIvPjxjaXJjbGUgY3g9IjciIGN5PSIxOSIgcj0iMSIvPjxjaXJjbGUgY3g9IjEiIGN5PSIxOSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMTkiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMyIgY3k9IjI1IiByPSIxIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIyNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjciIGN5PSIyNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjEiIGN5PSIyNSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMjUiIHI9IjEiLz48Y2lyY2xlIGN4PSIxMyIgY3k9IjciIHI9IjEiLz48Y2lyY2xlIGN4PSIyNSIgY3k9IjciIHI9IjEiLz48Y2lyY2xlIGN4PSI3IiBjeT0iNyIgcj0iMSIvPjxjaXJjbGUgY3g9IjEiIGN5PSI3IiByPSIxIi8+PGNpcmNsZSBjeD0iMTkiIGN5PSI3IiByPSIxIi8+PGNpcmNsZSBjeD0iMTMiIGN5PSIxIiByPSIxIi8+PGNpcmNsZSBjeD0iMjUiIGN5PSIxIiByPSIxIi8+PGNpcmNsZSBjeD0iNyIgY3k9IjEiIHI9IjEiLz48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjxjaXJjbGUgY3g9IjE5IiBjeT0iMSIgcj0iMSIvPjwvZz48L2c+PC9zdmc+'
        this.canvas.setBackgroundColor({source: dots, repeat: 'repeat'}, this.canvas.renderAll.bind(this.canvas))
      } else {
        this.canvas.setBackgroundColor(val, this.canvas.renderAll.bind(this.canvas))
      }

      db.updateDrawingMeta({ bg: val })
    },
    color(val) {
      this.canvas.freeDrawingBrush.color = val
      this.canvas.getActiveObjects().forEach(el => {
        if (el.hasOwnProperty('stroke')) el.set('stroke', val)
      })
      this.canvas.renderAll()
    }
  },
  mounted() {
    const canvasRef = this.$refs.board

    firebase.database().ref('drawings/' + this.$route.params.id + '/orientation').on('value', snapshot => {
      if (snapshot.val()) this.orientation = snapshot.val()
    })

    this.canvas = new fabric.Canvas(canvasRef, {
      height: canvas_height, width: canvas_width, backgroundColor: this.bg, selection: false,
      isDrawingMode: true
    })

    this.canvas.freeDrawingBrush.color = '#000000'
    this.canvas.freeDrawingBrush.width = 20

    this.onResize()
    window.addEventListener('resize', this.onResize)

    this.canvas.on('selection:cleared', options => {
      if (options.e === undefined || !options.hasOwnProperty('deselected')) return

      options.deselected.forEach(el => {
        const data = { data: el.toJSON(['id']) }
        db.updateElementById(el.id, data)
      })
    })

    this.canvas.on({ 'selection:created': this.onElementSelected, 'selection:updated': this.onElementSelected })

    this.canvas.on('object:added', options => { if (!options.target) return
      const el = options.target

      if (el.type !== 'path') return
      if (el.hasOwnProperty('id') && el.id.length > 0) return

      const id = db.createNewElementKey()
      el.id = id
      el.fill = el.fill === null ? '' : el.fill

      const data = { data: el.toJSON(['id']) }
      db.updateElementById(id, data)
    })

    this.canvas.on('object:removed', options => { if (!options.target) return
      db.removeElementById(options.target.id)
    })

    this.canvas.on('object:modified', options => { if (!options.target) return
      if (options.target.type === 'activeSelection') return

      const data = { data: options.target.toJSON(['id', 'typePatched']) }
      db.updateElementById(options.target.id, data)
    })

    firebase.database().ref('drawings/' + this.$route.params.id + '/bg').on('value', snapshot => {
      if (snapshot.val()) this.bg = snapshot.val()
    })
    firebase.database().ref(db.refId()).on('child_added', snapshot => {
      const { data } = snapshot.val()
      fabric.util.enlivenObjects([data], this.addElements)
    })
    firebase.database().ref(db.refId()).on('child_changed', snapshot => {
      const { data } = snapshot.val()
      fabric.util.enlivenObjects([data], this.updateElements)
    })
    firebase.database().ref(db.refId()).on('child_removed', snapshot => {
      const { data } = snapshot.val()
      fabric.util.enlivenObjects([data], this.removeElements)
    })

    this.allowSelect(false)
  }
};
</script>


<style>
body {margin: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI","Roboto", "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif;
}
fieldset {display: inline-block; padding: 5px;}

.button {padding: 0; width: 45px; height: 55px; margin-right: 5px}
.button.is-active {background-color: gray;}

.red {background-color: red}
.green  {background-color: green}
.blue  {background-color: blue}
.yellow  {background-color: yellow}
.pink  {background-color: pink}
.white  {background-color: white}
.black  {background-color: black}
.none  {background-color: none}

.icon {}
.icon-color {}
.icon-none {}
.icon-pencil {}
.icon-text {}
.icon-width2 {width: 2px}
.icon-width8 {width: 8px}
.icon-width14 {width: 14px}
.icon-width20 {width: 20px}

.font-arial {font-family: Arial}
.font-courier-new {font-family: 'Courier New'}
.font-lucida-console {font-family: 'Lucida Console'}
.font-comic-sans {font-family: 'Comis Sans'}
.font-italic {font-style: italic}
.font-bold {font-weight: bold}
.font-underline {text-decoration: underline}

.divider {width: 20px; display: inline-block}

.wrapper {position: relative;}
.board-buttons {}
.board-container {}

.canvas-container {margin-left: auto; margin-right: auto}

.board-buttons .row {}
.row2 span {display: block}

.hidden {display: none}

.hamburger {}
.board-buttons {position: absolute; z-index: 9; background-color: #f5f5f5; height: calc(100vh - 55px); width: 100%}

@media screen and (min-width: 760px) {
  .hamburger {display: none}
  .menu-buttons {display: inline}
  .board-buttons {display: inline !important; position: relative; height: auto}
  .board-buttons .row {display: inline}
}

</style>