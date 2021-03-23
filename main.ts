// # L1
import {CharacterFactory} from "./StarWarsApp/Character/L1_Entity/Factory/CharacterFactory";
import {CharacterRepository} from "./StarWarsApp/Character/L1_Entity/Repository/CharacterRepository";
// #L3
import {SearchAllCharacterController} from "./StarWarsApp/Character/L3_InterfaceAdapters/Controllers/SearchAllCharacter/SearchAllCharacterController";
// L4
import {CharacterRepositoryImpl} from "./StarWarsApp/Character/L4_Framework/CharacterRepositoryImpl";
import {CharacterFactoryImpl} from "./StarWarsApp/Character/L4_Framework/CharacterFactoryImpl";

async function main() {
  try {
    const characterRepository: CharacterRepository = new CharacterRepositoryImpl();
    const characterFactory: CharacterFactory = new CharacterFactoryImpl();

    const searchAllCharacter: SearchAllCharacterController =
        new SearchAllCharacterController(characterRepository, characterFactory)

    const response = await searchAllCharacter.searchAllCharacter(1);

    console.log('Characters');
    console.log(response.characters);
    console.log(`Count: ${response.count}`);

  } catch (err) {
    console.error(err.message);
  }
}

main();
