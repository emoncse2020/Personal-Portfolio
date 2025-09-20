import ProjectCard from "~/components/ProjectCard";
import type { Route } from "./+types/index";
import type { Project } from "~/types";
import { useState } from "react";
import { button } from "motion/react-client";
import Pagination from "~/components/Pagination";

import { AnimatePresence, motion } from "framer-motion";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin | Project" },
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

const ProjectsPage = ({ loaderData }: Route.ComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectPerPage = 10;
  const { projects } = loaderData as { projects: Project[] };
  // get unique categories
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];
  const filteredProject =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Calculate Total pages
  const totalPages = Math.ceil(filteredProject.length / projectPerPage);

  // GetCurrentPages
  const indexOfLast = currentPage * projectPerPage;
  const indexOfFirst = indexOfLast - projectPerPage;
  const currentProject = filteredProject.slice(indexOfFirst, indexOfLast);

  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Project</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setSelectedCategory(category);
              setCurrentPage(1);
            }}
            className={`px-3 py-1 rounded text-sm ${selectedCategory === category ? "bg-blue-600 text-white" : "bg-gray-700"}`}
          >
            {category}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div layout className="grid gap-6 sm:grid-cols-2">
          {currentProject.map((project) => (
            <motion.div key={project.id} layout>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProjectsPage;
