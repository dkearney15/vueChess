<template>
  <div id="app">
    <chess-board></chess-board>
    <modal></modal>
  </div>
</template>

<script>
import Modal from './components/Modal.vue';
import ChessBoard from './components/ChessBoard.vue';
export default {
  components: {
    'chess-board': ChessBoard,
    'modal': Modal
  },
  data () {
    return {
     
    }
  }
}
</script>

<style>

</style>