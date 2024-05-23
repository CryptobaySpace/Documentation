# Use the official Node.js image as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available) to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the Docusaurus site
RUN npm run build

# Install a simple server to serve your site
RUN npm install -g serve

# Inform Docker that the container listens on the specified port at runtime.
EXPOSE 3000

# Run the server command
CMD ["serve", "-s", "build", "-l", "3000"]
