import { createStore } from 'vuex'
import markers from './modules/markers.js'

// Create a new store instance.
const storeOptions = {
    strict: true,

    modules: {
        markers
    }
}
const store = createStore(storeOptions)
export default store