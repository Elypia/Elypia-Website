# Smallest appropriate image.
FROM nginx:1.17.2-alpine

MAINTAINER Syed Shah <seth@elypia.com>

# Copy over the website over, it's just a single directory.
COPY ./dist/elypia-com/ /usr/share/nginx/html/
COPY ./nginx.conf /etc/nginx/nginx.conf

# Check the README.md to find our what else you'll want to do with the resulting image.
