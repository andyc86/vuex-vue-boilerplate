import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        example: "This is some example text"
    },
    getters: {
        getExample(state) { return state.example }
    },
    mutations: {
        setExample(state, params) { state.example = params }
    },
    actions: {
        updateExample({commit}, params) {
            commit('setExample', params);
        }
    }
})