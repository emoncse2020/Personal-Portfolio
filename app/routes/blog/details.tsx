import ReactMarkdown from "react-markdown";
import type { Route } from "./+types/details";
import type { PostMeta } from "~/types";
import { Link } from "react-router";

export async function loader({ request, params }: Route.LoaderArgs) {
  const { slug } = params;
  const url = new URL(`/posts-meta.json`, request.url);
  const res = await fetch(url.href);
  if (!res.ok) throw new Error("Failed to fetch data");

  const index = await res.json();
  const postMeta = index.find((post: PostMeta) => post.slug === slug);
  if (!postMeta) throw new Response("Not Found", { status: 404 });

  // Dynamiccay import raw markdown
  const markdown = await import(`../../posts/${slug}.md?raw`);
  console.log(slug);
  return {
    postMeta,
    markdown: markdown.default,
  };
}

const BlogDetailsPage = ({ loaderData }: Route.ComponentProps) => {
  const { postMeta, markdown } = loaderData;
  console.log(postMeta, markdown);
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold text-blue-400 mb-2">
        {postMeta.title}
      </h1>
      <p className="text-sm text-gray-400 mb-6">
        {new Date(postMeta.date).toDateString()}
      </p>
      <div className="prose prose-invert max-w-none mb-12 text-blue-200">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
      <Link to={"/blog"}>Back to Blog</Link>
    </div>
  );
};

export default BlogDetailsPage;
