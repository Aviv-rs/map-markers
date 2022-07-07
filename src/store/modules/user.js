import { userService } from '@/services/user.service.js'
export default {
    state: {
        user: null
    },
    mutations: {
        setUser(state, { user }) {
            state.user = user
        },

    },
    actions: {
        async loadUser({ commit }, { userName }) {
            const user = await userService.getUser(userName)
            commit({ type: 'setUser', user })
        },
        async updateUser({ commit }, { newUser }) {
            try {
                const userToUpdate = await userService.updateUser(newUser.id, newUser)
                commit({ type: 'setUser', userToUpdate })
            } catch (err) {
                throw err
            }
        }
    },
    getters: {
        user(state) { return state.user }
    }
}
