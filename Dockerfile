FROM node:14-alpine

RUN mkdir -p /home/notifications-service/node_modules && chown -R node:node /home/notifications-service

WORKDIR /home/notifications-service

COPY --chown=node:node package*.json ./

RUN npm i

RUN npm cache clean --force

COPY --chown=node:node . .

USER node:node

EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]