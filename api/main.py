from flask import Flask, request
import requests
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv(dotenv_path="./.env.local")

UNSPLASH_URL="https://api.unsplash.com/photos/random"
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY","")
DEBUG=bool(os.environ.get("DEBUG",True))

if not UNSPLASH_KEY:
   raise EnvironmentError("Please create .env.local file and insery there UNSPLASH_KEY")

app= Flask(__name__)
CORS(app)

@app.route("/new-image")
def new_image():
    word= request.args.get("query")
    headers={
       "Accept-Version":"v1",
       "Authorization":"Client-ID " + UNSPLASH_KEY,
    }
    params={
       "query":word
    }
    response = requests.get(url=UNSPLASH_URL , headers=headers, params=params)
    data=response.json()
    return data



if __name__ == "__main__" :
  app.run(debug=DEBUG,port=5050,host="0.0.0.0") 