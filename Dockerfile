FROM node:latest
 
WORKDIR /app
 
COPY package.json package.json
#COPY package-lock.json package-lock.json

RUN npm cache clean --force
RUN npm install
 
COPY . .

EXPOSE 1337
 
CMD [ "node", "index.js" ]