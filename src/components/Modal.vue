<template>
  <div class="modal-wrap">
    <div class="modal">
      <div class="start">Press Start</div>
      <div class="modal-option">
      	One Player
      </div>
      <div class="modal-option">
      	Two Player
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .modal-wrap {
  	position: absolute;
  	top: 0;
  	width: 100vw;
  	height: 100vh;
  	background-color: transparent;
  	display: flex;
  	flex-direction: row;
  	justify-content: center;
  	align-items: center;
  }

  .modal {
  	background: lightgray;
    width: 800px;
    height: 800px;
    max-width: 90vw;
    max-height: 90vw;
    display: flex;
  	flex-direction: column;
  	justify-content: center;
  	align-items: center;
  }

  .start {
  	cursor: pointer;
  }

  .modal-option {
  	flex-basis: 0;
  	flex-grow: 1;
  	background: green;
  	border: solid 3px black;
  	padding: 20px;
  	width: 100%;
  	height: 50%;
  	box-sizing: border-box;
  }
</style>