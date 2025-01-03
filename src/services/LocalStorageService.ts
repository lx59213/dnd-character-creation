import { Character } from '../types/character';

const CHARACTER_KEY = 'dnd_character_draft';

export class LocalStorageService {
    private static instance: LocalStorageService;

    private constructor() {}

    public static getInstance(): LocalStorageService {
        if (!LocalStorageService.instance) {
            LocalStorageService.instance = new LocalStorageService();
        }
        return LocalStorageService.instance;
    }

    public saveCharacter(character: Character): void {
        try {
            localStorage.setItem(CHARACTER_KEY, JSON.stringify(character));
        } catch (error) {
            console.error('Failed to save character to localStorage:', error);
        }
    }

    public loadCharacter(): Character | null {
        try {
            const savedCharacter = localStorage.getItem(CHARACTER_KEY);
            return savedCharacter ? JSON.parse(savedCharacter) : null;
        } catch (error) {
            console.error('Failed to load character from localStorage:', error);
            return null;
        }
    }

    public clearCharacter(): void {
        try {
            localStorage.removeItem(CHARACTER_KEY);
        } catch (error) {
            console.error('Failed to clear character from localStorage:', error);
        }
    }
}

export default LocalStorageService;
