FROM node:20.12.2
COPY package*.json /.
RUN npm install
COPY . . 
VOLUME [ "/data" ]
CMD ["node","index.js"]