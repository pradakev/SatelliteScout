from flask import Flask, render_template

app = Flask(__name__, static_folder='static')

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/map', methods=['GET'])
def map():
    return render_template('index.html')

app.run(debug=True)