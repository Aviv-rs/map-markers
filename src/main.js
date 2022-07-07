import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { GOOGLE_API_KEY } from './keys'

const app = createApp(App)

app.use(router)
app.use(VueGoogleMaps, {
    load: {
        key: GOOGLE_API_KEY
    }
})


app.mount('#app')
