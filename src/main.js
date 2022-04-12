import { createApp } from 'vue';
import firebase from 'firebase/app';
import App from './App.vue';
import router from './router';
import store from './store';

import 'firebase/auth';

import '@/assets/styles/main.scss';

const config = {
    apiKey: 'AIzaSyApXDk6PHKj-56Bm3sVxb8yIvnrlzsso3A',
    authDomain: 'atu-edu.firebaseapp.com',
    databaseURL: 'https://atu-edu-default-rtdb.firebaseio.com',
    projectId: 'atu-edu',
    storageBucket: 'atu-edu.appspot.com',
    messagingSenderId: '33782984728',
    appId: '1:33782984728:web:35e8499e08d755ebb3d36d',
    measurementId: 'G-PQJQG3JPC6',
};

let app;

firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = createApp(App).use(store).use(router).mount('#app');
    }
});
