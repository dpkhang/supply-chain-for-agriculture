# node:alpine will be our base image to create this image
FROM node:16-alpine

# Setup environment
# RUN apk add --no-cache python2 g++ make

# Set the /app directory as working directory
COPY . .

WORKDIR /app

# Install ganache-cli globally
RUN npm install

# Set the default command for the image
CMD ["npm run start"]

