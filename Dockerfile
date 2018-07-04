FROM node:8.11
MAINTAINER Jacob Pham <dieupx@ctnet.vn>
ENV HOST 0.0.0.0
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#clone app from git
ADD ./ /usr/src/app
RUN cd /usr/src/app
# Bundle app
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm","start"]