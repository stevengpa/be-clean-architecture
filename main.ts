import {SearchAllCharacterController} from "./StarWarsApp/Character/L3_Controller/SearchAllCharacterController";
import {CharacterRepository} from "./StarWarsApp/Character/L1_Entity/Repository/CharacterRepository";
import {CharacterRepositoryImpl} from "./StarWarsApp/Character/L4_Framework/CharacterRepositoryImpl";

try {
  const characterRepository: CharacterRepository = new CharacterRepositoryImpl();
  const searchAllCharacter: SearchAllCharacterController = new SearchAllCharacterController(characterRepository)

  searchAllCharacter.searchAllCharacter().then(result => console.log(result));
} catch (err) {
  console.error(err.message);
}
