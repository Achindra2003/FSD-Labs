const ErrorMessage = ({ error }) => (
  <div className="bg-red-50 border-l-4 border-red-500 text-red-800 p-4 rounded-md" role="alert">
    <p className="font-bold">An Error Occurred</p>
    <p className="mt-1">Could not fetch data from the server. Please try again later.</p>
    <pre className="mt-3 text-xs bg-red-100 p-2 rounded">{error.message}</pre>
  </div>
);

export default ErrorMessage;