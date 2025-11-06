const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");
const Patient = require("../models/Patient");

// upload file to patient record
router.post(
  "/upload-to-patient/:patientId",
  authMiddleware,
  upload.single("file"),
  async (req, res) => {
    try {
      // Ensure the user is a doctor
      if (req.user.role !== "doctor") {
        return res.status(403).send("Access denied");
      }
      const { patientId } = req.params;
      const fileUrl = req.file?.path;
      if (!fileUrl) {
        return res.status(400).send("File upload failed");
      }

      // Find the patient by _id
      const patient = await Patient.findById(patientId);
      if (!patient) {
        return res.status(404).send("Patient not found");
      }

      // Add the file URL to the patient's records
      patient.admin.medicalDocuments.push(fileUrl);
      await patient.save();

      res.status(200).json({
        message: "File uploaded successfully to patient record",
        fileUrl: fileUrl,
      });
    } catch (error) {
      console.error("Error uploading file to patient record:", error);
      res
        .status(500)
        .json({ message: "Server error uploading file", error: error.message });
    }
  }
);

module.exports = router;
