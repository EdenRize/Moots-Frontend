import { User, UserCredentials } from '../models/user-models'
import { httpService } from './http.service'

// const STORAGE_KEY = 'userDB'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
const USER_BASE_URL = 'user/'
const AUTH_BASE_URL = 'auth/'

export const userService = {
    login,
    logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    remove,
    save,
    getEmptyUser
}

// window.userService = userService


async function getUsers() {
    try {
        return httpService.get(USER_BASE_URL)
    } catch (err: any) {
        throw new Error(err.message || 'An error occurred during getting users')
    }
}

async function getById(userId: string) {
    try {
        const user = await httpService.get(USER_BASE_URL + userId)
        return user
    } catch (err: any) {
        throw new Error(err.message || 'An err occurred during getting user')
    }
}

async function remove(userId: string) {
    try {
        return await httpService.delete(USER_BASE_URL + userId)
    } catch (err: any) {
        throw new Error(err.message || 'An err occurred during removing user')
    }
}

async function save(user: User | UserCredentials) {
    try {
        if ('_id' in user) {
            const updatedUser: User = await httpService.put(USER_BASE_URL + user._id, user)
            saveLocalUser(updatedUser)
            return updatedUser
        } else {
            return await signup(user)
        }
    } catch (err: any) {
        throw new Error(err.message || 'An err occurred during saving user')
    }


    // When admin updates other user's details, do not update loggedinUser
    // if (getLoggedinUser()._id === user._id) saveLocalUser(user)
}

// auth 

async function login(userCred: UserCredentials) {
    try {
        const user: User = await httpService.post(AUTH_BASE_URL + 'login', userCred)
        if (user) return saveLocalUser(user)
    } catch (err: any) {
        throw new Error(err.message || 'An err occurred during login')
    }
    // const users = await storageService.query('user')
    // const user = users.find(user => user.username === userCred.username)

}

async function signup(userCred: UserCredentials) {
    try {
        const user: User = await httpService.post(AUTH_BASE_URL + 'signup', userCred)
        return saveLocalUser(user)
    } catch (err: any) {
        throw new Error(err.message || 'An err occurred during signup')
    }
    // if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    // const user = await storageService.post('user', userCred)

}

async function logout() {
    try {
        sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
        return await httpService.post('auth/logout')
    } catch (err: any) {
        throw new Error(err.message || 'An err occurred during logout')
    }
}

function getEmptyUser() {
    return {
        username: '',
        password: ''
    }
}

// session storage

function saveLocalUser(user: User) {
    user = { _id: user._id, username: user.username, avatar: user.avatar }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    const storedUser = sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER)
    if (storedUser !== null) {
        return JSON.parse(storedUser)
    } else {
        // Handle the case where the user is not logged in or data is not available
        return null // or handle differently as per your requirement
    }
}
