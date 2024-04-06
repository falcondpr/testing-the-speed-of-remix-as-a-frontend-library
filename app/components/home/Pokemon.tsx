import { Link } from "@remix-run/react";
import { getImage } from "~/helpers/getImage";

interface PokemonProps {
  pokemon: {
    name: string;
    url: string;
  };
}

export default function Pokemon({ pokemon }: PokemonProps) {
  const urlSegments = pokemon.url.split("/");
  const pokemonId = urlSegments[urlSegments.length - 2];
  const imagePokemon = getImage(pokemonId);

  return (
    <Link to={`/pokemon/${pokemon.name}`}>
      <h3>{pokemon?.name}</h3>
      <img src={imagePokemon} alt="" />
    </Link>
  );
}
