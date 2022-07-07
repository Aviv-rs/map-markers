import { markerService } from '@/services/marker.service'
export default {
    state: {
        markers: markerService.query(),
        currPos: {}
    },
    mutations: {
        setMarkers(state, { markers }) {
            state.markers = markers
        },

        setCurrPos(state, { pos }) {
            state.currPos = pos
        }
    },
    actions: {
        async loadMarkers(context) {
            const markers = await markerService.query()
            context.commit({ type: 'setMarkers', markers })
        },
        async removeUser({ commit }, { userId }) {
            await userService.remove(userId)
            commit({ type: 'removeUser', userId })
        },
        async saveUser({ commit }, { user }) {
            try {
                await userService.save(user)
                commit({ type: 'saveUser', user })
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