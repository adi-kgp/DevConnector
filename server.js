const express = require('express');

const connectDb = require('./config/db');

const app = express();

// connect database
connectDb();  

// Init middleware
app.use(express.json({extended: false})); /// to get data in req.body

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));

const PORT = process.env.PORT || 5000 ;

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

app.get('/', (req, res) => res.send('API running'));

