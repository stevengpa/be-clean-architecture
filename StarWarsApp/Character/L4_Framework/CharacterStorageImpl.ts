import {JsonDB} from "node-json-db";

// L3
import {CharacterGateway} from "../L3_InterfaceAdapters/Gateways/CharacterGateway";
import {StorageRepository} from "../../Shared/L3_InterfaceAdapters/Gateways/StorageRepository";
// L4
import {JsonStorageRepository} from "../../Shared/L4_Framework/Storage/JsonStorageRepository";


export class CharacterStorageImpl implements CharacterGateway {
  #dbInstance: StorageRepository = JsonStorageRepository.getInstance("myDB");

  saveAsFavorite(id: number, name: string, birthYear: string): void {
    (this.#dbInstance as JsonDB).push(
      "/favoriteCharacter",
      [{ id, name, birthYear }],
      false
      )
  }

}