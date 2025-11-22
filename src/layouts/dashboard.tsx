import { Outlet } from "react-router";

export function DashboardLayout() {
  return (
    <section className="bg-gray-400 w-full h-full">
      <Outlet />
    </section>
  );
}
