# Smallest appropriate image.
FROM nginx:1.17.6-alpine

LABEL maintainer="seth@elypia.org"

# Copy over the website(s) over, it's just a single directory.
COPY ./dist/ /usr/share/nginx/html/

# Copy NGINX configuration.
COPY ./nginx.conf /etc/nginx/nginx.conf

# No need to export port 443 unless users will connect directly to this webserver.
EXPOSE 80

# Check the README.md to find our what else you'll want to do with the resulting image.
