FROM node:10

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

RUN npm run build:prod

# CMD ["npm", "run", "start:prod"]

CMD ["sh", "-c", "sleep 30; npm run start:prod"]