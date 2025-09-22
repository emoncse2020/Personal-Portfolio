import type { Route } from "./+types/index";
import type { PostMeta } from "~/types";

import PostCard from "~/components/PostCard";
import { useState } from "react";
import Pagination from "~/components/Pagination";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin | Blogs" },
    { name: "description", content: "Personal Portfolio" },
  ];
}

export async function loader({
  request,
}: Route.LoaderArgs): Promise<{ posts: PostMeta[] }> {
  const url = new URL("/posts-meta.json", request.url);
  const res = await fetch(url.href);
  if (!res.ok) throw new Error("Failed to fetch Data");
  const data = await res.json();
  data.sort((a: PostMeta, b: PostMeta) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return { posts: data };
}

const BlogPage = ({ loaderData }: Route.ComponentProps) => {
  const { posts } = loaderData;
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 4;
  const totalPage = Math.ceil(posts.length / postPerPage);

  const indexOfLast = currentPage * postPerPage;
  const indexOfFirst = indexOfLast - postPerPage;
  const currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4 py-4">
      <h2 className="text-3xl font-bold mb-8">Blog page</h2>
      {currentPosts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
      {totalPage > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPage}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
};

export default BlogPage;
