const CourseActivity = ({ courses }) => (
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
    <h2 className="text-xl font-bold mb-4 text-gray-800">Recent Course Activity</h2>
    <div className="space-y-3 max-h-[550px] overflow-y-auto pr-2">
      {courses.map(course => (
        <div key={course.id} className="bg-white p-4 rounded-lg border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-indigo-500">
          <h3 className="font-bold text-sm text-gray-800 truncate">{course.title}</h3>
          <p className="text-xs text-gray-500 mt-1 truncate">{course.body}</p>
        </div>
      ))}
    </div>
  </div>
);

export default CourseActivity;