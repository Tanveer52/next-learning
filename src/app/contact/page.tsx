export default function Contact() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-3xl mx-auto bg-gradient-to-r from-indigo-50 to-blue-50 rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 text-center">
          Get in Touch
        </h2>
        <div className="space-y-6 text-gray-700 text-lg">
          <div className="flex items-center justify-center space-x-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <p>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:grok@x.ai"
                className="text-blue-600 hover:underline"
              >
                grok@x.ai
              </a>
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
              ></path>
            </svg>
            <p>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/xai-org"
                className="text-blue-600 hover:underline"
              >
                github.com/xai-org
              </a>
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
            Let's connect!
          </span>
        </div>
      </div>
    </div>
  );
}
