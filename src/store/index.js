import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    buttonlgn: true,
    tracks: null,
    user: null,
  },
  mutations: {
    changeButton(state) {
      state.buttonlgn = !state.buttonlgn
    },
    setTracks(state, payload) {
      state.tracks = payload
    },
    setUser(state, payload) {
      state.user = payload
    }
  },
  getters: {
    btnlgn: state => {
      return state.buttonlgn;
    },
    getTracks: state => {
      return state.tracks
    },
    getUser: state => {
      return state.user
    }
  }
})
