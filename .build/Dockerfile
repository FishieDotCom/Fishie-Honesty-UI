FROM node:18.15.0-alpine3.17

WORKDIR /root
COPY . .

RUN npm install \
 && rm -rf /usr/local/share/.cache

CMD npm run start
