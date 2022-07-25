from email.policy import default
from turtle import title
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

from sqlalchemy import desc

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Todo(db.Model):
    sno = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable = False)
    desc = db.Column(db.String(500), nullable = False)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    def __repr__(self) -> str:
        return f"{self.sno} - {self.title}"


@app.route("/")
def hello_world():
    todo = Todo(title = "first todo ", desc = 'this is my first task')
    db.session.add(todo)
    db.session.commit()
    allTodo = Todo.query.all()
    #print(allTodo)
    return render_template('index.html', allTodo=allTodo)

@app.route("/product")
def product():
    return "Hello, product!"

if __name__ == "__main__":
    app.run(debug=True)