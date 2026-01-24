import { BookOpen, Clock, Trophy, TrendingUp, Calendar, Target, Award, PlayCircle } from 'lucide-react'

const stats = [
  { name: 'Courses Enrolled', value: '8', icon: BookOpen, color: 'bg-blue-500', bgColor: 'bg-blue-50', textColor: 'text-blue-600' },
  { name: 'Hours Learned', value: '124', icon: Clock, color: 'bg-green-500', bgColor: 'bg-green-50', textColor: 'text-green-600' },
  { name: 'Certificates Earned', value: '3', icon: Trophy, color: 'bg-yellow-500', bgColor: 'bg-yellow-50', textColor: 'text-yellow-600' },
  { name: 'Progress Rate', value: '78%', icon: TrendingUp, color: 'bg-purple-500', bgColor: 'bg-purple-50', textColor: 'text-purple-600' },
]

const recentCourses = [
  { 
    name: 'Full Stack Web Development', 
    progress: 75, 
    lastAccessed: '2 hours ago',
    nextLesson: 'React Hooks Deep Dive',
    totalLessons: 24,
    completedLessons: 18
  },
  { 
    name: 'Data Science with Python', 
    progress: 45, 
    lastAccessed: '1 day ago',
    nextLesson: 'Machine Learning Basics',
    totalLessons: 20,
    completedLessons: 9
  },
  { 
    name: 'Digital Marketing Mastery', 
    progress: 90, 
    lastAccessed: '3 days ago',
    nextLesson: 'Final Project',
    totalLessons: 16,
    completedLessons: 14
  },
]

const upcomingEvents = [
  { title: 'Live Workshop: Advanced React', date: 'Today, 3:00 PM', type: 'Workshop' },
  { title: 'Career Guidance Session', date: 'Tomorrow, 10:00 AM', type: 'Webinar' },
  { title: 'Project Review', date: 'Dec 28, 2:00 PM', type: 'Review' },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, Alex! 👋</h1>
          <p className="text-gray-600 mt-2">Here's your learning progress overview for this week</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className={`${stat.bgColor} rounded-2xl p-6 border border-gray-200`}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600 mb-1">{stat.name}</p>
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`${stat.color} p-3 rounded-xl`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Continue Learning */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-900">Continue Learning</h2>
                <p className="text-gray-600 text-sm">Pick up where you left off</p>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  {recentCourses.map((course, index) => (
                    <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1">{course.name}</h3>
                          <p className="text-sm text-gray-600 mb-2">Next: {course.nextLesson}</p>
                          <p className="text-xs text-gray-500">Last accessed {course.lastAccessed}</p>
                        </div>
                        <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-lg transition-colors">
                          <PlayCircle className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">Progress</span>
                          <span className="font-medium text-gray-900">
                            {course.completedLessons}/{course.totalLessons} lessons • {course.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-medium transition-colors">
                  View All Courses
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Upcoming Events
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 text-sm">{event.title}</p>
                        <p className="text-xs text-gray-600">{event.date}</p>
                        <span className="inline-block mt-1 px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                          {event.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-900 flex items-center">
                  <Award className="h-5 w-5 mr-2" />
                  Recent Achievements
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-xl">
                    <div className="bg-yellow-500 p-2 rounded-lg">
                      <Trophy className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900 text-sm">Course Completed!</p>
                      <p className="text-xs text-gray-600">Digital Marketing Mastery</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl">
                    <div className="bg-green-500 p-2 rounded-lg">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900 text-sm">Learning Streak</p>
                      <p className="text-xs text-gray-600">7 days in a row!</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <BookOpen className="h-5 w-5 text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="font-medium text-gray-900 text-sm">New Enrollment</p>
                      <p className="text-xs text-gray-600">Machine Learning Basics</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}