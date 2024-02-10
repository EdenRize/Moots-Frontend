import { Pet } from "./pet-models"

export interface User {
    _id: string
    username: string
    pets?: Pet[]
    avatar?: string
}

export interface UserCredentials {
    username: string
    password: string
    avatar?: string
}