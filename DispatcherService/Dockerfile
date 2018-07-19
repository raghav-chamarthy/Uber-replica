FROM node:8

RUN wget https://yarnpkg.com/latest.tar.gz

RUN yarn global add nodemon@1.11.0

ADD ./package.json ./yarn.* /tmp/

RUN cd /tmp && npm install && yarn

RUN mkdir -p /usr/src/app
RUN cd /usr/src/app && ln -s /tmp/node_modules 

COPY . /usr/src/app/

WORKDIR /usr/src/app

EXPOSE 3000 

CMD ["npm","start"]