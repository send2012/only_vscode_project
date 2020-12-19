import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        // 存储 token
        Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : '',
    },

    mutations: {
        // 修改 token，并将 token 存入 localStorage
        changeLogin(state, user)
        {
            state.Authorization = user.Authorization;
            localStorage.setItem('Authorization', user.Authorization);
        }
    },

    actions: {
    },
    
    modules: {
    },
});

export default store;
