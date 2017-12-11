FROM node:7
# FROM node:8.4-alpine
#FROM nodesource/node
#FROM nodesource/nsolid
#RUN apk add --no-cache --virtual .gyp python make g++
COPY package.json //
RUN npm install
COPY . //
ENV NODE_ENV "development npm start"
CMD ["npm", "start"]
