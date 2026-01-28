import StarIcon from './StarIcon';

const CourseCard = ({ course }) => {
  const { title, instructor, price, image, rating, students, category } = course;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={image} alt={title} />
        <div className="absolute top-2 right-2 bg-indigo-500 text-white text-xs font-bold px-2 py-1 rounded-full">{category}</div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-2 flex-grow">{title}</h3>
        <p className="text-sm text-gray-500 mb-4">By {instructor}</p>
        <div className="flex items-center justify-between text-sm text-gray-700 mb-4">
          <div className="flex items-center">
            <StarIcon className="w-5 h-5 text-yellow-400 mr-1" />
            <span className="font-bold">{rating}</span>
            <span className="text-gray-500 ml-1">({students.toLocaleString()})</span>
          </div>
          <p className="text-xl font-bold text-indigo-600">${price}</p>
        </div>
        <button className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300 mt-auto">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default CourseCard;