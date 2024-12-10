FROM node:18.18.0-alpine


WORKDIR /app

COPY package*.json ./
# Copy the rest of the source files into the image.

RUN npm install
COPY . .

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run dev
