const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center h-96">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
    <p className="mt-4 text-lg text-gray-500">Loading Data...</p>
  </div>
);

export default LoadingSpinner;