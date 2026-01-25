import BreedShow from './BreedShow';

export default function BreedList({ breeds, onDelete, onEdit }) {
  if (breeds.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-20">

        <h2 className="text-3xl font-bold text-gray-600 mb-4">Your pets await</h2>
        <p className="text-gray-500 text-lg max-w-md">
          Start building your personal pets collection by adding your first breed above!
        </p>

      </div>
    );
  }

  const renderedBreeds = breeds.map((breed) => {
    return (
      <BreedShow onDelete={onDelete} key={breed.id} breed={breed} onEdit={onEdit} />
    );
  });

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          My Collection ({breeds.length} breed{breeds.length !== 1 ? 's' : ''})
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {renderedBreeds}
      </div>
    </div>
  );
}