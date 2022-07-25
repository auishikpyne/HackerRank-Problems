from unittest import result
from preprocess import *
from flask import Flask
import json

app = Flask(__name__)

@app.route("/")
def speaker_diarization():
    result = create_labelling(labels, wav_splits)

    return json.dumps(result) 

if __name__ == "__main__":
    app.run(debug=True)