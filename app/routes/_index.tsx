import type { MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Pokemon from "~/components/home/Pokemon";

import axios from "~/config/axios";
import { IPokemonResponse } from "~/interfaces/pokemon";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = async () => {
  const response = await axios.get("/pokemon");
  const data = await response.data;
  return data;
};

export default function Index() {
  const data = useLoaderData<IPokemonResponse>();

  return (
    <div className="p-5 max-w-md mx-auto">
      <h1 className="font-bold mb-5 text-4xl text-gray-700">
        Pokedex
      </h1>

      <Link to="/about">go about page</Link>

      <div className="flex flex-col space-y-5">
        {data.results.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.name} />
        ))}
      </div>
    </div>
  );
}
