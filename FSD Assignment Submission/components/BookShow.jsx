import { useState } from 'react';
import BookEdit from './BookEdit';

export default function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  const bookColors = [
    'from-red-400 to-pink-500',
    'from-blue-400 to-indigo-500',
    'from-green-400 to-emerald-500',
    'from-yellow-400 to-orange-500',
    'from-purple-400 to-pink-500',
    'from-indigo-400 to-purple-500',
  ];
  
  const colorClass = bookColors[book.id % bookColors.length];

  let content = (
    <div className="text-center">
      <div className={`w-24 h-32 mx-auto mb-4 rounded-lg bg-gradient-to-br ${colorClass} shadow-lg flex items-center justify-center transform hover:rotate-3 transition-transform duration-300`}>
        <span className="text-3xl">📖</span>
      </div>
      <h3 className="text-xl font-bold text-gray-800 leading-tight">{book.title}</h3>
    </div>
  );
  
  if (showEdit) {
    content = <BookEdit book={book} onSubmit={handleSubmit} />;
  }

  return (
    <div className="group bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300 border border-white/20">
      <div className="p-6 h-48 flex items-center justify-center">
        {content}
      </div>
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 flex justify-center gap-4">
        <button
          onClick={() => setShowEdit(!showEdit)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 hover:scale-110 transform shadow-lg"
          aria-label="Edit book"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(book.id)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 hover:scale-110 transform shadow-lg"
          aria-label="Delete book"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}