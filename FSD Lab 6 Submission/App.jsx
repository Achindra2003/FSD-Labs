import React, { useEffect } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import useAxios from './hooks/useAxios';

export default function App() {
  const { data: students, error: studentsError, loading: studentsLoading } = useAxios('https://jsonplaceholder.typicode.com/users');
  const { data: courses, error: coursesError, loading: coursesLoading } = useAxios('https://jsonplaceholder.typicode.com/posts?_limit=12');

  useEffect(() => {
    document.title = 'IntelliLearn Analytics Dashboard';
  }, []);

  const renderContent = () => {
    if (studentsLoading || coursesLoading) {
      return <LoadingSpinner />;
    }

    if (studentsError || coursesError) {
      return <ErrorMessage error={studentsError || coursesError} />;
    }
    
    if (students && courses) {
      return <Dashboard students={students} courses={courses} />;
    }

    return null; 
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      <Header />
      <main className="p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
}