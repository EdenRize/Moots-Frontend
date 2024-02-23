import { userService } from "../../services/user.service";
import { UserCredentials } from '../../models/user-models'

export const userStore = {
    state: () => ({
        loggedInUser: userService.getLoggedinUser()
    }),
    mutations: {
        login(state: any, user: UserCredentials) {
            state.loggedInUser = user;
        },
        logOut(state: any) {
            state.loggedInUser = null
        }
    },
    actions: {
        async signup(state: any, credentials: UserCredentials) {
            try {
                const user = await userService.signup(credentials);
                state.commit('login', user);
            } catch (err) {
                console.log('err', err)
            }
        },
        async login(state: any, credentials: UserCredentials) {
            try {
                const user = await userService.login(credentials);
                state.commit('login', user);
            } catch (err) {
                console.log('err', err)
            }
        },
        async logOut(state: any) {
            try {
                await userService.logout()
                state.commit('logOut')
            } catch (err) {
                console.log('err', err)
            }
        }
    },
    getters: {
        loggedInUser(state: any) {
            return state.loggedInUser
        }
    }
}