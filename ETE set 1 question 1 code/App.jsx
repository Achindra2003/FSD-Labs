import { useState } from "react";
import BreedCreate from "./components/BreedCreate";
import BreedList from "./components/BreedList";

export default function App() {
  const [breeds, setBreeds] = useState([]);

  const editBreedById = (id, newTitle) => {
    const updatedBreeds = breeds.map((breed) => {
      if (breed.id === id) {
        return { ...breed, title: newTitle };
      }
      return breed;
    });
    setBreeds(updatedBreeds);
  };

  const deleteBreedById = (id) => {
    const updatedBreeds = breeds.filter((breed) => {
      return breed.id !== id;
    });
    setBreeds(updatedBreeds);
  };

  const createBreed = (title) => {
    const updatedBreeds = [
      ...breeds,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBreeds(updatedBreeds);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <BreedCreate onCreate={createBreed} />
      <main className="container mx-auto py-16 px-6">
        <BreedList
          breeds={breeds}
          onDelete={deleteBreedById}
          onEdit={editBreedById}
        />
      </main>
    </div>
  );
}