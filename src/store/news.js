import axios from 'axios';

export default {
    state: {
        newsList: [],
    },
    mutations: {
        /**
         * Записываем полученные данные в state
         */
        setNewsToState(state, response) {
            state.newsList = response;
        },
    },
    actions: {
        /**
         * Получаем данные Новостей
         */
        getNews({ commit }) {
            return axios('https://atu-edu-default-rtdb.firebaseio.com/news.json')
                .then((response) => {
                    if (response.status === 200) {
                        commit('setNewsToState', response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    getters: {
        news(state) {
            return state.newsList;
        },
    },
};
