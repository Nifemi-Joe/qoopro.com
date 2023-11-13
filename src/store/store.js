import Vue from "vue";
import Vuex from "vuex";

import modules from "./modules"
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
    modules,
    state: {
        showMessage: false,
        message: {
            action: "",
            type: "",
            title: "",
            body: "",
        },
    },

    getters: {
        getToken: () => {
            return localStorage.token;
        },
        showMessage: state => state.showMessage,
    },
    mutations: {
        updateMessage: (state, payload) => {
            state.message = payload;
            state.showMessage = !state.showMessage
        },
        updateShowMessage: (state) => {
            state.showMessage = !state.showMessage;
            console.log(">>>>>>>>>>>Toggled2",state.showMessage);
        },
    },
    actions: {
    },
    strict: process.env.NODE_ENV !== "production",
    plugins: [createPersistedState()]
});

export default store;
