# Smallest appropriate image.
FROM nginx:1.17.2-alpine

LABEL maintainer="seth@elypia.com"

# Copy over the website over, it's just a single directory.
COPY ./dist/elypia-com/ /usr/share/nginx/html/

# Copy NGINX configuration.
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443

# Check the README.md to find our what else you'll want to do with the resulting image.
