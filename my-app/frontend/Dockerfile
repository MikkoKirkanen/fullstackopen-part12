FROM node:20

WORKDIR /usr/src/app

COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build

COPY dist .

RUN npm install -g serve

CMD ["serve", "dist"]
