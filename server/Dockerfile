FROM node:14.15.3

WORKDIR /home/nicalves/Docker

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD [ "npm","run","dev" ]