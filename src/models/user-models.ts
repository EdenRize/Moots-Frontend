import { Pet } from "./pet-models"

export interface User {
    _id: string
    username: string
    pets?: Pet[]
    avatar?: string
}