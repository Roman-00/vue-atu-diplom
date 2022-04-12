import { createStore } from 'vuex';
import auth from './auth';
import preview from './preview';
import news from './news';

export default createStore({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth,
        preview,
        news,
    },
});
