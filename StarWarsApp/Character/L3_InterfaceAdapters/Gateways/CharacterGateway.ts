export interface CharacterGateway {
  saveAsFavorite(id: number, name: string, birthYear: string): void
  getAllFavorite(): Array<object>
  getFavoriteById(id: number): object | null
}