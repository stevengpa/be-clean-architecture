import { CharacterName } from "./Characters/Entities/Character/ValueObjects/CharacterName";

try {
  let name: any = null;
  const character: CharacterName = new CharacterName(name);
} catch (err) {
  console.error(err);
}
