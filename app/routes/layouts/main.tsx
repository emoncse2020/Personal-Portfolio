import { Outlet } from "react-router";
const MainLayout = () => {
  return (
    <main className="bg-gray-900">
      <section className="max-w-6xl mx-auto px-6 py-6">
        <Outlet></Outlet>
      </section>
    </main>
  );
};

export default MainLayout;
