
FROM nginx:1.17.9

RUN rm -v /etc/nginx/nginx.conf

ADD nginx.conf /etc/nginx

RUN echo "daemon off;" >> /etc/nginx/nginx.conf


CMD ["service", "nginx", "start"]