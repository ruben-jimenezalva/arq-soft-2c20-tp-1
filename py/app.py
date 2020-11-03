from flask import Flask
import time

TIMEOUT = 5

app = Flask(__name__)

@app.route("/")
def raiz():
    return "Ping python"

@app.route("/timeout")
def timeout():
    time.sleep(TIMEOUT)
    return 'timeout'

@app.route("/heavy")
def heavy():
    start = time.time()
    while(time.time() - start <= TIMEOUT):
        continue
    return 'heavy'

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')