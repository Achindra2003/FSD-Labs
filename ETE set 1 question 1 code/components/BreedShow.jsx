import { useState } from 'react';
import BreedEdit from './BreedEdit';

export default function BreedShow({ breed, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = (id, newTitle) => {
    onEdit(id, newTitle);
    setShowEdit(false);
  };

  let content = (
    <div className="text-center">
      <h3 className="text-xl font-bold text-gray-800 leading-tight">{breed.title}</h3>
    </div>
  );
  
  if (showEdit) {
    content = <BreedEdit breed={breed} onSubmit={handleSubmit} />;
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
          aria-label="Edit breed"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(breed.id)}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-red-500 text-white hover:bg-red-600 transition-colors duration-200 hover:scale-110 transform shadow-lg"
          aria-label="Delete breed"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}