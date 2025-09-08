# Use Node.js base image
FROM node:20-slim

WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean cache and install dependencies
RUN npm cache clean --force && \
    npm install --force

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Expose port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]