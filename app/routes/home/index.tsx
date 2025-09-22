import FeaturedProject from "~/components/FeaturedProject";
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import type { PostMeta } from "~/types";
import AboutPreview from "~/components/AboutPreview";
import LatestPost from "~/components/LatestPost";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin Portfolio | Welcome" },
    { name: "description", content: "Personal Portfolio" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ projects: Project[]; posts: PostMeta[] }> {
  const url = new URL(request.url);
  const [projectRes, postRes] = await Promise.all([
    fetch(`${import.meta.env.VITE_API_URL}/projects`),
    fetch(new URL("/posts-meta.json", url)),
  ]);

  if (!projectRes.ok || !postRes.ok) {
    throw new Error("Failed to fetch projects of posts");
  }

  const [projects, posts] = await Promise.all([
    projectRes.json(),
    postRes.json(),
  ]);

  return { projects, posts };
}

const HomePage = ({ loaderData }: Route.ComponentProps) => {
  const { projects, posts } = loaderData;
  console.log(projects);
  return (
    <>
      <section>
        <FeaturedProject projects={projects} count={2} />
        <AboutPreview />
        <LatestPost posts={posts} />
      </section>
    </>
  );
};

export default HomePage;
