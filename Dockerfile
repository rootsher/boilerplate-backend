FROM node:16 AS dev

WORKDIR /var/www/project/backend

CMD npm start
