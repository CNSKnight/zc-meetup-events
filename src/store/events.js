import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const apiBase = process.env.VUE_APP_EVENTS_APIBASE;

const state = {
  selected: undefined,
  events: []
};

const getters = {
  selectedId: state => state.selectedId,
  events: state => state.events
};

const actions = {
  // used only w/in listing context to load all
  async loadEvents({ commit, dispatch }) {
    const uri = apiBase + '&page=10';
    jsonp(uri, null, (error, { data: resp, meta }) => {
      if (error) {
        dispatch('handleError', {
          service: 'fetch:events',
          severity: 'error',
          error: `Error ${error}`
        });
      } else if (resp.errors) {
        error = resp.errors[0];
        dispatch('handleError', {
          service: 'fetch:events',
          severity: 'error',
          error: `Error ${meta.status || ''} ${error.code} :: ${error.message}`
        });
      } else {
        resp && commit('setCollection', resp);
      }
    });
  },
  selectEvent({ commit }, event) {
    commit('setSelected', { ...event });
  }
};

const mutations = {
  setCollection(state, payload) {
    state.events = payload;
  },
  setSelected(state, payload) {
    state.selected = payload;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
