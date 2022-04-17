import firebase from 'firebase/app';

export default {
    state: {},
    mutations: {},
    actions: {
        // eslint-disable-next-line no-unused-vars
        async login({ dispatch, commit }, { email, password }) {
            try {
                await firebase.auth().signInWithEmailAndPassword(
                    email.value, password.value,
                );
            } catch (e) {
                console.log(e);
            }
        },
        // eslint-disable-next-line no-unused-vars
        async signup({ dispatch }, { name, email, password }) {
            try {
                await firebase.auth().createUserWithEmailAndPassword(
                    email.value, password.value,
                );

                const uid = await dispatch('getUid');
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name,
                });
            } catch (e) {
                console.log(e);
            }
        },
        getUid() {
            const user = firebase.auth().currentUser;

            return user ? user.uid : null;
        },
    },
};
