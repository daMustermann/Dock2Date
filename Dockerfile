FROM python:3.13-alpine

ENV TZ=UTC

WORKDIR /app

# Install build dependencies that are needed for pip install
RUN apk update && apk upgrade \
    && apk add --no-cache --virtual .build-deps gcc build-base linux-headers \
    ca-certificates musl-dev python3-dev libffi-dev openssl-dev cargo

# Install Python dependencies first to leverage Docker cache
COPY requirements.txt .
RUN pip install --upgrade pip setuptools \
    && pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application source code
COPY . .

# Install the application
RUN pip install -v --no-cache-dir .

# Clean up build dependencies
RUN apk del .build-deps

RUN mkdir /app/pydock2date/hooks

VOLUME /app/pydock2date/hooks

ENTRYPOINT ["dock2date"]
