FROM python:3.11-alpine3.17

COPY . /usr/src/app
WORKDIR /usr/src/app
RUN pip install -r requirements.txt

EXPOSE 5000
CMD flask --app server.py run --host=0.0.0.0

