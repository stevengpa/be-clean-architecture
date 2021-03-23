export interface SaveCharacterAsFavoriteRepository {
  saveCharacterAsFavorite(id: number, name: string, birthYear: string): void
}
