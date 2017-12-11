FROM node:7
# FROM node:8.4-alpine
#FROM nodesource/node
#FROM nodesource/nsolid
RUN apk add --no-cache --virtual .gyp python make g++
COPY . //
RUN npm install
ENV NODE_ENV "development npm start"
CMD ["npm", "start"]
