from flask import Flask, request

app = Flask(__name__) 

@app.route('/api/search', methods=["GET"])
def receive_query():
    print(request.args.get('q'))
    return "good"
