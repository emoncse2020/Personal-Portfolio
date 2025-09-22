import { form } from "framer-motion/client";
import type { Route } from "./+types/index";
import { Form } from "react-router";
import { error } from "console";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin | Contact Me" },
    { name: "description", content: "Personal Portfolio" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  const data = {
    name,
    email,
    subject,
    message,
  };

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Name is required";
  if (!email) {
    errors.email = "Email is required";
  } else if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    errors.email = "Invalid email format";
  }
  if (!subject) errors.subject = "Subject is required";
  if (!message) errors.message = "Message is required";

  if (Object.keys(errors).length > 0) {
    return { errors };
  }
  return { message: "Form submitted successfully", data };
}
const ContactPage = ({ actionData }: Route.ComponentProps) => {
  const errors = actionData?.errors || {};
  return (
    <div className="max-w-3xl mx-auto font-bold text-white mb-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      {actionData?.message ? (
        <p className="mb-6 bg-green-700 text-green-100 text-center rounded-lg border border-green-500 shadow-md px-3 py-2">
          {actionData.message}
        </p>
      ) : null}
      <Form method="POST" className="space-y-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-300"
          >
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-md text-gray-100"
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1 ">{errors.name}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-md text-gray-100"
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1 ">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm-font-medium text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-md text-gray-100"
          />
          {errors.subject && (
            <p className="text-red-400 text-sm mt-1 ">{errors.subject}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm-font-medium text-gray-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full mt-1 px-4 py-2 border border-gray-700 rounded-md text-gray-100"
          />
          {errors.message && (
            <p className="text-red-400 text-sm mt-1 ">{errors.message}</p>
          )}
        </div>
        <button className="w-full bg-blue-600 hover:bg-blue-800 cursor-pointer py-2 rounded-lg text-white">
          Send Message
        </button>
      </Form>
    </div>
  );
};

export default ContactPage;
