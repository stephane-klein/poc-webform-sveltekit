FROM node:18-alpine
RUN npm install -g pnpm@8.6.10

WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile --no-optional
RUN pnpm run build

FROM node:18-alpine
RUN npm install -g pnpm@8.6.10

WORKDIR /app

COPY --from=0 /app/package.json ./
COPY --from=0 /app/pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile --no-optional

COPY --from=0 /app/build ./
COPY ./docker-entrypoint.sh /docker-entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["sh"]
CMD ["/docker-entrypoint.sh"]
