import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Set up __dirname emulation for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Allow any frontend domain (like your local machine AND your live Vercel site) to access this API
app.use(cors());
app.use(express.json());

// Fast shortcut to ignore browser favicon requests cleanly
app.get('/favicon.ico', (req, res) => res.status(204).end());

// API Route for Courses/Programs
app.get('/api/courses', (req, res) => {
  try {
    const coursesPath = path.join(__dirname, 'data', 'courses.json');
    if (!fs.existsSync(coursesPath)) {
      return res.status(404).json({ error: "courses.json file not found" });
    }
    const coursesData = fs.readFileSync(coursesPath, 'utf8');
    res.json(JSON.parse(coursesData));
  } catch (error) {
    console.error("Error reading courses:", error);
    res.status(500).json({ error: "Internal server error reading courses" });
  }
});

// API Route for Newsfeed
app.get('/api/news', (req, res) => {
  try {
    const newsPath = path.join(__dirname, 'data', 'news.json');
    if (!fs.existsSync(newsPath)) {
      return res.status(404).json({ error: "news.json file not found" });
    }
    const newsData = fs.readFileSync(newsPath, 'utf8');
    res.json(JSON.parse(newsData));
  } catch (error) {
    console.error("Error reading news:", error);
    res.status(500).json({ error: "Internal server error reading news" });
  }
});

// Dynamic Port Allocation: Uses Render's port in production, or 5000 on your local machine
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
});