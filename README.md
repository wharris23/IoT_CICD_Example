# IoT_CICD_2025

## 📦 Node.js TypeScript Backend

A backend application written in Node.js with TypeScript, using ESLint for linting, Vitest for testing, and Docker for containerization.

---

## 🚀 Getting Started

### Run the App Locally

1. Compile the TypeScript files:

```bash
npm run build
```

2. Start the app:

```bash
npm start
```

By default, the backend runs on port `5001`.

---

### 🧪 Run Tests with Vitest

Run all tests using Vitest:

```bash
npm run test
```

---

### 🧼 Run ESLint

Check your code for linting and style issues:

```bash
npm run lint
```

---

## 🐳 Docker

### 📦 Build Docker Image

Make sure the app is compiled before building the image:

```bash
npm run build
```

Then build the Docker image:

```bash
docker build -t your-docker-username/your-app-name:latest .
```

### 🚀 Run Docker Container

Run the container and map port 5001:

```bash
docker run -d -p 5001:5001 your-docker-username/your-app-name:latest
```

Your app will be accessible at:  
[http://localhost:5001](http://localhost:5001)

---

## ✅ Summary

- Build: `npm run build`
- Test: `npm run test`
- Lint: `npm run lint`
- Start: `npm start`
- Docker build: `docker build -t ...`
- Docker run: `docker run -d -p 5001:5001 ...`

---
