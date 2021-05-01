import {JsonDB} from "node-json-db";

// L3
import {CharacterGateway} from "../L3_InterfaceAdapters/Gateways/CharacterGateway";
import {StorageRepository} from "../../Shared/L3_InterfaceAdapters/Gateways/StorageRepository";
// L4
import {JsonStorageRepository} from "../../Shared/L4_Framework/Storage/JsonStorageRepository";
import {FavoriteCharactersStoreNotExists} from "../L3_InterfaceAdapters/Exceptions/FavoriteCharactersStoreNotExists";
import {FavoriteCharacterAlreadyExists} from "../L3_InterfaceAdapters/Exceptions/FavoriteCharacterAlreadyExists";


export class CharacterStorageImpl implements CharacterGateway {
  readonly #dbInstance: StorageRepository = JsonStorageRepository.getInstance("myDB");
  #jsonDBInstance = this.#dbInstance as JsonDB;
  readonly FAVORITE_CHARACTERS = '/favoriteCharacter';

  saveAsFavorite(id: number, name: string, birthYear: string): void {
    if (this.getFavoriteById(id)) {
      throw new FavoriteCharacterAlreadyExists(id);
    }

    this.#jsonDBInstance.push(
      this.FAVORITE_CHARACTERS,
      [{id, name, birthYear}],
      false
    )
  }

  getAllFavorite(): Array<object> {
    this.validateExistsFavoriteStorage();
    return this.#jsonDBInstance.getData(this.FAVORITE_CHARACTERS);
  }

  private validateExistsFavoriteStorage(): void {
      if (!this.existsFavoriteStorage()) {
        throw new FavoriteCharactersStoreNotExists();
      }
  }

  private existsFavoriteStorage(): boolean {
    return this.#jsonDBInstance.exists(this.FAVORITE_CHARACTERS);
  }

  public getFavoriteById(id: number): object | null {
    // this.validateExistsFavoriteStorage();
    const favoriteCharacterIndex = this.getFavoriteCharacterIndex(id);

    return this.#jsonDBInstance.getData(`${this.FAVORITE_CHARACTERS}[${favoriteCharacterIndex}]`);
  }

  private getFavoriteCharacterIndex(id: number): number {
    // this.validateExistsFavoriteStorage();

    return this.#jsonDBInstance.getIndex(this.FAVORITE_CHARACTERS, id);
  }

}