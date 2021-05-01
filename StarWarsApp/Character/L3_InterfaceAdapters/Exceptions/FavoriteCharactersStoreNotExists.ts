export class FavoriteCharactersStoreNotExists extends Error {
  constructor() {
    super("Favorite Character Store Does Not Exists");
    this.name = "[FavoriteCharactersStoreNotExists]";
  }
}