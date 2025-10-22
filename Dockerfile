# Use Node.js 18 as base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install backend dependencies
COPY package*.json ./
RUN npm install

# Copy Angular app package.json and install frontend dependencies
COPY app_public/package*.json ./app_public/
WORKDIR /app/app_public
RUN npm install

# Build Angular application
COPY app_public/ ./
RUN npm run build

# Go back to main directory and copy all files
WORKDIR /app
COPY . .

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
