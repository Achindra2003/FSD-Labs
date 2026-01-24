import Link from 'next/link'
import Image from 'next/image'
import { Users, Award, Globe, Heart, CheckCircle, ArrowRight } from 'lucide-react'

// Data for team members with the broken image URL replaced
const teamMembers = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80',
    bio: 'Former Google educator with 15+ years in EdTech'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Technology',
    image: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    bio: 'Ex-Microsoft engineer specializing in learning platforms'
  },
  {
    name: 'Emma Davis',
    role: 'Head of Content',
    image: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    bio: 'Curriculum designer from Stanford Online'
  }
];

// Data for core values
const values = [
  {
    icon: Users,
    title: 'Community First',
    description: 'We believe in building a supportive learning community where everyone can thrive and grow together.',
    color: 'bg-blue-500'
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'We maintain the highest standards in our courses, ensuring every learner receives premium education.',
    color: 'bg-green-500'
  },
  {
    icon: Globe,
    title: 'Global Access',
    description: 'Making quality education accessible to learners worldwide, breaking down geographical barriers.',
    color: 'bg-purple-500'
  },
  {
    icon: Heart,
    title: 'Passion for Learning',
    description: 'We are driven by our love for education and genuine commitment to student success.',
    color: 'bg-red-500'
  }
];

// Key achievements to be displayed
const achievements = [
  "Founded in 2018 with a mission to democratize education",
  "Over 50,000 successful student outcomes",
  "Partnerships with 100+ industry-leading companies",
  "Available in 12+ languages worldwide",
  "98% course completion satisfaction rate"
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 pt-20 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
              About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">EduTech</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering learners worldwide with accessible, high-quality online education 
              that transforms lives, advances careers, and builds the future workforce.
            </p>
          </div>
        </div>
      </section>

      {/* --- */}
      <hr className="border-none" />

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-900 tracking-tight">Our Mission</h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  At EduTech, we're on a mission to democratize education and make learning 
                  accessible to everyone, everywhere. We believe that knowledge has the power 
                  to transform lives and create unprecedented opportunities.
                </p>
                <p>
                  Through our comprehensive online platform, we connect curious minds with 
                  world-class instructors and cutting-edge curriculum designed to meet the 
                  demands of today's rapidly evolving digital economy.
                </p>
              </div>
              
              <div className="space-y-3 pt-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="A diverse group of students collaborating happily"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements for visual flair */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-2xl opacity-20 transform rotate-12"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl opacity-20 transform -rotate-12"></div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}
      <hr className="border-none" />

      {/* Values Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our learning community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="group bg-white p-8 rounded-2xl shadow-sm border border-transparent hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
                <div className={`${value.color} w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- */}
      <hr className="border-none" />

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Meet Our Leadership</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate educators and innovators building the future of online learning.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
            {teamMembers.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-48 h-48 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300 mb-6">
                  <Image
                    src={member.image}
                    alt={`Headshot of ${member.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-semibold text-lg mb-3">{member.role}</p>
                <p className="text-gray-600 max-w-xs mx-auto">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* --- */}
      <hr className="border-none" />

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-5xl font-bold text-white mb-2">50,000+</div>
              <div className="text-indigo-200 text-lg">Active Students</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-indigo-200 text-lg">Expert Instructors</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-white mb-2">1,200+</div>
              <div className="text-indigo-200 text-lg">Courses Available</div>
            </div>
            <div className="p-6">
              <div className="text-5xl font-bold text-white mb-2">98%</div>
              <div className="text-indigo-200 text-lg">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}
      <hr className="border-none" />

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Ready to Join Our Community?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your learning journey today and become part of our success story.
          </p>
          <Link 
            href="/courses" 
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}