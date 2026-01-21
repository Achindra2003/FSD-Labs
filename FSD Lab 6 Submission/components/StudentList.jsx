const StudentList = ({ students }) => (
  <div className="bg-white p-4 sm:p-6 rounded-xl shadow-sm">
    <h2 className="text-xl font-bold mb-4 text-gray-800">Student Roster</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-50 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4 hidden md:table-cell">Company</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {students.map(student => (
            <tr key={student.id} className="hover:bg-gray-50 transition-colors duration-200">
              <td className="p-4 font-medium text-gray-800">{student.name}</td>
              <td className="p-4 text-indigo-600 truncate">{student.email}</td>
              <td className="p-4 text-gray-600 hidden md:table-cell">{student.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default StudentList;