from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/submit', methods=['POST'])
def submit():
    # Adjust these fields according to your actual form
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')

    # Process data (for now, just print on server & return JSON)
    print(f"Received: name={name}, email={email}, message={message}")

    return jsonify({
        "status": "success",
        "message": "Form received successfully!",
        "data": {
            "name": name,
            "email": email,
            "message": message
        }
    })

if __name__ == '__main__':
    # Host 0.0.0.0 is required inside Docker
    app.run(host='0.0.0.0', port=8000, debug=True)
