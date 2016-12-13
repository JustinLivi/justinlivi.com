FROM node:6.9.1

RUN npm install -g pm2
RUN npm install -g node-gyp

COPY package.json package.json
RUN npm install

COPY webpack.config.js webpack.config.js
COPY src/ src/

RUN npm run build
RUN npm prune --production

CMD npm start
