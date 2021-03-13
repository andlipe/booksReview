FROM node:14

ENV PORT 3000

# Create app directory
RUN mkdir -p /usr/src/app/api
WORKDIR /usr/src/app/api

COPY /servidor_proxy/teste_ti_frontend/package*.json ./
RUN npm install

COPY ./servidor_proxy/teste_ti_frontend/ /usr/src/app/api

EXPOSE 3000

# Running the app
CMD "npm" "start"