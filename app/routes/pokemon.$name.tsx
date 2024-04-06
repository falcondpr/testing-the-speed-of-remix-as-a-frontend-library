import { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { HiArrowLeft } from "react-icons/hi2";

import axios from "~/config/axios";
import { IPokemon } from "~/interfaces/pokemon";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const response = await axios.get(`/pokemon/${params.name}`);
  const data = await response.data;
  return data;
};

export default function Pokemon() {
  const navigate = useNavigate();
  const pokemon = useLoaderData<IPokemon>();

  return (
    <div>
      <header className="flex justify-between items-center p-5">
        <button onClick={() => navigate(-1)} className="p-3">
          <HiArrowLeft className="text-2xl text-gray-600" />
        </button>

        <h3 className="flex-1 text-center text-2xl font-bold capitalize text-gray-700">
          {pokemon.name}
        </h3>

        <div className="w-12 h-full" />
      </header>
    </div>
  );
}
