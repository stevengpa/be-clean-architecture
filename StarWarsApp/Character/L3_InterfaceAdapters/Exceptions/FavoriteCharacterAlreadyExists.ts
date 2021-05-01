export class FavoriteCharacterAlreadyExists extends Error {
  constructor(id?: number) {
    super(`Favorite Character ID ${id}`);
    this.name = "[FavoriteCharacterAlreadyExists]";
  }
}