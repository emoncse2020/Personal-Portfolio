import FeaturedProject from "~/components/FeaturedProject";
import type { Route } from "./+types/index";
import type { Project } from "~/types";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin Portfolio | Welcome" },
    { name: "description", content: "Personal Portfolio" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[] }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
  const data = await res.json();

  return { projects: data };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects } = loaderData;
  console.log(projects);
  return (
    <>
      <section>
        <FeaturedProject projects={projects} count={2} />
      </section>
    </>
  );
};

export default HomePage;
