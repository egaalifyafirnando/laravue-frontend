import { createApp } from 'vue';
import App from './App.vue';

// import vue router
import router from './router';

// import bootstrap, popper.js, and jquery
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';

const app = createApp(App);

// use vue router
app.use(router);

app.mount('#app');
