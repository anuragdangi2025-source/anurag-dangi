# Multi-stage build for optimized production image
FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy portfolio files
COPY index.html .
COPY styles.css .
COPY script.js .

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Add labels for metadata
LABEL maintainer="Anurag Dangi <anurag.dangi2025@gmail.com>"
LABEL description="Senior DevOps Engineer Portfolio - IIT Patna Graduate"
LABEL version="2.0"

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

