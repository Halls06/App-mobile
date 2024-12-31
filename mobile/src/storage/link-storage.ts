import AsyncStorage from "@react-native-async-storage/async-storage";

const LINKS_STORAGE_KEY = "mobile-storage"

export type Linkstorage = {
    id: string
    url: string
    name: string
    category: string
}

async function get(): Promise<Linkstorage[]> {
    const Storage = await AsyncStorage.getItem(LINKS_STORAGE_KEY)
    const response = Storage ? JSON.parse(Storage) : []

    return response
    
}

async function save(newLink: LinkStorage) {
    try {
        const storage = await get()
        const updated = JSON.stringify([...storage, newLink])

        await AsyncStorage.setItem( LINKS_STORAGE_KEY, updated)
        
    } catch (error) {
        throw error
        
    }   
}

export const  linkStorage = {get, save}