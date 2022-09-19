FROM node:16.10.0 AS development

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

RUN yarn add glob rimraf

COPY . .

RUN yarn build