import { useEffect, useState } from "react";

const words: string[] = [
  "Morsalin",
  "Frontend Developer",
  "React Enthusiast",
  "Problem Solver",
];

const Hero = () => {
  const [text, setText] = useState<string>("");
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [charIndex, setCharIndex] = useState<number>(0);
  const [deleting, setDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentWord: string = words[wordIndex];
    const typingSpeed: number = deleting ? 80 : 150;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentWord.length) {
          setText(currentWord.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setDeleting(true), 1000);
        }
      } else {
        if (charIndex > 0) {
          setText(currentWord.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex]);

  return (
    <header className="flex flex-col justify-center items-center text-center py-16 px-6 bg-gray-900">
      {/* Typing heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
          {text}
        </span>
        <span className="animate-pulse text-blue-400">|</span>
      </h1>

      {/*.
       paragraph */}
      <p className="text-gray-300 text-lg sm:text-xl md:text-2xl max-w-3xl mb-10 leading-relaxed">
        I build <span className="text-blue-400 font-semibold">modern</span>,{" "}
        <span className="text-purple-400 font-semibold">responsive</span>, and{" "}
        <span className="text-amber-400 font-semibold">interactive</span> web
        apps using <span className="text-blue-400 font-semibold">React</span>,{" "}
        <span className="text-purple-400 font-semibold">TypeScript</span>,{" "}
        <span className="text-green-400 font-semibold">TailwindCSS</span>, and{" "}
        <span className="text-pink-400 font-semibold">Next.js</span>. I love
        turning ideas into{" "}
        <span className="text-blue-400 font-semibold">
          sleek user experiences
        </span>{" "}
        that{" "}
        <span className="text-purple-400 font-semibold">delight users</span> and{" "}
        <span className="text-amber-400 font-semibold">
          solve real problems
        </span>
        .
      </p>

      {/*  buttons */}
      <div className="flex flex-col sm:flex-row gap-5">
        <a
          href="#projects"
          className="px-7 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-gray-900 font-semibold rounded-xl shadow-lg hover:opacity-90 transition duration-300"
        >
          🚀 View Projects
        </a>
        <a
          href="#contact"
          className="px-7 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl shadow-lg hover:bg-blue-400 hover:text-gray-900 transition duration-300"
        >
          📩 Contact Me
        </a>
      </div>
    </header>
  );
};

export default Hero;
