import { User } from "./user-models"

export interface Pet {
  _id: string
  createdAt: number
  ownerId: string
  name: string
  type: string
  age?: number
  description?: string
  imgs?: string[]
  race?: string
}

export interface PetCredentials {
  name: string
  type: string
  age?: number
  description?: string
  imgs?: string[]
  race?: string
}

export interface SelectedPet {
  owner: User
  pet: Pet
}
