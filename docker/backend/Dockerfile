FROM elixir:1.12.3-alpine as build

ARG ENV

RUN apk add --no-cache build-base git

WORKDIR /app

RUN mix local.hex --force
RUN mix local.rebar --force

ENV MIX_ENV=$ENV

COPY mix.exs mix.lock ./
COPY config config
RUN mix do deps.get, deps.compile

COPY priv priv
COPY lib lib
COPY test test
RUN mix do compile, release

FROM alpine:3.13

ARG ENV

RUN apk add --no-cache openssl ncurses-libs postgresql-client libgcc libstdc++ redis

WORKDIR /app

RUN chown nobody:nobody /app

USER nobody:nobody

COPY --from=build --chown=nobody:nobody /app/_build/$ENV/rel/mao ./
COPY docker/backend/entrypoint.sh entrypoint.sh

ENV HOME=/app

EXPOSE 4000
CMD ["bin/mao", "start"]
