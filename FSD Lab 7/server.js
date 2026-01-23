import http from 'node:http';
import { getDataFromDB } from './database/db.js';
import { sendJSONResponse } from './utils/sendJSONResponse.js';
import { getDataByQueryParams } from './utils/getDataByQueryParams.js';
import { getDataByPathParams } from './utils/getDataByPathParams.js';

const PORT = 8080;

const server = http.createServer(async (req, res) => {
    if (req.method === 'OPTIONS') {
        sendJSONResponse(res, 204, null);
        return;
    }

    const courses = await getDataFromDB();
    const url = new URL(req.url, `http://${req.headers.host}`);
    const queryObj = Object.fromEntries(url.searchParams);
    const pathParts = url.pathname.split('/').filter(part => part);

    if (url.pathname === '/api' && req.method === 'GET') {
        sendJSONResponse(res, 200, { message: 'Welcome to the IntelliLearn API. Use /api/courses to get all courses.' });
    } else if (url.pathname === '/api/courses' && req.method === 'GET') {
        const filteredData = getDataByQueryParams(courses, queryObj);
        sendJSONResponse(res, 200, filteredData);
    } else if (pathParts[0] === 'api' && pathParts[1] === 'courses' && pathParts.length === 3 && req.method === 'GET') {
        const courseId = pathParts[2];
        const course = getDataByPathParams(courses, courseId);
        if (course) {
            sendJSONResponse(res, 200, course);
        } else {
            sendJSONResponse(res, 404, { message: `Course with id ${courseId} not found.` });
        }
    } else {
        sendJSONResponse(res, 404, { message: 'Endpoint not found' });
    }
});

server.listen(PORT, () => console.log(`Server is running successfully on http://localhost:${PORT}`));
