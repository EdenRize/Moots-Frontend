
import { Pet, PetCredentials, PetFilter } from '../models/pet-models.js'
import { httpService } from './http.service.js'

const BASE_URL = 'pet/'

export const petService = {
    query,
    getById,
    save,
    remove,
    getDefaultFilter,
    getDefaultPet,
}
// window.petService = petService

async function query(filterBy: { [key: string]: any } = {}) {
    try {
        return await httpService.get(BASE_URL, filterBy)
    } catch (err: any) {
        throw new Error(err.message || 'An err occurred during getting pets')
    }
}

async function getById(petId: string) {
    try {
        const returnedPet = await httpService.get(BASE_URL + petId)
        return returnedPet
    } catch (err: any) {
        throw new Error(err.message || 'An err occurred during getting pet')
    }
}

async function remove(petId: string) {
    try {
        return await httpService.delete(BASE_URL + petId)
    } catch (err: any) {
        throw new Error(err.message || 'An err occurred during removing pet')
    }
}

async function save(pet: Pet | PetCredentials) {
    try {
        if ('_id' in pet) {
            return await httpService.put(BASE_URL, pet)
        } else {
            return await httpService.post(BASE_URL, pet)
        }
    } catch (err: any) {
        throw new Error(err.message || 'An err occurred during saving pet')
    }
}

function getDefaultFilter(): PetFilter {
    return { txt: '' }
}

//privet functions

function getDefaultPet() {
    return {
        name: '',
        description: '',
        type: 'dog',
    }
}