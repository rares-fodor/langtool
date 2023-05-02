FROM python:3.11-alpine3.17

COPY . /usr/src/app
WORKDIR /usr/src/app

RUN \ 
	apk add --no-cache --virtual .build_deps gcc musl-dev libpq-dev && \
	pip install -r requirements.txt --no-cache-dir

EXPOSE 5000
CMD flask --app server.py --debug run --host=0.0.0.0 
