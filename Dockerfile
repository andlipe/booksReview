FROM node:14

RUN mkdir -p /usr/src/app/front
WORKDIR /usr/src/app/front

COPY package*.json ./

COPY . ./

RUN yarn
EXPOSE 3005

CMD "yarn" "start"