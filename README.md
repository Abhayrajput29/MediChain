# 🏥 MediChain - Telemedicine & EHR Platform

MediChain is a **role-based web application** built with **Node.js, Express.js, MongoDB, and EJS**.  
It allows patients to manage their health data, doctors to update medical records, and admins to oversee the system securely.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat&logo=tailwind-css&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=flat&logo=bootstrap&logoColor=white)


🚀 Live Demo links: 

- [MediChain](https://medichainreal.netlify.app/)
- [MediChain Backend](https://medichain.up.railway.app/)

---

## ✨ Features

- **🛡️ Role-Based Access Control** — Separate secure dashboards for **Patients**, **Doctors**, and **Hospitals**.  
- **🔐 JWT Authentication System** — Ensures secure login and session management.  
- **👤 Patient Management** — Patients can view, update, and upload profile pictures and health data.  
- **📂 Cloud File Uploads** — Doctors and hospitals can upload lab reports and prescriptions to patient records using **Multer + Cloudinary**.  
- **💬 Chat History & Health Notes** — Stores doctor–patient interactions securely.  
- **☁️ Cloud-Based Data Storage** — All medical data and images are safely hosted via **MongoDB Atlas** and **Cloudinary**.  
- **🧠 AI Integration (Coming Soon)** — Planned **Google Gemini AI** integration to analyze lab reports and generate medical insights.  

---

## 🛠️ Technologies Used

- **Backend:** Node.js, Express.js  
- **Frontend:** EJS, Tailwind CSS  
- **Database:** MongoDB Atlas (Mongoose ODM)  
- **Authentication:** JWT + Cookies  
- **File Uploads:** Multer + Cloudinary  
- **Deployment:** Render (Backend), Netlify (Frontend) 

---

## 📂 Project Structure
```
MediVault/
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── connect.js
│ ├── server.js
│ ├── .env
│ └── package.json
│
└── frontend/
├── src/
│ ├── components/
│ ├── pages/
│ ├── assets/
│ └── main.jsx
├── vite.config.js
├── index.html
├── .env
└── package.json
```


---

## ⚡ Setup Instructions

Follow these steps to run the project locally:

### 🔹 Backend Setup
```bash
git clone https://github.com/theadarsh1m/MediChain.git
(open that Medichain folder for simplicity)
cd Backend
```

### 2.Install dependencies
```bash
npm install
```

### 3. Configure environment variables
```
# Server Configuration
PORT=5000

# MongoDB Connection
MONGODB_URI=your_mongodb_atlas_connection_string

JWT_SECRET=YourSuperSecretKey
JWT_EXPIRES_IN=7d

Frontend_URL=http://localhost:5173 # local frontend
 
# File Upload setup
CLOUDINARY_CLOUD_NAME=YOUR_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=YOUR_CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET=YOUR_CLOUDINARY_API_SECRET
```
- ⚠️ Replace your_mongodb_atlas_connection_string, JWT_SECRET(for dev), CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET(for file uploads) with your own.

### 4. Start the server
```bash
npm start
```

### 5. Open New Terminal
```bash
cd Frontend
```

### 6. Install dependencies
```bash
npm install
```

### 7. Configure environment variables
```
VITE_Backend_API_URL=http://localhost:5000 # local backend
```
### 8. Start the server
```bash
npm run dev
```


## 📊 Screenshots


### Landing Page
<img width="1408" height="736" alt="medichain landing page" src="https://github.com/user-attachments/assets/652994c8-40af-45e0-8317-568fd2f08a15" />

### Dashboard 
_(Under development)_  



---

## ⭐ Contribute

Want to improve **MediChain**? Follow these steps to safely contribute:

1. **Fork the repo**  
2. **Create a new branch (`feature-xyz`)**  
   create a new branch for each feature or bug fix. Replace `feature-xyz` with a descriptive name like `fix-login-bug` or `add-appointment-feature`.

3. **Commit changes**  
   save your progress using `git commit -m "Describe your change"`.

4. **Open a Pull Request 🚀**  
   open a Pull Request (PR) from your branch to the main repository.


## Developers

- [Adarsh Sachan](https://www.linkedin.com/in/adarshsachan01/) 🔗
- [Abhinav Sahu](https://www.linkedin.com/in/abhinav-sahu-865a01297/) 🔗
- [Only Abhinav](https://www.linkedin.com/in/abhinav-kumar-10a942262/) 🔗

---
