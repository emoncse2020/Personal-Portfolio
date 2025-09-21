import type { Route } from "./+types/index";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Morsalin | About Me" },
    { name: "description", content: "Premium Portfolio - About Morsalin" },
  ];
}

const AboutPage = () => {
  const myJourney = [
    {
      year: "2025",
      title: "Frontend Developer (Freelance)",
      desc: "Delivering modern, responsive web apps for clients using React & Tailwind.",
    },

    {
      year: "2020 - Present",
      title: "CSE Student",
      desc: "Studying Computer Science & Engineering with a passion for web development.",
    },
  ];
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black min-h-screen text-gray-100">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-12 px-6 py-24 max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-3xl"></div>
          <img
            src="/images/morsalin.png"
            alt="Morsalin"
            className="relative w-56 h-56 rounded-full object-cover shadow-2xl border-4 border-blue-500 hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl font-extrabold mb-4">
            Hey, I’m{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Morsalin
            </span>{" "}
            👋
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            A{" "}
            <span className="text-blue-400 font-semibold">
              Frontend Developer
            </span>
            passionate about building seamless digital experiences with React,
            Tailwind, and modern web tools. My focus is on clean code, polished
            UI/UX, and scalable solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl font-medium shadow-lg hover:opacity-90 transition"
            >
              📄 Download Resume
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-xl font-medium shadow-lg hover:bg-gray-700 transition"
            >
              ✉️ Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid sm:grid-cols-3 gap-6 text-center max-w-5xl mx-auto px-6 mb-24">
        {[
          { number: "2+", label: "Years of Experience" },
          { number: "10+", label: "Completed Projects" },
          { number: "∞", label: "Learning & Growing" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-6 bg-gray-800/60 rounded-2xl shadow-lg backdrop-blur hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-4xl font-extrabold text-blue-400 mb-2">
              {stat.number}
            </h3>
            <p className="text-gray-300">{stat.label}</p>
          </div>
        ))}
      </section>

      {/* Skills Grid */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Skills & Tools</h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-10 text-center">
          <Skill icon={<FaHtml5 className="text-orange-500" />} name="HTML" />
          <Skill icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
          <Skill
            icon={<SiJavascript className="text-yellow-400" />}
            name="JavaScript"
          />
          <Skill
            icon={<SiTypescript className="text-blue-600" />}
            name="TypeScript"
          />
          <Skill icon={<FaReact className="text-cyan-400" />} name="React" />
          <Skill
            icon={<SiTailwindcss className="text-teal-400" />}
            name="Tailwind"
          />
          <Skill
            icon={<FaNodeJs className="text-green-600" />}
            name="Node.js"
          />
          <Skill
            icon={<SiMongodb className="text-green-500" />}
            name="MongoDB"
          />
          <Skill icon={<FaGithub className="text-gray-300" />} name="GitHub" />
        </div>
      </section>

      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
        <div className="relative border-l border-gray-700 ml-6">
          {myJourney.map((item, idx) => (
            <div key={idx} className="mb-10 ml-6">
              <div className="absolute -left-3 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
              <h3 className="text-xl font-semibold text-white">
                {item.year} — {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="text-center px-6 pb-24">
        <h2 className="text-3xl font-bold mb-4">
          🚀 Let’s Build Something Amazing
        </h2>
        <p className="text-gray-400 mb-8">
          I’m open to collaborations, freelance work, and exciting
          opportunities.
        </p>
        <a
          href="/contact"
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg hover:opacity-90 transition"
        >
          Get In Touch
        </a>
      </section>
    </div>
  );
};

// Skill component
const Skill = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex flex-col items-center bg-gray-800/60 rounded-2xl p-6 shadow-lg backdrop-blur hover:scale-110 transition-transform duration-300">
    <div className="text-5xl mb-3">{icon}</div>
    <p className="text-sm font-medium text-gray-300">{name}</p>
  </div>
);

export default AboutPage;
