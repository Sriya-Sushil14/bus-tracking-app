# Use Node.js 20 as base image (required for Angular CLI)
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install backend dependencies
COPY package*.json ./
RUN npm install

# Copy all files first
COPY . .

# Install Angular dependencies and build
WORKDIR /app/app_public
RUN npm install
RUN npm run build

# Go back to main directory
WORKDIR /app

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
