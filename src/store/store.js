import Vue from 'vue';
import Vuex from 'vuex';
import Board from '../chess/board/board.js';
import GameFactory from '../chess/factory.js';

Vue.use(Vuex);

const game = GameFactory.makeGame();

export const store = new Vuex.Store({
  state: game,
  getters: {
  	
  }
});