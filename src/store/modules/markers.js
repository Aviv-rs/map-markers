import { markerService } from '@/services/marker.service'
export default {
    state: {
        markers: [],
        currPos: {}
    },
    mutations: {
        setMarkers(state, { markers }) {
            state.markers = markers
        },

        setCurrPos(state, { pos }) {
            state.currPos = pos
        },
        saveMarker(state, { marker }) {
            state.markers = [...state.markers, marker]
        }
    },
    actions: {
        async loadMarkers(context) {
            const markers = await markerService.query()
            context.commit({ type: 'setMarkers', markers })
        },

        async saveMarker({ commit }, { marker }) {
            try {
                await markerService.save(marker)
                commit({ type: 'saveMarker', marker })
            } catch (error) {
                throw error
            }
        }
    },
    getters: {
        markers(state) { return state.markers },
        currPos(state) { return state.currPos }
    }
}