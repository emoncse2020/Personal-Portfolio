import { Link } from "react-router";

const AboutPreview = () => {
  return (
    <section className="mt-12 p-12 flex flex-col md:flex-row items-ce gap-8 bg-gray-900">
      <img
        src="/images/morsalin.png"
        alt="Morsalin"
        className="w-32 h-31 rounded-full object-cover border-4 border-blue-400 shadow-md"
      />
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">About Me</h2>
        <p className="text-gray-300 mb-4 max-w-4xl">
          I’m Morsalin, a Frontend Developer crafting elegant, high-performance
          web experiences with React
        </p>
        <Link
          to="/about"
          className="mt-3 px-6 py-2 inline-block text-sm bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
        >
          Learn More About Me
        </Link>
      </div>
    </section>
  );
};

export default AboutPreview;
