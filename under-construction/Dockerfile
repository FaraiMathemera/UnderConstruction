# Stage 1
FROM node:20.11.1-alpine as angular_build
WORKDIR /web
COPY package*.json ./
RUN npm install --silent
COPY . .
RUN npm run build --prod

# Stage 2
# FROM nginx:stable
# COPY --from=angular_build /web/dist/under-construction/browser /usr/share/nginx/html
# RUN echo "$PWD"
# COPY /nginx.conf /etc/nginx/conf.d/default.conf