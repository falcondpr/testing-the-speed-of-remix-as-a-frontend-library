import { Outlet } from "@remix-run/react";

export default function PokemonLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
