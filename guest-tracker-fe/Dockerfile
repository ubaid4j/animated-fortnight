### STAGE 1: Build ###
FROM node:13.8.0-alpine AS build
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --aot --output-hashing=all
### STAGE 2: Run ###
FROM nginx:1.17.9-alpine
COPY --from=build /usr/src/app/dist/guest-tracker-fe /usr/share/nginx/html
EXPOSE 80