import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";

import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure l'authentification et ajoute les routes /api/login, /api/register, etc.
  setupAuth(app);

  app.post("/api/submit-cv", upload.single("cvFile"), (req, res) => {
    try {
      // Here you would typically save the form data to your database
      // For now, we'll just send back a success response
      res.json({ message: "CV submitted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Failed to submit CV" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}