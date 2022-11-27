# node:alpine will be our base image to create this image
FROM node:16-alpine

# Setup environment
RUN apk add --no-cache python2 g++ make

# Set the /app directory as working directory
WORKDIR /app

# Install ganache-cli globally
RUN sudo npm install truffle -g


# Set the default command for the image
CMD ["truffle", "migrate", "--reset"]

