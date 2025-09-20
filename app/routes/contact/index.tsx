import type { Route } from "./+types/index";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin | Contact Me" },
    { name: "description", content: "Personal Portfolio" },
  ];
}

const ContactPage = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
    </>
  );
};

export default ContactPage;
