document.addEventListener('DOMContentLoaded', () => {
    const coursesContainer = document.getElementById('courses-container');
    const categoryFilter = document.getElementById('category-filter');
    const levelFilter = document.getElementById('level-filter');
    const clearFiltersBtn = document.getElementById('clear-filters');
    const courseCount = document.getElementById('course-count');
    
    // Use relative URL for production compatibility
    const API_BASE_URL = window.location.origin;
    
    let allCourses = [];

    const getCategoryEmoji = (category) => {
        const emojis = {
            'Development': '💻',
            'Design': '🎨',
            'Marketing': '📈'
        };
        return emojis[category] || '📚';
    };

    const getLevelColor = (level) => {
        const colors = {
            'Beginner': 'bg-emerald-100 text-emerald-800 border-emerald-200',
            'Intermediate': 'bg-amber-100 text-amber-800 border-amber-200',
            'Advanced': 'bg-red-100 text-red-800 border-red-200'
        };
        return colors[level] || 'bg-gray-100 text-gray-800 border-gray-200';
    };

    const updateCourseCount = (count) => {
        const total = allCourses.length;
        courseCount.textContent = `${count} of ${total} courses`;
    };

    const renderCourses = (courses) => {
        if (courses.length === 0) {
            coursesContainer.innerHTML = `
                <div class="col-span-full text-center py-16">
                    <div class="text-6xl mb-4">😔</div>
                    <h3 class="text-xl font-semibold text-gray-700 mb-2">No courses found</h3>
                    <p class="text-gray-500">Try adjusting your filters to see more results.</p>
                </div>
            `;
            updateCourseCount(0);
            return;
        }

        coursesContainer.innerHTML = courses.map(course => `
            <div class="bg-white rounded-xl shadow-md overflow-hidden card-hover cursor-pointer border border-gray-100">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex items-center space-x-2">
                            <span class="text-2xl">${getCategoryEmoji(course.category)}</span>
                            <span class="text-sm font-medium text-purple-600">${course.category}</span>
                        </div>
                        <span class="px-3 py-1 text-xs font-semibold rounded-full border ${getLevelColor(course.level)}">
                            ${course.level}
                        </span>
                    </div>
                    
                    <h3 class="text-xl font-bold text-gray-900 mb-3 line-clamp-2">${course.title}</h3>
                    <p class="text-gray-600 text-sm leading-relaxed">${course.description}</p>
                    
                    <div class="mt-6 pt-4 border-t border-gray-100">
                        <button class="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium py-2 px-4 rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105">
                            View Course
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        
        updateCourseCount(courses.length);
    };

    const showLoading = () => {
        coursesContainer.innerHTML = `
            <div class="col-span-full flex justify-center items-center py-16">
                <div class="text-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                    <p class="text-gray-500">Loading courses...</p>
                </div>
            </div>
        `;
    };

    const showError = (message) => {
        coursesContainer.innerHTML = `
            <div class="col-span-full text-center py-16">
                <div class="text-6xl mb-4">⚠️</div>
                <h3 class="text-xl font-semibold text-red-600 mb-2">Oops! Something went wrong</h3>
                <p class="text-gray-600">${message}</p>
                <button onclick="location.reload()" class="mt-4 px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
                    Try Again
                </button>
            </div>
        `;
    };

    const fetchCourses = async () => {
        const category = categoryFilter.value;
        const level = levelFilter.value;

        const params = new URLSearchParams();
        if (category) params.append('category', category);
        if (level) params.append('level', level);
        
        const queryString = params.toString();
        const url = `${API_BASE_URL}/api/courses${queryString ? '?' + queryString : ''}`;

        showLoading();

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const courses = await response.json();
            
            // Store all courses on first load
            if (allCourses.length === 0) {
                allCourses = courses;
            }
            
            renderCourses(courses);
        } catch (error) {
            console.error('Failed to fetch courses:', error);
            showError('Could not load courses. Please make sure the server is running and try again.');
        }
    };

    const clearFilters = () => {
        categoryFilter.value = '';
        levelFilter.value = '';
        fetchCourses();
    };

    // Event listeners
    categoryFilter.addEventListener('change', fetchCourses);
    levelFilter.addEventListener('change', fetchCourses);
    clearFiltersBtn.addEventListener('click', clearFilters);

    // Add some smooth animations
    document.querySelectorAll('select').forEach(select => {
        select.addEventListener('focus', (e) => {
            e.target.classList.add('ring-2', 'ring-purple-500');
        });
        
        select.addEventListener('blur', (e) => {
            e.target.classList.remove('ring-2', 'ring-purple-500');
        });
    });

    // Initial load
    fetchCourses();
});