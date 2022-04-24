import axios from 'axios';

const url = 'https://atu.edu.kz/wp-json/wp/v2/posts';
const query = 'per_page=5';

export default {
    state: {
        posts: [],
        post: {},
    },
    mutations: {
        setPostsToState: (state, responce) => {
            state.posts = responce;
        },
        setPostToState: (state, responce) => {
            state.post = responce;
        },
    },
    actions: {
        getPosts({ commit }) {
            return axios.get(`${url}?${query}`, {
                method: 'GET',
            })
                .then((responce) => {
                    if (responce.status === 200) {
                        commit('setPostsToState', responce.data);
                    } else {
                        throw new Error(`Could not fetch ${url}, status: ${responce.status}`);
                    }
                })
                .catch((error) => {
                    throw new Error(`Server Not a Found: ${error}`);
                });
        },
        /**
         * Получаем данные одного поста
         *
         * @param {number} id
         */
        getPost({ commit }, id) {
            return axios.get(`${url}/${id}`, {
                method: 'GET',
            })
                .then((responce) => {
                    if (responce.status === 200) {
                        commit('setPostToState', responce.data);
                    } else {
                        throw new Error(`Could not fetch ${url}, status: ${responce.status}`);
                    }
                })
                .catch((error) => {
                    throw new Error(`Server Not a Found: ${error}`);
                });
        },
    },
    getters: {
        allPosts(state) {
            return state.posts;
        },
        postInfo(state) {
            return state.post;
        },
    },
};
