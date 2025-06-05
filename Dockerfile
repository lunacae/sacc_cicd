FROM node:22-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm build
EXPOSE 3000
CMD ["node", "/usr/src/app/dist/app.js"]
