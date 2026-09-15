import re

from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/send-email", methods=["POST"])
def send_email():
    name = request.form.get("name", "").strip()
    email = request.form.get("email", "").strip()
    message = request.form.get("message", "").strip()

    if not name or not email or not message:
        return {"status": "error", "message": "Completa todos los campos."}, 400

    if not re.fullmatch(r"[^\s@]+@[^\s@]+\.[^\s@]+", email):
        return {"status": "error", "message": "Ingresa un correo válido."}, 400

    # Simulación: no se envía un correo real.
    print(f"Correo simulado de {name} <{email}>: {message}")
    return {"status": "success", "message": "Envío simulado correctamente."}, 200


if __name__ == "__main__":
    app.run(debug=True)
