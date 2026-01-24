import Image from 'next/image'
import Link from 'next/link'
import { Clock, Users, Star, ArrowRight } from 'lucide-react'

// Course data remains the same
const courses = [
  {
    id: 1,
    title: "Full Stack Web Development",
    instructor: "Sarah Johnson",
    duration: "12 weeks",
    students: 2450,
    rating: 4.8,
    price: "$99",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%_3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
  {
    id: 2,
    title: "Data Science with Python",
    instructor: "Michael Chen",
    duration: "10 weeks",
    students: 1890,
    rating: 4.9,
    price: "$129",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%_3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    title: "Digital Marketing Mastery",
    instructor: "Emma Davis",
    duration: "8 weeks",
    students: 3200,
    rating: 4.7,
    price: "$79",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%_3D%3D&auto=format&fit=crop&w=1415&q=80"
  },
  // ... other courses
];

export default function Courses() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 pb-24 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Explore Our <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Courses</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from a comprehensive collection of expert-led courses designed to advance your skills and career.
          </p>
        </div>
      </section>

      {/* --- */}
      <hr className="border-none" />

      {/* Courses Grid Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 border border-gray-200 overflow-hidden"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={`Promotional image for ${course.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 min-h-[56px]">{course.title}</h3>
                  <p className="text-sm font-medium text-indigo-600 mb-4">by {course.instructor}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600 border-t border-gray-100 pt-4 mb-4">
                    <div className="flex items-center space-x-1.5">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Users className="h-4 w-4 text-gray-400" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="font-bold">{course.rating}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">{course.price}</span>
                    <div className="flex items-center text-indigo-600 font-semibold">
                      <span>Details</span>
                      <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}