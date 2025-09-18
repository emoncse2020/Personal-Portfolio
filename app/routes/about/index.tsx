import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin | Who I Am" },
    { name: "description", content: "Personal Portfolio" },
  ];
}

const AboutPage = () => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-2">Hey I'm Morsalin Ahmed </h1>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia esse
        quibusdam obcaecati assumenda eum, inventore doloremque iure quas
        dolorum ipsa, hic sequi culpa eos blanditiis, iusto beatae veniam. Sint,
        error.
      </div>
    </>
  );
};

export default AboutPage;
