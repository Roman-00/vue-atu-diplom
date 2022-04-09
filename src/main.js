import { createApp } from 'vue';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';

import 'firebase/auth';

import '@/assets/styles/main.scss';

const config = {
    apiKey: 'AIzaSyBVQZ51IsPsY37ul8ac_yneBOm9uHI3yI0',
    authDomain: 'my-atu-edu-app.firebaseapp.com',
    projectId: 'my-atu-edu-app',
    storageBucket: 'my-atu-edu-app.appspot.com',
    messagingSenderId: '591094852406',
    appId: '1:591094852406:web:cca270a94307a94832a197',
    measurementId: 'G-7J2E8YNDRQ',
};

let app;

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(store).use(router).mount('#app');
    }
});
