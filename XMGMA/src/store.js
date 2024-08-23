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
    toggleDeleteMode(state) {
      state.isDeleting = !state.isDeleting;
    }
  },
  actions: {
    toggleEditMode({ commit }) {
      commit('toggleEditMode');
    },
    toggleDeleteMode({ commit }) {
      commit('toggleDeleteMode');
    }
  },
  getters: {
    isEditing: (state) => state.isEditing,
    isDeleting: (state) => state.isDeleting,
  },
});

export default store;