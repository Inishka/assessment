# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory
WORKDIR /app

# Expose port 3000 for Next.js app
EXPOSE 3000

# Set the NODE_ENV to development (important for Next.js)
ENV NODE_ENV=development

# Copy package.json and yarn.lock to the working directory
COPY package*.json yarn*.lock ./

# Install frontend dependencies using Yarn
RUN yarn install

# Copy all source files to the working directory
COPY . .

# Start the Next.js app using Yarn
CMD ["yarn", "run", "dev"]