from flask import Blueprint, request, jsonify
from .utils import calculate_route
from .models import User, Route
from . import db

main = Blueprint('main', __name__)

@main.route('/api/route', methods=['POST'])
def get_route():
    data = request.json
    start = data.get('start')
    end = data.get('end')
    
    if not start or not end:
        return jsonify({'error': 'Start and end points are required'}), 400

    route = calculate_route(start, end)
    
    # Save route to database
    new_route = Route(start_point=start, end_point=end, coordinates=str(route['coordinates']))
    db.session.add(new_route)
    db.session.commit()

    return jsonify(route)

@main.route('/api/user/preferences', methods=['GET', 'POST'])
def user_preferences():
    if request.method == 'GET':
        # Fetch user preferences
        user = User.query.first()  # For simplicity, we're just getting the first user
        return jsonify(user.preferences)
    elif request.method == 'POST':
        # Update user preferences
        data = request.json
        user = User.query.first()  # For simplicity, we're just updating the first user
        user.preferences = data
        db.session.commit()
        return jsonify({'message': 'Preferences updated successfully'})

