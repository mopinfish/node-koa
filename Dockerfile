# Use Node v6.9.5 as the base image.
FROM node:6.9.5
MAINTAINER otsukano

# setting environment variables. defualt is "current"
ARG STAGE="current"
ENV STAGE ${STAGE}

# Add everything in the current directory to our image, in the 'app' folder.
ADD . /app/node-koa

# Install dependencies
RUN cd /app/node-koa; \  
npm install --production; \
npm run build

# Expose our server port.
EXPOSE 3000

# Run our app.
WORKDIR /app/node-koa
CMD ["npm", "start"]  
