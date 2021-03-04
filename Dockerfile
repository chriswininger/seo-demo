#
# Copyright (c) 2011-present Sonatype, Inc. All rights reserved.
# Includes the third-party code listed at http://links.sonatype.com/products/clm/attributions.
# "Sonatype" is a trademark of Sonatype, Inc.
#

FROM docker-all.repo.sonatype.com/nginx:1.15.12

#Copy bundled application and dependencies
RUN mkdir -p /usr/src/app
ADD build /usr/src/app/

ADD dockerFiles/scripts /scripts
COPY dockerFiles/nginx/nginx.conf /etc/nginx/nginx.conf
COPY dockerFiles/nginx/default.conf /etc/nginx/conf.d/default.conf
RUN chmod +x -R ./scripts

#Set the rest endpoint enivornment variable
ENV REACT_APP_API_URL ${REACT_APP_API_URL:-/api/v1/}

EXPOSE 80

# Start Nginx server
CMD ["/bin/bash", "-c", "/scripts/create-runtime-env.sh && nginx -g \"daemon off;\""]

EXPOSE 80
