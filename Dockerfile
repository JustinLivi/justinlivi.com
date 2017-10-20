FROM mhart/alpine-node:8.7.0

RUN apk --no-cache add python g++ make yarn

ARG ENV_FILE

RUN yarn global add pm2
RUN yarn global add node-gyp

COPY yarn.lock yarn.lock
COPY package.json package.json
RUN yarn install --verbose
RUN npm rebuild bcrypt --build-from-source

COPY server server
COPY public public
COPY build build
COPY src/ src/
COPY project.config.js project.config.js

CMD yarn start
