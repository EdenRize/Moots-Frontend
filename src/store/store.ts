import { createStore } from 'vuex'
import { userStore } from './users/user-module'

// Create a new store instance.
export const store = createStore({
    modules: {
        userStore: userStore
    }
})

