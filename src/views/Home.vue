<template>
  <Board :refId=refId :userId="userId()"/>
</template>

<script>
import Board from '@/components/Board';

export default {
  props: {
    id: String
  },
  methods: {
    userId() {
      return Math.floor(Math.random() * 100000) + 100000
    }
  },
  computed: {
    refId() {
      return 'drawings/' + this.$props.id
    }
  },
  components: {
    Board
  }
}
</script>