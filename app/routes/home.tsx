import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin Portfolio" },
    { name: "description", content: "Personal Portfolio" },
  ];
}

export default function Home() {
  return <> Portfolio</>;
}
