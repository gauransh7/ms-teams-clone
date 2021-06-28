# Use an official node runtime as a parent image
FROM node:buster-slim

WORKDIR /app/

# Install dependencies
# COPY package.json /app/

COPY . /app/

RUN npm install

# Add rest of the client code

EXPOSE 3000

# CMD npm start