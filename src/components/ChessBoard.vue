<template>
  <div id="board">
    <div class="row" v-for="row in board">
	  <div class="space" v-for="space in row">
		{{ space.HTML }}
	  </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
  	board() {
  	  return this.$store.state.board.grid;
  	}
  }
}
</script>

<style>
	#board {
		width: 60vw;
		height: 60vw;
		max-width: 80vh;
		max-height: 80vh;
		border: 5px solid gray;
		display: flex;
  		flex-direction: column;
  		margin: 5% auto;
	}

	.row {
		display: flex;
		flex: 1;
		flex-direction: row;
	}

	.space {
		flex: 1;
		display: flex;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		font-size: 2em;
	}

	.space:hover {
		transform: scale(1.1);
		cursor: pointer;
	}

	.row:nth-child(even) .space:nth-child(even), .row:nth-child(odd) .space:nth-child(odd) {
		background-color: #7e7f82;
	}

	.row:nth-child(even) .space:nth-child(odd), .row:nth-child(odd) .space:nth-child(even) {
		background-color: #cccdce; 
	}
</style>