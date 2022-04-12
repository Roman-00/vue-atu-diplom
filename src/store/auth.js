import firebase from 'firebase/app';

export default {
    state: {
    },
    mutations: {
    },
    actions: {
        // eslint-disable-next-line no-unused-vars
        async login({ dispathm, commit }, { email, password }) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
            } catch (e) {
                console.log(e);
            }
        },
    },
};
