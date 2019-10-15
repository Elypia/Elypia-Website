# Smallest appropriate image.
FROM nginx:1.17.4-alpine

LABEL maintainer="seth@elypia.org"

# Copy over the website over, it's just a single directory.
COPY ./dist/elypia-website/ /usr/share/nginx/html/

# Copy NGINX configuration.
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

# Check the README.md to find our what else you'll want to do with the resulting image.
