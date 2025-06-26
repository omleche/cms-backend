const express = requiere('express');
const cors = requiere('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }));

//Routes
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/events', require('./routes/eventRoutes'));
app.use('/api/pages', require('./routes/pageRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/auth', require('./routes/authRoutes'));





module.exports = app;