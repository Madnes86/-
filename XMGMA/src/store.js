// store.js (или store/index.js)
import { createStore } from 'vuex';

const store = createStore({
  state: {
    isEditing: false,
  },
  mutations: {
    toggleEditMode(state) {
      state.isEditing = !state.isEditing;
    },
  },
  actions: {
    toggleEditMode({ commit }) {
      commit('toggleEditMode');
    },
  },
  getters: {
    isEditing: (state) => state.isEditing,
  },
});

export default store;