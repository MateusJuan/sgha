import sqlite3
from flask import Flask, request, render_template, redirect, url_for
from werkzeug.security import generate_password_hash

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect('usuarios.db') 
    cursor = conn.cursor()

    cursor.execute('''CREATE TABLE IF NOT EXISTS usuarios (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nome TEXT NOT NULL,
                        email TEXT NOT NULL UNIQUE,
                        senha TEXT NOT NULL)''')

    conn.commit()
    conn.close()

init_db()

@app.route('/criar-conta', methods=['GET', 'POST'])
def criar_conta():
    if request.method == 'POST':
        nome = request.form.get('nome')
        email = request.form.get('email')
        senha = request.form.get('senha')

        if len(senha) < 6:
            return render_template('criar_conta.html', error="A senha deve ter pelo menos 6 caracteres.")

        senha_hash = generate_password_hash(senha)

        try:
            conn = sqlite3.connect('usuarios.db')
            cursor = conn.cursor()

            cursor.execute("INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)", (nome, email, senha_hash))
            conn.commit()

            return redirect(url_for('sucesso'))

        except sqlite3.IntegrityError:
            return render_template('criar_conta.html', error="Email já cadastrado!")

        finally:
            conn.close()

    return render_template('criar_conta.html')

@app.route('/sucesso')
def sucesso():
    return "Conta criada com sucesso!"

if __name__ == '__main__':
    app.run(debug=True)
