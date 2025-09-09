import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware for parsing JSON
app.use(express.json());

// Sample route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello from Node.js TypeScript App!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
