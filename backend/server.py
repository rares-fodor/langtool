import json

from flask import Flask, request, Response
from database_io import search_sentence

app = Flask(__name__) 


@app.route('/api/search', methods=["GET"])
def receive_query():
    """
    Query database and return response as JSON
    """
    res = search_sentence(request.args.get('q'))
    return Response(response=json.dumps(res), status=200)

