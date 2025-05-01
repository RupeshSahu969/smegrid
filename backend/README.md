# SMEgrid Backend API

This is the backend API for the SMEgrid service page, built with Node.js, Express, and MongoDB.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the root directory with the following variables:
   ```
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/smegrid
   ```

3. Make sure MongoDB is running on your local machine or update the MONGO_URI with your MongoDB connection string.

## Available Scripts

- `npm start`: Starts the server in production mode
- `npm run dev`: Starts the server with nodemon for development
- `npm run seed`: Seeds the database with initial service data
- `npm run seed:delete`: Deletes all service data from the database

## API Endpoints

### Services

- `GET /api/services`: Get all services
- `GET /api/services/:id`: Get a single service by ID
- `POST /api/services`: Create a new service
- `PUT /api/services/:id`: Update a service
- `DELETE /api/services/:id`: Delete a service

### Service Object Structure

```json
{
  "icon": "FaTruck",
  "title": "Metal Procurement",
  "description": "Strategic sourcing of metals and raw materials...",
  "points": [
    "Global network of verified suppliers",
    "Just-in-time delivery",
    "Cost optimization through bulk purchasing"
  ]
}
```

## Integration with Frontend

To connect this API with the frontend, update your frontend service component to fetch data from the API instead of using hardcoded data.
