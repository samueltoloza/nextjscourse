import { Card, Navigator } from "components";
import { Routes } from "models";
import { getLocations } from "./services"

async function fetchLocations() {
  return await getLocations();
}

async function Locations() {
  const locations = await fetchLocations();
  return (
    <>
      <Navigator pathName={[Routes.HOME, Routes.CHARACTER]} />
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  );
}

export default Locations