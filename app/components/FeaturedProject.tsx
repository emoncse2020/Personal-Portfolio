import type { Project } from "~/types";
import ProjectCard from "./ProjectCard";

type FeaturedProjectsProps = {
  projects: Project[];
  count: number;
};

const FeaturedProject = ({ projects, count = 4 }: FeaturedProjectsProps) => {
  const featured = projects.filter((p) => p.featured).slice(0, count);
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6 text-gray-200">Featured</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProject;
