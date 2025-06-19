export type videoGame = {
    readonly title: string;
    platforms: string[]; // es: ['PC', 'PS5', 'Xbox']
    developer: string;
    readonly releaseYear: number;
    userRating: number; // from 0 to 10
    multiplayer: boolean;
    price: number; // in euros (or any currency)
    averagePlaytime: number; // in hours
    languages: string[]; // es: ['EN', 'IT', 'FR']
    pegi: number; // es: 3, 7, 12, 16, 18
    difficulty: 'Easy' | 'Medium' | 'Hard';
    gameModes: string[]; // e.g., ['Campaign', 'Online', 'Co-op']
    category: string; // es: 'Action', 'RPG', 'Strategy'
};