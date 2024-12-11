from . import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    preferences = db.Column(db.JSON)

class Route(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    start_point = db.Column(db.String(200), nullable=False)
    end_point = db.Column(db.String(200), nullable=False)
    coordinates = db.Column(db.Text, nullable=False)

