import type { Route } from "./+types/index";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin | Blogs" },
    { name: "description", content: "Personal Portfolio" },
  ];
}

const BlogPage = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Blog page</h2>
    </>
  );
};

export default BlogPage;
