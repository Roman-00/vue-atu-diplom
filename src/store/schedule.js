import axios from 'axios';

export default {
    state: {
        lessons: [],
    },
    mutations: {
        setLessonsToState: (state, responce) => {
            state.lessons = responce;
        },
    },
    actions: {
        getLessons({ commit }) {
            return axios.get('https://my-atu-edu-app-default-rtdb.firebaseio.com/lessons.json', {
                method: 'GET',
            })
                .then((responce) => {
                    commit('setLessonsToState', responce.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    getters: {
        allLessons(state) {
            return state.lessons;
        },
    },
};
