FROM node:20

WORKDIR /usr/src/app

COPY todo-frontend/ .

RUN npm ci

RUN npm test

RUN npm run build

RUN npm install -g serve

CMD ["serve", "-l", "3001", "dist"]
