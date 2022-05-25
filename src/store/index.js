import { createStore } from 'vuex';

import post from './post';
import schedule from './schedule';
import user from './user';

export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        post,
        schedule,
        user,
    },
});
