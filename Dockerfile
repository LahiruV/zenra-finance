# Use the latest Alpine-based Nginx image
FROM nginx:alpine

# Update Alpine packages (including libxml2)
RUN apk update && apk upgrade

# Remove default Nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app
COPY dist /usr/share/nginx/html

# Expose HTTP port
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
