import { useState } from "react";

export default function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim()) {
      onCreate(title);
      setTitle("");
    }
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-300/20 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-yellow-300/15 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16">
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 bg-clip-text bg-gradient-to-r from-white to-gray-200">
            📚 My Reading Universe
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Curate your literary journey with style
          </p>
        </div>
        
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
        >
          <div className="relative flex-grow">
            <input
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="w-full px-6 py-4 rounded-2xl border-0 shadow-2xl text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-purple-300/50 bg-white/95 backdrop-blur-sm text-lg"
              placeholder="What's your next great read?"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-sm -z-10"></div>
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold px-8 py-4 rounded-2xl shadow-2xl hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300 text-lg"
          >
            ✨ Add Book
          </button>
        </form>
      </div>
    </div>
  );
}