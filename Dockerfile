FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

VOLUME [ "/node_modules" ]

CMD ["npm", "run", "dev"]