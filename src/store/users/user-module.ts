import { userService } from "../../services/user.service";

export const userStore = {
    state: async () => ({
        loggedInUser: await userService.getLoggedinUser()
    }),
    mutations: {
        logOut(state: any) {
            state.loggedInUser = null
        }
    },
    actions: {
        async logOut(state: any) {
            await userService.logout()
            state.commit('logOut')
        }
    },
    getters: {
        loggedInUser(state: any) {
            return state.loggedInUser
        }
    }
}