import { Users, BookOpen, AlertCircle } from 'lucide-react';
import StatCard from './StatCard';
import StudentList from './StudentList';
import CourseActivity from './CourseActivity';

const Dashboard = ({ students, courses }) => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
      <p className="text-gray-500 mb-8">Welcome back! Here's a summary of your platform's activity.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Users className="h-8 w-8 text-indigo-500" />} title="Total Students" value={students.length} />
        <StatCard icon={<BookOpen className="h-8 w-8 text-green-500" />} title="Active Courses" value={courses.length} />
        <StatCard icon={<Users className="h-8 w-8 text-yellow-500" />} title="Avg. Posts per User" value={(courses.length / students.length).toFixed(2)} />
        <StatCard icon={<AlertCircle className="h-8 w-8 text-red-500" />} title="API Errors" value="0" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <StudentList students={students} />
        </div>
        <div>
          <CourseActivity courses={courses} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;