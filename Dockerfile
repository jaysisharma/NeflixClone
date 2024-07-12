# Use the official Node.js image as a base
FROM node:latest AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to /app
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to /app
COPY . .

# Build the project with Vite
RUN npm run build

# Stage 2: Serve the built app with Nginx
FROM nginx:latest

# Copy the build output from the previous stage to the NGINX html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Command to run NGINX in the foreground
CMD ["nginx", "-g", "daemon off;"]
