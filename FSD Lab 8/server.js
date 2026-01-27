import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { getDataFromDB } from './database/db.js';
import { getDataByQueryParams } from './utils/getDataByQueryParams.js';
import { getDataByPathParams } from './utils/getDataByPathParams.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files with proper headers
app.use(express.static(path.join(__dirname, 'public'), {
    setHeaders: (res, filePath) => {
        if (filePath.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        }
    }
}));

// Serve static files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API Routes
app.get('/api', (req, res) => {
    res.json({ 
        message: 'Welcome to the EduHub API!', 
        endpoints: [
            'GET /api/courses - Get all courses',
            'GET /api/courses/:id - Get specific course'
        ]
    });
});

app.get('/api/courses', async (req, res) => {
    try {
        const courses = await getDataFromDB();
        const filteredData = getDataByQueryParams(courses, req.query);
        res.json(filteredData);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch courses' });
    }
});

app.get('/api/courses/:id', async (req, res) => {
    try {
        const courses = await getDataFromDB();
        const course = getDataByPathParams(courses, req.params.id);
        
        if (course) {
            res.json(course);
        } else {
            res.status(404).json({ 
                message: `Course with id ${req.params.id} not found.` 
            });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch course' });
    }
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});