# Use Node.js with proper OpenSSL (NOT SLIM)
FROM node:20-bullseye

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Expose port
EXPOSE 4000

# Start the app
CMD ["node", "server.js"]
