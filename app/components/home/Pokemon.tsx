import axios from "~/config/axios";
import { getImage } from "~/helpers/getImage";

interface PokemonProps {
  pokemon: {
    name: string;
    url: string;
  };
}

export const loader = async (name: string) => {
  const response = await axios.get(`/pokemon/${name}`);
  const data = response.data;
  return data;
};

export default function Pokemon({ pokemon }: PokemonProps) {
  const urlSegments = pokemon.url.split("/");
  const pokemonId = urlSegments[urlSegments.length - 2];
  const imagePokemon = getImage(pokemonId);

  return (
    <div>
      <h3>{pokemon?.name}</h3>
      <img src={imagePokemon} alt="" />
    </div>
  );
}
