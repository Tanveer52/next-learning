export default function Settings() {
  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Settings
      </h2>
      <div className="space-y-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Username
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
          />
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
          />
          <span className="text-gray-700 font-semibold">
            Enable email notifications
          </span>
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Theme
          </label>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors">
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}
