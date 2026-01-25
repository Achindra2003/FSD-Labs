import { useState } from 'react';

export default function BreedEdit({ breed, onSubmit }) {
  const [title, setTitle] = useState(breed.title);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim()) {
      onSubmit(breed.id, title);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="w-full px-4 py-3 rounded-xl border-2 border-purple-200 focus:border-purple-500 focus:outline-none transition-colors duration-200 bg-white/90"
        autoFocus
      />
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold px-4 py-3 rounded-xl hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200"
      >
         Save Changes
      </button>
    </form>
  );
}