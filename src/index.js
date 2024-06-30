const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://ShwetaPurale:Shweta8032@cluster1.cgdu9eq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use('/api', authRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
