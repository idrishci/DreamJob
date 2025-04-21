// backend/middleware/upload.js
import multer from "multer";
import path from "path";

// Destination + file naming
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Choose folder based on file type
    const folder = file.fieldname === "cv" ? "uploaded/cv" : "uploaded/photo";
    cb(null, folder);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = Date.now() + "_" + file.fieldname + ext;
    cb(null, name);
  },
});

// Accept multiple fields
const upload = multer({ storage });

export default upload;
