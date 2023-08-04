
FROM node:latest
WORKDIR /
COPY . .
COPY package.json .
COPY package-lock.json .
RUN npm install
RUN npm run build
CMD [ "npm", "start" ]