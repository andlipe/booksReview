FROM node:14

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app/api
WORKDIR /usr/src/app/api

COPY ./servidor_proxy/teste_ti_frontend/package*.json ./

COPY ./servidor_proxy/teste_ti_frontend ./
RUN npm install

EXPOSE 3000

# Running the app
CMD "npm" "start"