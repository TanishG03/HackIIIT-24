from flask import Flask, request, jsonify
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import json
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = '12345678'  # Replace with a more secure and random key
jwt = JWTManager(app)
CORS(app)


def read_db(filename):
    try:
        with open(filename, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return []  # Return an empty list if file not found

def write_db(filename, data):
    with open(filename, 'w') as file:
        json.dump(data, file, indent=4)

@app.route('/signup', methods=['POST'])
def signup():
    data = read_db('users.json')
    email = request.json.get('email')
    password = request.json.get('password')
    hashed_password = generate_password_hash(password)

    if any(user['email'] == email for user in data):
        return jsonify({'message': 'Email already exists'}), 409

    data.append({'email': email, 'password': hashed_password})
    write_db('users.json', data)

    return jsonify({'message': 'User created successfully'}), 201

@app.route('/login', methods=['POST'])
def login():
    data = read_db('users.json')
    email = request.json.get('email')
    password = request.json.get('password')

    user = next((user for user in data if user['email'] == email), None)
    if user and check_password_hash(user['password'], password):
        access_token = create_access_token(identity=email)
        return jsonify(access_token=access_token), 200

    return jsonify({'message': 'Invalid credentials'}), 401

@app.route('/rent-out', methods=['POST'])
def rent_out_bike():
    bike_data = request.json
    bikes = read_db('bikes.json')
    bike_data['id'] = len(bikes) + 1  # Simple ID generation
    bikes.append(bike_data)
    write_db('bikes.json', bikes)
    return jsonify({'message': 'Bike listed successfully'}), 201

def book_bike():
    current_user_email = get_jwt_identity()
    booking_data = request.json
    booking_data['user_email'] = current_user_email

    bookings = read_db('bookings.json')
    booking_data['id'] = len(bookings) + 1  # Simple ID generation
    bookings.append(booking_data)
    write_db('bookings.json', bookings)

    # Mark the booked bike as unavailable
    bikes = read_db('bikes.json')
    bike_id = booking_data['bikeId']
    for bike in bikes:
        if bike['id'] == bike_id:
            bike['isAvailable'] = False
            break
    write_db('bikes.json', bikes)

    return jsonify({'message': 'Bike booked successfully'}), 200

@app.route('/user-bookings', methods=['GET'])
@jwt_required()
def get_user_bookings():
    current_user_email = get_jwt_identity()
    all_bookings = read_db('bookings.json')
    user_bookings = [booking for booking in all_bookings if booking['user_email'] == current_user_email]

    return jsonify(user_bookings), 200

@app.route('/user-listings', methods=['GET'])
@jwt_required()
def get_user_listings():
    current_user_email = get_jwt_identity()
    all_listings = read_db('bikes.json')
    user_listings = [listing for listing in all_listings if listing['user_email'] == current_user_email]

    return jsonify(user_listings), 200

@app.route('/available-bikes', methods=['GET'])
def get_available_bikes():
    bikes = read_db('bikes.json')
    available_bikes = [bike for bike in bikes if bike.get('isAvailable', True)]
    return jsonify(available_bikes), 200

if __name__ == '__main__':
    app.run(debug=True)
