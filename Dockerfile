# Stage 1: Build stage — build and compile the app
FROM node:22-slim AS builder

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install all dependencies (including dev dependencies) for building
RUN npm ci

# Copy the rest of the source code into the container
COPY . .

# Run the build script (e.g. tsc) to compile TypeScript to JavaScript in /dist
RUN npm run build

# -----------------------------------------------------

# Stage 2: Runtime stage — smaller image with only production files
FROM node:22-slim

# Set working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json to install production dependencies
COPY package*.json ./

# Install only production dependencies (skip devDependencies)
RUN npm ci --omit=dev

# Copy the compiled JavaScript code from the builder stage into this image
COPY --from=builder /app/dist ./dist

# Expose port 5001 to the outside world
EXPOSE 5001

# Start the Node.js app by running the compiled entry point
CMD ["node", "dist/index.js"]
