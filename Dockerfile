FROM python:3.13-alpine

ENV TZ=UTC

WORKDIR /app

COPY /setup.py /dock2date /README.md /app/

COPY /requirements.txt /app/

RUN apk update && apk upgrade \
    && apk add --no-cache --virtual .build-deps gcc build-base linux-headers \
    ca-certificates musl-dev python3-dev libffi-dev openssl-dev cargo \
    && pip install --upgrade pip \
    && pip install --upgrade setuptools \
    && pip install --no-cache-dir -r requirements.txt \
    && apk del .build-deps

COPY /locales /app/locales

COPY /pydock2date /app/pydock2date

COPY /web /app/web

RUN pip install --no-cache-dir .

RUN mkdir /app/pydock2date/hooks

VOLUME /app/pydock2date/hooks

ENTRYPOINT ["dock2date"]
