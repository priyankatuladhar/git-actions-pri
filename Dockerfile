# Use a lighter base image
FROM node:alpine AS builder

WORKDIR /app

COPY package*.json yarn.lock ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 3000

# Run database migration and start the application
CMD sh -c 'yarn migrate && yarn start'
