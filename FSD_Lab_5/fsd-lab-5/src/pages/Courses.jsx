import CourseCard from '../components/CourseCard';

const Courses = () => {
    const courses = [
        {
          id: 1,
          title: 'The Complete 2025 Web Development Bootcamp',
          instructor: 'Dr. Angela Yu',
          price: '49.99',
          image: 'https://placehold.co/600x400/3498db/ffffff?text=Web+Dev',
          rating: 4.8,
          students: 12500,
          category: 'Development'
        },
        {
          id: 2,
          title: 'Machine Learning A-Z™: AI, Python & R',
          instructor: 'Kirill Eremenko',
          price: '59.99',
          image: 'https://placehold.co/600x400/e74c3c/ffffff?text=ML',
          rating: 4.9,
          students: 9800,
          category: 'Data Science'
        },
        {
          id: 3,
          title: 'Graphic Design Masterclass - Learn GREAT Design',
          instructor: 'Lindsay Marsh',
          price: '39.99',
          image: 'https://placehold.co/600x400/9b59b6/ffffff?text=Design',
          rating: 4.7,
          students: 7600,
          category: 'Design'
        },
        {
          id: 4,
          title: 'The Complete Digital Marketing Course',
          instructor: 'Rob Percival',
          price: '44.99',
          image: 'https://placehold.co/600x400/2ecc71/ffffff?text=Marketing',
          rating: 4.6,
          students: 15300,
          category: 'Marketing'
        },
        {
          id: 5,
          title: 'iOS & Swift - The Complete iOS App Dev Bootcamp',
          instructor: 'Dr. Angela Yu',
          price: '54.99',
          image: 'https://placehold.co/600x400/f1c40f/ffffff?text=iOS+Dev',
          rating: 4.8,
          students: 6500,
          category: 'Development'
        },
        {
          id: 6,
          title: 'Python for Data Science and Machine Learning Bootcamp',
          instructor: 'Jose Portilla',
          price: '69.99',
          image: 'https://placehold.co/600x400/e67e22/ffffff?text=Python',
          rating: 4.9,
          students: 21000,
          category: 'Data Science'
        },
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Course Catalog</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a wide range of courses to skill up and achieve your goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
