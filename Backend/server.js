const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const path = require("path");
const cookieParser = require('cookie-parser');

const { connectToMongoDB } = require('./config/connect');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const patientRoute = require('./routes/patientRoute');
const doctorUploadRoute = require('./routes/doctorUploadRoute');

const app = express();

app.use(cors({
  origin: 'http://localhost:5173', // frontend url
  credentials: true // This allows cookies/sessions to be sent
}));


const PORT = process.env.PORT || 5000;

connectToMongoDB(process.env.MONGO_URI);

// Middleware
app.use(express.json());  // Express built-in middleware to parse JSON
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // to parse cookies
app.use(express.static('public'));

// auth routes -> jitne bhi req /auth k baad aegi vo authRoutes handle krega
app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);

app.use("/patient", patientRoute);
app.use("/doctor", doctorUploadRoute);

// Main page route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to MediVault API" });
});

// Handle 404, if no route matches above
app.use((req, res) => {
  res.status(404).json({ message: "Page Not Found" });
});




app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});