FROM node:20

WORKDIR /usr/src/app

COPY frontend/ .

RUN npm ci

CMD ["npm", "run", "dev"]
