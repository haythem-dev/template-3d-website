import type { Express } from "express";
import { createServer, type Server } from "http";
import { setupAuth } from "./auth";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Configure l'authentification et ajoute les routes /api/login, /api/register, etc.
  setupAuth(app);

  const httpServer = createServer(app);
  return httpServer;
}