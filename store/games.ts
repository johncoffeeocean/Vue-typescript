import { GetterTree, ActionTree, MutationTree } from 'vuex'
import {Game} from "~/types/game";

export const state = () => ({
  games: [] as string[],
  name: 'GamesStore',
})

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  games: state => state.games,
}

export const mutations: MutationTree<RootState> = {
  GET_GAMES: (state, games: []) => (state.games = games),
}

export const actions: ActionTree<RootState, RootState> = {
  async fetchGames({ commit }) {
    const games = await this.$axios.$get('applicant-test/')  // get games mock list
    setTimeout(function() {  // set 2 sec delay
      commit('GET_GAMES', games)
    }, 2000);
  },

}
