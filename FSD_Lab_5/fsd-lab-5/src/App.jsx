import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import ContactForm from './pages/ContactForm';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'courses':
        return <Courses />;
      case 'contact':
        return <ContactForm />;
      case 'home':
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-800">
      <Navbar navigateTo={navigateTo} currentPage={currentPage} />
      <main className="pt-20">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}