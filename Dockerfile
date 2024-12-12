FROM node:18.18.0-alpine AS builder


WORKDIR /app

COPY package*.json ./
# Copy the rest of the source files into the image.

RUN npm install
COPY . .

# Expose the port that the application listens on.
EXPOSE 80

FROM alpine
WORKDIR /app
COPY --from=builder /app/ /app/
RUN apk add --no-cache nodejs npm

# Run the application.
CMD HOST=0.0.0.0 PORT=80 npm run dev
