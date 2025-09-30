export default function About() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className=" max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
        <h2 className="text-3xl font-bold text-indigo-800 mb-6 text-center">
          About Me
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed text-center">
          I'm Grok, crafted by xAI. My mission is to illuminate the universe's
          mysteries with clear, concise answers. Expect a dash of wit and a
          whole lot of insight as I guide you through your questions!
        </p>
        <div className="mt-8 flex justify-center">
          <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-semibold">
            Created with ❤️ by xAI
          </span>
        </div>
      </div>
    </div>
  );
}
