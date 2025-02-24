# Build stage: Compile the Astro project
FROM node:lts AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Runtime stage: Serve with Nginx
FROM nginx:alpine AS runtime
# Copy the built Astro static files to Nginx's default html directory
COPY --from=build /app/dist /usr/share/nginx/html
# Copy a custom Nginx config for performance
COPY nginx.conf /etc/nginx/nginx.conf
# Expose port 80
EXPOSE 80
# Start Nginx in the foreground (Docker requirement)
CMD ["nginx", "-g", "daemon off;"]