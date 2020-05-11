<template>
  <Board />
</template>

<script>

import Board from '@/components/Board';

export default {
  props: {
    id: String
  },
  components: {
    Board
  }
}
</script>