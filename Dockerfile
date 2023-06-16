FROM node:14

WORKDIR /app

RUN npm i sequelize-cli

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]