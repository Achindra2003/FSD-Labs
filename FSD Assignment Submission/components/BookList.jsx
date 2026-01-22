import BookShow from './BookShow';

export default function BookList({ books, onDelete, onEdit }) {
  if (books.length === 0) {
    return (
      <div className="flex flex-col items-center text-center py-20">
        <div className="w-32 h-32 mb-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-lg animate-pulse">
          <span className="text-5xl">📚</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-600 mb-4">Your library awaits</h2>
        <p className="text-gray-500 text-lg max-w-md">
          Start building your personal reading collection by adding your first book above!
        </p>
        <div className="mt-8 flex space-x-4">
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
          <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
        </div>
      </div>
    );
  }

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} key={book.id} book={book} onEdit={onEdit} />
    );
  });

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          My Collection ({books.length} book{books.length !== 1 ? 's' : ''})
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {renderedBooks}
      </div>
    </div>
  );
}