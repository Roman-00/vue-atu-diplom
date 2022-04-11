import axios from 'axios';

export default {
    state: {
        preview: [],
    },
    mutations: {
        /**
         * Записываем полученные данные в state
         */
        setPreviewToState(state, response) {
            state.preview = response;
        },
    },
    actions: {
        /**
         * Получаем данные для перьюшной модалки
         */
        getPreview({ commit }) {
            return axios('https://atu-edu-default-rtdb.firebaseio.com/previewmodal.json')
                .then((response) => {
                    if (response.status === 200) {
                        commit('setPreviewToState', response.data);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    getters: {
        previews(state) {
            return state.preview;
        },
    },
};
