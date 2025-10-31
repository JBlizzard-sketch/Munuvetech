import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  insertContactSubmissionSchema,
  insertNewsletterSubscriptionSchema,
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Blog routes
  app.get("/api/blog", async (req, res) => {
    try {
      const posts = await storage.getAllBlogPosts();
      res.json(posts);
    } catch (error) {
      console.error("Error fetching blog posts:", error);
      res.status(500).json({ error: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const post = await storage.getBlogPostBySlug(slug);
      
      if (!post) {
        return res.status(404).json({ error: "Blog post not found" });
      }
      
      res.json(post);
    } catch (error) {
      console.error("Error fetching blog post:", error);
      res.status(500).json({ error: "Failed to fetch blog post" });
    }
  });

  // Case study routes
  app.get("/api/case-studies", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      const studies = await storage.getAllCaseStudies(category);
      res.json(studies);
    } catch (error) {
      console.error("Error fetching case studies:", error);
      res.status(500).json({ error: "Failed to fetch case studies" });
    }
  });

  app.get("/api/case-studies/:slug", async (req, res) => {
    try {
      const { slug } = req.params;
      const study = await storage.getCaseStudyBySlug(slug);
      
      if (!study) {
        return res.status(404).json({ error: "Case study not found" });
      }
      
      res.json(study);
    } catch (error) {
      console.error("Error fetching case study:", error);
      res.status(500).json({ error: "Failed to fetch case study" });
    }
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.submitContactForm(validatedData);
      
      // In a real application, this would trigger an email notification
      console.log("Contact form submission:", submission);
      
      res.status(201).json({
        message: "Contact form submitted successfully",
        id: submission.id,
      });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      if (error instanceof Error && 'issues' in error) {
        return res.status(400).json({
          error: "Validation failed",
          details: error,
        });
      }
      res.status(500).json({ error: "Failed to submit contact form" });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Check if email already exists
      const subscription = await storage.subscribeNewsletter(validatedData);
      
      console.log("Newsletter subscription:", subscription);
      
      res.status(201).json({
        message: "Successfully subscribed to newsletter",
        id: subscription.id,
      });
    } catch (error) {
      console.error("Error subscribing to newsletter:", error);
      if (error instanceof Error && 'issues' in error) {
        return res.status(400).json({
          error: "Validation failed",
          details: error,
        });
      }
      res.status(500).json({ error: "Failed to subscribe to newsletter" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
