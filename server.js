const app = requiere ('./app');
const connectDB = requiere('./config/db');
require('dotenv').config();

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, ()=>{
    console.log(`server running on http://localhost:${PORT}`);
});