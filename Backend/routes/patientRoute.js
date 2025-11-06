// logic related to patient

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { updatePatientInfo } = require("../controllers/patientController");
const upload = require("../middleware/uploadMiddleware");

// Update patient info with also profile pic
router.put("/update", authMiddleware, upload.single("profilePic"), updatePatientInfo);

module.exports = router;
