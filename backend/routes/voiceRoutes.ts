import express from "express"
import multer from "multer"
import fs from "fs"

const router = express.Router()

// Ensure uploads folder exists safely
fs.mkdirSync("uploads", { recursive: true })

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname)
  }
})

const upload = multer({ storage: storage })

router.post("/voice", upload.single("audio"), async (req, res) => {
  res.json({
    message: "Audio uploaded",
    file: req.file
  })
})

export default router