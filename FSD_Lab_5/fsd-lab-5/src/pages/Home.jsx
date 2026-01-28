import { MonitorPlay, BookOpen, BarChart } from 'lucide-react';
import Carousel from '../components/Carousel';

const Home = ({ navigateTo }) => {
  const carouselItems = [
    {
      image: 'https://placehold.co/1200x600/6366F1/FFFFFF?text=Web+Development+Mastery',
      title: 'Web Development Mastery 2025',
      description: 'From HTML to React, become a full-stack developer with our comprehensive bootcamp.',
    },
    {
      image: 'https://placehold.co/1200x600/EC4899/FFFFFF?text=Data+Science+Path',
      title: 'The Data Science Path',
      description: 'Learn Python, Pandas, and Machine Learning to unlock insights from data.',
    },
    {
      image: 'https://placehold.co/1200x600/10B981/FFFFFF?text=UX/UI+Design+Fundamentals',
      title: 'UX/UI Design Fundamentals',
      description: 'Master the principles of user-centric design and create beautiful, functional applications.',
    },
  ];

  const features = [
      { icon: <MonitorPlay className="h-10 w-10 text-indigo-500"/>, title: "Expert-Led Video Courses", description: "Learn from industry professionals with real-world experience." },
      { icon: <BookOpen className="h-10 w-10 text-indigo-500"/>, title: "Interactive Learning", description: "Engage with quizzes, projects, and a vibrant community." },
      { icon: <BarChart className="h-10 w-10 text-indigo-500"/>, title: "Career-Focused Tracks", description: "Follow curated paths designed to get you job-ready." },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-indigo-700 text-white py-20 md:py-32">
         <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1600x900/4F46E5/FFFFFF?text=Learn+Without+Limits')"}}>
            <div className="absolute inset-0 bg-indigo-800 opacity-80"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Learn Without Limits
          </h1>
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-indigo-200 mb-8">
            Unlock your potential with expert-led online courses. Join thousands of learners and take the next step in your career.
          </p>
          <button
            onClick={() => navigateTo('courses')}
            className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full text-lg hover:bg-indigo-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Browse Courses
          </button>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  {features.map((feature, index) => (
                      <div key={index} className="p-6">
                        <div className="flex items-center justify-center h-20 w-20 mx-auto bg-indigo-100 rounded-full mb-4">
                          {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Carousel Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Courses</h2>
          <Carousel items={carouselItems} />
        </div>
      </section>
    </div>
  );
};

export default Home;