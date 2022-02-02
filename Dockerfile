FROM node:16 AS dev

WORKDIR /var/www/project/backend

CMD npm start

## PROD
FROM node:16 AS prod

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build

EXPOSE 3002
CMD ["npm", "run", "start:prod"]
