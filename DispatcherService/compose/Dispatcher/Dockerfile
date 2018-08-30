FROM keymetrics/pm2:latest-alpine

RUN NPM_CONFIG_PREFIX=/home/node/.npm-global

RUN PATH=$PATH:/home/node/.npm-global/bin

RUN yarn global add nodemon@1.11.0

ADD ./package.json ./yarn.* /tmp/

RUN cd /tmp && npm install && yarn

RUN mkdir -p /usr/src/app
RUN cd /usr/src/app && ln -s /tmp/node_modules 

COPY . /usr/src/app/

WORKDIR /usr/src/app

EXPOSE 3000:3000

CMD ["pm2-runtime", "start", "ecosystem.config.js","--web", "port"]