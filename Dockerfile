FROM node:10-buster

# Create app directory
COPY . /app
WORKDIR /app
RUN npm -g install gatsby-cli
RUN npm install @babel/plugin-proposal-export-default-from
RUN npm install 
EXPOSE 5000

CMD ["gatsby","develop","-p","5000", "-H","0.0.0.0"]











