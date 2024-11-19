# Build Stage
FROM node:18 as build

# Set the working directory in the build container
WORKDIR /usr/src/app

# Copy only package.json and yarn.lock to leverage Docker's caching
COPY package.json yarn.lock ./

# Install dependencies using Yarn
RUN yarn install --production

# Copy the rest of the application source code
COPY . .

# Build the Docusaurus site
RUN yarn build

# Runtime Stage
FROM node:18-slim

# Install a lightweight static file server
RUN yarn global add serve

# Set the working directory in the runtime container
WORKDIR /usr/src/app

# Copy only the built files from the build stage
COPY --from=build /usr/src/app/build ./build

# Expose port 3000
EXPOSE 3000

# Start the static file server
CMD ["serve", "-s", "build", "-l", "3000"]