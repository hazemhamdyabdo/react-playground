import { Outlet } from "react-router";

export function AuthLayoute() {
  return (
    <section className="bg-amber-200 w-full h-full">
      <Outlet />
    </section>
  );
}
