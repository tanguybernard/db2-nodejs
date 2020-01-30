FROM node:12.14.1-stretch

RUN apt-get update
RUN apt-get install make python
COPY package.json /
COPY packages/app /

RUN npm install --production

CMD node server.js
