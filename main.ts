// # L1
import {CharacterFactory} from "./StarWarsApp/Character/L1_Entity/Factory/CharacterFactory";
import {CharacterRepository} from "./StarWarsApp/Character/L1_Entity/Repository/CharacterRepository";
// #L3
import {SearchAllCharacterController} from "./StarWarsApp/Character/L3_InterfaceAdapters/Controllers/SearchAllCharacter/SearchAllCharacterController";
// L4
import {CharacterRepositoryImpl} from "./StarWarsApp/Character/L4_Framework/CharacterRepositoryImpl";
import {CharacterFactoryImpl} from "./StarWarsApp/Character/L4_Framework/CharacterFactoryImpl";
import {SaveCharacterAsFavoriteController} from "./StarWarsApp/Character/L3_InterfaceAdapters/Controllers/SaveCharacterAsFavorite/SaveCharacterAsFavoriteController";
import {GetAllFavoriteCharactersController} from "./StarWarsApp/Character/L3_InterfaceAdapters/Controllers/GetAllFavoriteCharacters/GetAllFavoriteCharactersController";
import {GetAllFavoriteCharactersDTO} from "./StarWarsApp/Character/L3_InterfaceAdapters/Controllers/GetAllFavoriteCharacters/GetAllFavoriteCharactersDTO";

async function searchAllCharacter() {
  try {
    const characterRepository: CharacterRepository = new CharacterRepositoryImpl();
    const characterFactory: CharacterFactory = new CharacterFactoryImpl();

    const searchAllCharacter: SearchAllCharacterController =
        new SearchAllCharacterController(characterRepository, characterFactory)

    const response = await searchAllCharacter.searchAllCharacter(1);

    console.log('Search All Characters');
    console.log(response.characters);
    console.log(`Count: ${response.count}`);

  } catch (err) {
    console.error(err.message);
  }
}

// searchAllCharacter();

async function saveCharacterAsFavorite() {
  try {
    const characterRepository: CharacterRepository = new CharacterRepositoryImpl();
    const characterFactory: CharacterFactory = new CharacterFactoryImpl();

    const saveCharacterAsFavorite: SaveCharacterAsFavoriteController =
      new SaveCharacterAsFavoriteController(characterRepository, characterFactory)

    await saveCharacterAsFavorite.saveCharacterAsFavorite(1, "Batman", '1980');
    await saveCharacterAsFavorite.saveCharacterAsFavorite(2, "Robin", '1990');

    console.log('Creating Batman and Robin Characters');
  } catch (err) {
    console.error(err.message);
  }
}

saveCharacterAsFavorite();


async function getAllFavoriteCharacters() {
  try {
    const characterRepository: CharacterRepository = new CharacterRepositoryImpl();
    const characterFactory: CharacterFactory = new CharacterFactoryImpl();

    const favoriteCharacterController: GetAllFavoriteCharactersController =
      new GetAllFavoriteCharactersController(characterRepository, characterFactory)

    const favoriteCharacter: GetAllFavoriteCharactersDTO = await favoriteCharacterController.getAllFavoriteCharacters()

    console.log('Favorite Characters');
    console.log(favoriteCharacter.characters);

  } catch (err) {
    console.error(err.message);
  }
}

// getAllFavoriteCharacters();

// saveCharacterAsFavorite()
//   .then(() => getAllFavoriteCharacters())
//   .catch((err: Error) => err.message);
