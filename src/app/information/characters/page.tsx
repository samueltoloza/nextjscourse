import { Card, Navigator } from "components";
import { Routes } from "models";
import { getCharacters } from "./services"

async function fetchCharacters() {
  return await getCharacters();
}

async function Characters() {
  const characters = await fetchCharacters();
  return (
    <>
      <Navigator pathName={[Routes.HOME, Routes.LOCATION]} />
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  );
}

export default Characters