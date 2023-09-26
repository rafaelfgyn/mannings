FROM node

WORKDIR /src

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

RUN yarn knex:migrate

EXPOSE 3001

CMD ["yarn", "start"]
