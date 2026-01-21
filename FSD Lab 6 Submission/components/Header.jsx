import { BarChart2 } from 'lucide-react';

const Header = () => (
  <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <a href="#" className="text-xl font-bold text-indigo-600 flex items-center">
            <BarChart2 className="h-7 w-7 mr-2" />
            IntelliLearn Analytics
          </a>
        </div>
      </div>
    </div>
  </header>
);

export default Header;