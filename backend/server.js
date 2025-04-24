import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();
app.use(cors());

cloudinary.config({
     cloud_name: process.env.CLOUD_NAME,
     api_key: process.env.API_KEY,
     api_secret: process.env.API_SECRET,
});

app.get("/api/images", async (req, res) => {
     const folder = req.query.folder || "default-folder";
     try {
          const result = await cloudinary.search
               .expression(`folder:${folder}`)
               .sort_by("public_id", "desc")
               .max_results(30)
               .execute();
          res.json(result.resources);
     } catch (err) {
          res.status(500).json({ error: err.message });
     }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
