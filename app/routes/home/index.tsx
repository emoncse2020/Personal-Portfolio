import type { Route } from "./+types/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin Portfolio | Welcome" },
    { name: "description", content: "Personal Portfolio" },
  ];
}

export default function Home() {
  return <>HomePage</>;
}
