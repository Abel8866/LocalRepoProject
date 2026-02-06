function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-sm bg-gray-100 rounded-xl shadow-md p-6">
        <h1 className="text-2xl font-semibold text-gray-900">Card Title</h1>
        <p className="mt-2 text-gray-700">
          This is a simple card component built with Tailwind CSS utility
          classes.
        </p>
        <button
          type="button"
          className="mt-4 inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Click Me
        </button>
      </div>
    </div>
  )
}

export default App
