FROM node:14-alpine as build

ARG API_URL
ARG SOCKET_URL

ENV REACT_APP_API_URL=$API_URL
ENV REACT_APP_SOCKET_URL=$SOCKET_URL

WORKDIR /app
COPY ui/package.json ./
RUN yarn install
COPY ui/ .
RUN yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY docker/frontend/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
