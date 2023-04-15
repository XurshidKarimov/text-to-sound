import { createApp } from 'vue'
import './assets/styles/main.css'
import App from './App.vue'
import { createPinia } from 'pinia';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
            fa
        }
    },
    components,
    directives,
})

const app = createApp(App);
const pinia = createPinia();

app.use(pinia).use(vuetify).mount('#app')