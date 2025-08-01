FROM ubuntu:latest

ENV DEBIAN_FRONTEND=noninteractive

COPY . /var/www/html

RUN apt-get update -y && apt-get install -y apache2

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
