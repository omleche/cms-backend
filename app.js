const express = requiere('express');
const cors = requiere('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }));

//Routes
app.use ('/api/auth',requiere('./routes/authRoutes'));
app.use('/api/projects',requiere('./routes/projectRoutes'));



module.exports = app;