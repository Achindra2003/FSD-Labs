import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      { id: Math.round(Math.random() * 9999), title: title },
    ];
    setBooks(updatedBooks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <BookCreate onCreate={createBook} />
      <main className="container mx-auto py-16 px-6">
        <BookList
          books={books}
          onDelete={deleteBookById}
          onEdit={editBookById}
        />
      </main>
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-20 w-2 h-2 bg-purple-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-40 w-1 h-1 bg-pink-400 rounded-full animate-bounce opacity-50" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-blue-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-yellow-300 rounded-full animate-bounce opacity-50" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
      </div>
    </div>
  );
}