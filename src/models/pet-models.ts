import { User } from "./user-models"

export interface Pet {
  _id: string
  ownerId: string
  name?: string
  age?: string
  description?: string
  imgs?: string[]
  type: string
  race?: string
}

export interface SelectedPet {
  owner: User
  pet: Pet
}
