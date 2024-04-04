import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

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
  const data = response.data;
  return data;
};

export default function Index() {
  const data = useLoaderData<IPokemonResponse>();

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">Pokedex</h1>

      <div className="flex flex-col space-y-5">
        {data.results.map((pokemon) => (
          <div key={pokemon.name}>
            <p>{pokemon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
