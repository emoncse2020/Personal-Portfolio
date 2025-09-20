import type { Route } from "./+types/details";
import type { Project } from "~/types";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

export async function clientLoader({
  request,
  params,
}: Route.ClientLoaderArgs): Promise<Project> {
  const res = await fetch(`http://localhost:8000/projects/${params.id}`);
  if (!res.ok) throw new Response("Project not found", { status: 404 });
  const project: Project = await res.json();
  return project;
}

export function HydrateFallBack() {
  return <div>Loading....</div>;
}

const ProjectDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const project = loaderData;
  console.log(project);

  return (
    <>
      <Link
        to={`/projects`}
        className="flex items-center text-blue-500 hover:text-blue-600 mb-6 transition"
      >
        <FaArrowLeft className="mr-2" /> Back To Projects
      </Link>
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <img
            src={project.image}
            alt={project.title}
            className="w-full shadow-md rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-300 text-sm mb-4">
            {new Date(project.date).toLocaleDateString()} • {project.category}
          </p>
          <p className="text-gray-200 mb-6">{project.description}</p>
          <a
            href={project.url}
            target="_blank"
            className="inline-block text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded transition"
          >
            View Live Site <FaArrowRight className="inline" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsPage;
