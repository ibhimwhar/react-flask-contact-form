from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/submit", methods=['POST'])
def Submit():
    data = request.get_json()

    name = data.get("name")
    description = data.get("description")

    if not name or not description:
        return jsonify({'error': 'Missing fields'}, 400)
    
    with open("messages.txt", 'a') as file:
        file.write(f"{name}: {description}\n")
    
    return jsonify({'success': True, 'description': 'Message recieved'})

if __name__ == "__main__":
    app.run(debug=True)
