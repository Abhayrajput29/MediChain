const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "medivault/profile_pics",
    allowed_formats: ["jpg", "jpeg", "png", "webp","svg"],
    public_id: (req, file) => `${req.user.id}-${Date.now()}`,
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
});

module.exports = upload;
